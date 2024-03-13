"use client";

import { formatCurrency, formatDate } from "@/lib/utils";
import { Button } from "@/ui/button";
import { Text } from "@/ui/text";
import { Badge, BadgeProps } from "@/ui/badge";
import { Checkbox } from "@/ui/checkbox";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { ColumnDef } from "@tanstack/react-table";

export const dashboardOrderColumns: ColumnDef<VendorOrder>[] = [
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
    accessorKey: "orderDate",
    header: "Date",
    cell: ({ row }) => (
      <Text className="min-w-20 line-clamp-1">{formatDate(row.getValue("orderDate"))}</Text>
    ),
  },
  {
    accessorKey: "productTitle",
    header: "Product",
    cell: ({ row }) => (
      <Text className="min-w-min line-clamp-1">{row.getValue("productTitle")}</Text>
    ),
  },
  {
    accessorKey: "quantity",
    header: () => <Text className="text-right">QTY</Text>,
    cell: ({ row }) => <Text className="text-right">{row.getValue("quantity")}</Text>,
  },
  {
    accessorKey: "subtotal",
    header: ({ column }) => (
      <div className="w-full text-right">
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Total
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      </div>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("subtotal"));
      const formatted = formatCurrency(amount);
      return (
        <Text className="text-right px-4" variant="h4">
          {formatted}
        </Text>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status: OrderStatus = row.getValue("status");

      let variant: BadgeProps["variant"] = "outline";
      if (status === "processing") {
        variant = "warning";
      }
      if (status === "delivered") {
        variant = "success";
      }
      if (status === "cancelled") {
        variant = "destructive";
      }
      if (status === "shipped") {
        variant = "default";
      }

      return (
        <div className="min-w-24">
          <Badge variant={variant}>{status}</Badge>
        </div>
      );
    },
  },
  {
    accessorKey: "paymentStatus",
    header: "Payment",
    cell: ({ row }) => {
      const status: PaymentStatus = row.getValue("paymentStatus");

      let variant: BadgeProps["variant"] = "outline";
      if (status === "pending") {
        variant = "warning";
      }
      if (status === "paid") {
        variant = "success";
      }
      if (status === "failed") {
        variant = "destructive";
      }
      if (status === "refunded") {
        variant = "default";
      }

      return (
        <div className="min-w-24">
          <Badge variant={variant}>{status}</Badge>
        </div>
      );
    },
  },
  // {
  //   id: "actions",
  //   enableHiding: false,
  //   cell: ({ row }) => <ProductActions product={row.original} />,
  // },
];
