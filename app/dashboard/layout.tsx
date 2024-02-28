import { DashboardNav } from "@/modules/dashboard/navbar";
import React from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <DashboardNav />
      <div className="max-w-7xl mx-auto px-5 py-10">{children}</div>
    </div>
  );
}
