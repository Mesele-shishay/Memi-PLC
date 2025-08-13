"use client";

import React from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { CommandPalette } from "@/components/command-palette";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { Toaster } from "@/components/ui/sonner";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCmdOpen, setIsCmdOpen] = React.useState(false);

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const isK = event.key.toLowerCase() === "k";
      if (isK && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        setIsCmdOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <ProtectedRoute>
      <SidebarProvider
        style={
          {
            // keep in sync with original dashboard page styling
            "--sidebar-width": "calc(var(--spacing) * 72)",
            "--header-height": "calc(var(--spacing) * 12)",
          } as React.CSSProperties
        }
      >
        <AppSidebar variant="inset" onSearch={() => setIsCmdOpen(true)} />
        <SidebarInset>
          <SiteHeader />
          <CommandPalette open={isCmdOpen} onOpenChange={setIsCmdOpen} />
          <div className="relative flex flex-1 flex-col overflow-hidden">
            {/* Background layers to mirror home page aesthetics */}
            <div className="pointer-events-none absolute inset-0">
              <div className="gradient-bg-light absolute inset-0" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.08),transparent_45%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(37,99,235,0.06),transparent_45%)]" />
              <div className="aurora-blob aurora-blob--violet top-1/3 -right-24 w-[24rem] h-[24rem] animation-delay-2000" />
              <div className="aurora-blob aurora-blob--indigo -bottom-24 left-1/4 w-[30rem] h-[30rem] animation-delay-4000" />
              <div className="grid-overlay absolute inset-0 opacity-40" />
            </div>

            {/* Content container */}
            <div className="relative @container/main flex flex-1 flex-col">
              <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex-1">
                {children}
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
      <Toaster />
    </ProtectedRoute>
  );
}
