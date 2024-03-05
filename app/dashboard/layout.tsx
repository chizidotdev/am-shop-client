import { DashboardProvider } from "@/modules/dashboard/context-store";
import { DashboardNav } from "@/modules/dashboard/navbar";
import React from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardProvider>
      <div className="min-h-dvh">
        <DashboardNav />
        <div className="max-w-7xl mx-auto px-5 py-10">{children}</div>
      </div>
    </DashboardProvider>
  );
}
