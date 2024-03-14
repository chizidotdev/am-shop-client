import { Card } from "@/ui/card";
import { Skeleton } from "@/ui/skeleton";
import React from "react";

export default function LoadingDashboard() {
  return (
    <div className="flex flex-col gap-6">
      <Skeleton className="w-96 h-8" />
      <Card className="p-6">
        <Skeleton className="w-full h-80" />
      </Card>
    </div>
  );
}
