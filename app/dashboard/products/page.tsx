"use client";
import { ComingSoonBadge } from "@/common/coming-soon-badge";
import { AddProduct } from "@/modules/dashboard/products/add-product";
import { DashboardProductGrid } from "@/modules/dashboard/products/dashboard-product-grid";
import { OptionsMenu } from "@/modules/dashboard/products/options-menu";
import { Button } from "@/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/ui/card";
import { Text } from "@/ui/text";
import { ToggleGroup, ToggleGroupItem } from "@/ui/toggle-group";
import React from "react";
import { CiGrid41, CiViewTable } from "react-icons/ci";
import { DataTable } from "@/ui/data-table";
import { dashboardProductColumns } from "@/modules/dashboard/products/table-columns";
import { FilterOption, FilterOptions } from "@/modules/dashboard/products/filter-options";
import { useDashboard } from "@/modules/dashboard/context-store";
import { WhatsappImport } from "@/modules/dashboard/products/whatsapp-import";

export default function DashboardProducts() {
  const [filter, setFilter] = React.useState<FilterOption>("all");
  const [view, setView] = React.useState("grid");
  const { products, isFetchingProducts } = useDashboard();

  const hasProducts = products.length > 0;

  let body = <div>Loading...</div>;

  if (!isFetchingProducts && !hasProducts) {
    body = (
      <div className="h-60 flex flex-col justify-center items-start">
        <Text variant="h2">Add your products</Text>
        <Text>Start by adding your products to the store for your customers to see.</Text>

        <div className="flex gap-3 mt-5">
          <AddProduct>
            <Button>Add Product</Button>
          </AddProduct>
          <Button variant="secondary" disabled>
            <WhatsappImport />
          </Button>
        </div>
      </div>
    );
  }

  if (!isFetchingProducts && hasProducts) {
    body = (
      <>
        {view === "grid" ? (
          <DashboardProductGrid products={products} />
        ) : (
          <DataTable data={products} columns={dashboardProductColumns} />
        )}
      </>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between gap-5">
        <Text variant="h1">Products</Text>

        <OptionsMenu />
      </div>
      <Card>
        <CardHeader className="py-3">
          <div className="flex items-center justify-between gap-1">
            <div className="flex items-center gap-1">
              <ToggleGroup
                type="single"
                value={filter}
                onValueChange={(f: FilterOption) => setFilter(f)}
              >
                {hasProducts ? (
                  <FilterOptions filter={filter} setFilter={setFilter} />
                ) : (
                  <ToggleGroupItem value="all" disabled>
                    <Text className="text-xs">All</Text>
                  </ToggleGroupItem>
                )}
              </ToggleGroup>
            </div>
            <ToggleGroup type="single" value={view} onValueChange={setView}>
              <ToggleGroupItem value="grid">
                <CiGrid41 size={24} />
              </ToggleGroupItem>
              <ToggleGroupItem value="table">
                <CiViewTable size={24} />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </CardHeader>
        <CardContent className="border-t p-3 sm:p-6">{body}</CardContent>
        <CardFooter className="bg-background-dashboard flex-col items-start pt-6">
          <Text variant="h3">Connect to a vendor</Text>
          <Text>Connect to a vendor to import products from your vendor to your store.</Text>

          <Button className="mt-5" variant="outline" disabled>
            Connect Vendor &nbsp;
            <ComingSoonBadge />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
