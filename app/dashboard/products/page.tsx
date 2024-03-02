"use client";
import { ComingSoonBadge } from "@/common/coming-soon-badge";
import { OptionsMenu } from "@/modules/dashboard/products/options-menu";
import { Button } from "@/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/ui/card";
import { Text } from "@/ui/text";
import React from "react";

export default function DashboardProducts() {
  const [filter, setFilter] = React.useState("all");

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between gap-5">
        <Text variant="h1">Products</Text>

        <OptionsMenu />
      </div>
      <Card>
        <CardHeader className="py-3">
          <div className="flex items-center gap-1">
            <Button variant="secondary" size="sm" disabled>
              All
            </Button>
            {/*filterOptions.map((option) => (
              <Button variant="ghost" size="sm">
                {option.label}
              </Button>
            ))*/}
          </div>
        </CardHeader>
        <CardContent className="border-t p-6">
          <div className="h-60 flex flex-col justify-center items-start">
            <Text variant="h2">Add your products</Text>
            <Text>Start by adding your products to the store for your customers to see.</Text>

            <div className="flex gap-3 mt-5">
              <Button>Add Product</Button>
              <Button variant="secondary" disabled>
                Import &nbsp;
                <ComingSoonBadge />
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="bg-background-dashboard flex-col items-start pt-6">
          <Text variant="h3">Connect to a vendor</Text>
          <Text>Connect to a vendor to import products from your vendor to your store.</Text>

          <Button className="mt-5" variant="outline">
            Connect Vendor
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

const filterOptions = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
  { label: "Archive", value: "archive" },
];
