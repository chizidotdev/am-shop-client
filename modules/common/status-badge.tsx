import React from "react";
import { Badge, BadgeProps } from "@/ui/badge";

export const PaymentStatusBadge = ({ status }: { status: PaymentStatus }) => {
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

  return <Badge variant={variant}>{status}</Badge>;
};

export const OrderStatusBadge = ({ status }: { status: OrderStatus }) => {
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

  return <Badge variant={variant}>{status}</Badge>;
};
