"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ContactMessage } from "@/types";
import { Eye, MailOpen, Mail, Trash2, RefreshCw } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { api } from "@/lib/apiClient";

export default function ContactInboxPage() {
  const [items, setItems] = React.useState<ContactMessage[] | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [updating, setUpdating] = React.useState<string | null>(null);
  const [deleting, setDeleting] = React.useState<string | null>(null);
  const [viewing, setViewing] = React.useState<ContactMessage | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  async function load() {
    setLoading(true);
    setError(null);
    try {
      const data = await api.internal<ContactMessage[]>(
        "/api/dashboard/messages"
      );
      setItems(data);
    } catch (err: any) {
      console.error("Failed to load messages:", err);
      setError(err?.message || "Failed to load messages");
      setItems(null);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    let mounted = true;
    load();
    return () => {
      mounted = false;
    };
  }, []);

  async function toggleRead(id: string, read: boolean) {
    setUpdating(id);
    try {
      await api.internal(`/api/dashboard/messages/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ read }),
      });
      setItems(
        (prev) => prev?.map((m) => (m.id === id ? { ...m, read } : m)) || prev
      );
    } catch (err: any) {
      console.error("Failed to update message:", err);
      // Revert the UI change on error
      setItems(
        (prev) =>
          prev?.map((m) => (m.id === id ? { ...m, read: !read } : m)) || prev
      );
    } finally {
      setUpdating(null);
    }
  }

  async function onDelete(id: string) {
    if (!confirm("Delete this message?")) return;
    setDeleting(id);
    try {
      await api.internal(`/api/dashboard/messages/${id}`, {
        method: "DELETE",
      });
      setItems((prev) => prev?.filter((m) => m.id !== id) || prev);
    } catch (err: any) {
      console.error("Failed to delete message:", err);
      alert("Failed to delete message. Please try again.");
    } finally {
      setDeleting(null);
    }
  }

  return (
    <div className="py-4 md:py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Contact Messages</h1>
        <div className="flex gap-2">
          <Button variant="outline" onClick={load}>
            <RefreshCw className="mr-2 size-4" /> Refresh
          </Button>
          <Button asChild>
            <Link href="/contact">Open Public Form</Link>
          </Button>
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-red-800">
              <span className="text-sm font-medium">Error:</span>
              <span className="text-sm">{error}</span>
            </div>
            <Button variant="outline" size="sm" onClick={load}>
              <RefreshCw className="mr-2 size-3" /> Retry
            </Button>
          </div>
        </div>
      )}

      {loading ? (
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <Card key={i}>
              <CardHeader className="flex-row items-center justify-between">
                <div className="flex items-center gap-3">
                  <Skeleton className="size-10 rounded-full" />
                  <div>
                    <Skeleton className="h-4 w-40" />
                    <div className="mt-2 flex gap-2">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                  </div>
                </div>
                <Skeleton className="h-9 w-28" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6 mt-2" />
                <Skeleton className="h-4 w-2/3 mt-2" />
              </CardContent>
              <CardFooter>
                <div className="flex gap-2">
                  <Skeleton className="h-9 w-20" />
                  <Skeleton className="h-9 w-20" />
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>Inbox</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table className="min-w-[800px]">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12"></TableHead>
                    <TableHead>From</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="w-40">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {items?.length === 0 ? (
                    <TableRow>
                      <TableCell
                        colSpan={6}
                        className="text-center py-8 text-muted-foreground"
                      >
                        No messages found
                      </TableCell>
                    </TableRow>
                  ) : (
                    items?.map((m) => (
                      <TableRow
                        key={m.id}
                        className={!m.read ? "bg-muted/40" : ""}
                      >
                        <TableCell>
                          <Checkbox
                            checked={m.read}
                            onCheckedChange={(val) =>
                              toggleRead(m.id, Boolean(val))
                            }
                            disabled={updating === m.id}
                          />
                        </TableCell>
                        <TableCell className="whitespace-nowrap">
                          <div className="font-medium">
                            {m.firstName} {m.lastName}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {m.email}
                          </div>
                        </TableCell>
                        <TableCell className="max-w-[380px]">
                          <div className="font-medium line-clamp-1">
                            {m.subject}
                          </div>
                          <div className="text-sm text-muted-foreground line-clamp-1">
                            {m.message}
                          </div>
                        </TableCell>
                        <TableCell>
                          {m.inquiryType ? (
                            <Badge variant="secondary">{m.inquiryType}</Badge>
                          ) : (
                            <Badge variant="outline">General</Badge>
                          )}
                        </TableCell>
                        <TableCell className="whitespace-nowrap text-sm text-muted-foreground">
                          {new Date(m.createdAt).toLocaleString()}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => {
                                    setViewing(m);
                                    if (!m.read) toggleRead(m.id, true);
                                  }}
                                >
                                  <Eye className="size-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>View</TooltipContent>
                            </Tooltip>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => toggleRead(m.id, !m.read)}
                                  disabled={updating === m.id}
                                >
                                  {m.read ? (
                                    <MailOpen className="size-4" />
                                  ) : (
                                    <Mail className="size-4" />
                                  )}
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                {m.read ? "Mark as unread" : "Mark as read"}
                              </TooltipContent>
                            </Tooltip>

                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  size="sm"
                                  variant="destructive"
                                  className="rounded-full bg-red-600 hover:bg-red-700 text-white dark:bg-red-600 dark:hover:bg-red-500 focus-visible:ring-red-500"
                                  onClick={() => onDelete(m.id)}
                                  disabled={deleting === m.id}
                                >
                                  <Trash2 className="size-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>Delete</TooltipContent>
                            </Tooltip>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      )}
      <Sheet open={!!viewing} onOpenChange={(o) => !o && setViewing(null)}>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle className="text-lg">
              {viewing?.subject || "Message"}
            </SheetTitle>
            <SheetDescription>
              {viewing ? new Date(viewing.createdAt).toLocaleString() : ""}
            </SheetDescription>
          </SheetHeader>
          {viewing ? (
            <div className="p-4 space-y-4">
              <div className="grid grid-cols-1 gap-2 text-sm">
                <div>
                  <span className="text-muted-foreground">From: </span>
                  <span className="font-medium">
                    {viewing.firstName} {viewing.lastName}
                  </span>
                </div>
                <div>
                  <span className="text-muted-foreground">Email: </span>
                  <a href={`mailto:${viewing.email}`} className="underline">
                    {viewing.email}
                  </a>
                </div>
                {viewing.phone ? (
                  <div>
                    <span className="text-muted-foreground">Phone: </span>
                    <a href={`tel:${viewing.phone}`} className="underline">
                      {viewing.phone}
                    </a>
                  </div>
                ) : null}
                {viewing.company ? (
                  <div>
                    <span className="text-muted-foreground">Company: </span>
                    <span>{viewing.company}</span>
                  </div>
                ) : null}
                {viewing.inquiryType ? (
                  <div>
                    <span className="text-muted-foreground">Type: </span>
                    <span>{viewing.inquiryType}</span>
                  </div>
                ) : null}
              </div>
              <div className="border rounded-md p-3 text-sm whitespace-pre-wrap">
                {viewing.message}
              </div>
            </div>
          ) : null}
        </SheetContent>
      </Sheet>
    </div>
  );
}
