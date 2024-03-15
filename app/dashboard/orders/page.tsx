"use client";
import { Card, CardContent, CardHeader } from "@/ui/card";
import { Text } from "@/ui/text";
import { ToggleGroup, ToggleGroupItem } from "@/ui/toggle-group";
import React from "react";
import { DataTable } from "@/ui/data-table";
import { FilterOptions } from "@/modules/dashboard/orders/filter-options";
import { useDashboard } from "@/modules/dashboard/context-store";
import { dashboardOrderColumns } from "@/modules/dashboard/orders/table-columns";
import { EmptyIcon } from "@/common/empty-icon";
import { useFilter } from "@/common/hooks/useFilter";

export default function DashboardOrders() {
  const { filter, setFilter } = useFilter<OrderFilterOption>("all");
  const { getOrders, isFetchingOrders } = useDashboard();
  const [orders, hasOrders] = getOrders(filter);

  let body = <div>Loading...</div>;

  if (!isFetchingOrders && !hasOrders) {
    body = (
      <div className="h-60 flex flex-col justify-center items-center text-center max-w-lg mx-auto my-10">
        <EmptyIcon />
        <Text variant="h4">Your orders will show here</Text>
        <Text className="mt-2">
          This is where you’ll be able to view your orders, track their status, and manage them.
        </Text>
      </div>
    );
  }

  if (!isFetchingOrders && hasOrders) {
    body = <DataTable data={orders} columns={dashboardOrderColumns} />;
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between gap-5">
        <Text variant="h1">Orders</Text>
      </div>
      <Card>
        <CardHeader className="py-3">
          <div className="flex items-center justify-between gap-1">
            <div className="flex items-center gap-1">
              <ToggleGroup
                type="single"
                value={filter}
                onValueChange={(f: OrderFilterOption) => setFilter(f)}
              >
                {hasOrders ? (
                  <FilterOptions />
                ) : (
                  <ToggleGroupItem value="all" disabled>
                    <Text className="text-xs">All</Text>
                  </ToggleGroupItem>
                )}
              </ToggleGroup>
            </div>
          </div>
        </CardHeader>
        <CardContent className="border-t p-3 sm:p-6">{body}</CardContent>
      </Card>
    </div>
  );
}
