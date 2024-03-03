"use client";

import { formatCurrency } from "@/lib/utils";
import { Button } from "@/ui/button";
import { Text } from "@/ui/text";
import { Badge } from "@/ui/badge";
import { Checkbox } from "@/ui/checkbox";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { ColumnDef } from "@tanstack/react-table";
import { ProductActions } from "./product-list-actions";
import { EditProduct } from "./edit-product";

export const dashboardProductColumns: ColumnDef<Product>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <EditProduct product={row.original}>
        <Button variant="ghost" className="capitalize px-4">
          {row.getValue("title")}
        </Button>
      </EditProduct>
    ),
    enableHiding: false,
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => <Text className="min-w-60">{row.getValue("description")}</Text>,
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <div className="w-full text-right">
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      </div>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"));
      const formatted = formatCurrency(amount);
      return (
        <Text className="text-right px-4" variant="h4">
          {formatted}
        </Text>
      );
    },
  },
  {
    accessorKey: "outOfStock",
    header: "Status",
    cell: ({ row }) => {
      const outOfStock = row.getValue("outOfStock");
      return (
        <div className="min-w-24">
          <Badge variant={outOfStock ? "destructive" : "outline"}>
            {outOfStock ? "Out of stock" : "In stock"}
          </Badge>
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => <ProductActions product={row.original} />,
  },
];
