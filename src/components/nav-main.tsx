"use client";

import { IconChevronDown, type Icon } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import * as React from "react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuAction,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: Icon;
    items?: { title: string; url: string }[];
  }[];
}) {
  const pathname = usePathname();
  const [expandedItemTitles, setExpandedItemTitles] = React.useState<
    Set<string>
  >(new Set());

  React.useEffect(() => {
    const next = new Set<string>();
    for (const item of items) {
      if (
        item.items &&
        item.items.some((child) =>
          child.url === "/" ? pathname === "/" : pathname.startsWith(child.url)
        )
      ) {
        next.add(item.title);
      }
    }
    setExpandedItemTitles(next);
  }, [pathname, items]);

  const toggleExpanded = (title: string) => {
    setExpandedItemTitles((prev) => {
      const next = new Set(prev);
      if (next.has(title)) next.delete(title);
      else next.add(title);
      return next;
    });
  };
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items.map((item) => {
            const hasChildren =
              Array.isArray(item.items) && item.items.length > 0;
            const childActive = hasChildren
              ? item.items!.some((child) =>
                  child.url === "/"
                    ? pathname === "/"
                    : pathname.startsWith(child.url)
                )
              : false;
            const isActive =
              childActive ||
              (item.title === "Dashboard"
                ? pathname === "/dashboard" || pathname === "/dashboard/"
                : item.url === "/"
                ? pathname === "/"
                : pathname.startsWith(item.url));
            const isExpanded =
              expandedItemTitles.has(item.title) || childActive;
            return (
              <SidebarMenuItem key={item.title}>
                {hasChildren ? (
                  <SidebarMenuButton
                    tooltip={item.title}
                    isActive={isActive}
                    aria-expanded={isExpanded}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleExpanded(item.title);
                    }}
                  >
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                ) : (
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    isActive={isActive}
                  >
                    <a href={item.url}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                )}
                {hasChildren && (
                  <SidebarMenuAction
                    aria-label={isExpanded ? "Collapse" : "Expand"}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleExpanded(item.title);
                    }}
                    className="rounded-sm"
                  >
                    <IconChevronDown
                      className={
                        isExpanded
                          ? "rotate-180 transition-transform"
                          : "transition-transform"
                      }
                    />
                  </SidebarMenuAction>
                )}
                {hasChildren && isExpanded && (
                  <SidebarMenuSub>
                    {item.items!.map((child) => {
                      const subActive =
                        child.url === "/"
                          ? pathname === "/"
                          : pathname.startsWith(child.url);
                      return (
                        <SidebarMenuSubItem key={child.title}>
                          <SidebarMenuSubButton asChild isActive={subActive}>
                            <a href={child.url}>
                              <span>{child.title}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      );
                    })}
                  </SidebarMenuSub>
                )}
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
