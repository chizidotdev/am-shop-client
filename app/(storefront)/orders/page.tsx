"use client";
import React from "react";
import { Text } from "@/ui/text";
import { useGetOrders } from "@/modules/store-front/useOrders";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/ui/accordion";
import { formatCurrency, formatDate } from "@/lib/utils";
import { OrderStatusBadge, PaymentStatusBadge } from "@/common/status-badge";
import { Skeleton } from "@/ui/skeleton";
import { EmptyIcon } from "@/common/empty-icon";
import { Button } from "@/ui/button";
import Link from "next/link";

export default function Orders() {
  const { data, isLoading } = useGetOrders();

  if (isLoading) {
    return (
      <div className="flex flex-col gap-5">
        <Text variant="h1">Orders</Text>
        <div className="flex flex-col gap-3">
          <Skeleton className="h-10 w-full max-w-xl" />
          <Skeleton className="h-10 w-full max-w-xl" />
          <Skeleton className="h-10 w-full max-w-xl" />
          <Skeleton className="h-10 w-full max-w-xl" />
        </div>
      </div>
    );
  }

  const orders = data?.data;

  return (
    <div className="flex flex-col gap-5">
      <Text variant="h1">Orders</Text>

      {!orders?.length && (
        <div className="flex flex-col justify-center items-center text-center max-w-lg mx-auto my-10">
          <EmptyIcon />
          <Text variant="h4">No Orders found</Text>
          <Text className="mt-2">
            This is where you’ll be able to view your orders, track their status, and more.
          </Text>
          <Link href="/">
            <Button className="mt-2">Continue Shopping</Button>
          </Link>
        </div>
      )}

      <Accordion type="single" collapsible className="max-w-xl">
        {orders?.map((order) => (
          <AccordionItem key={order.id} value={`item-${order.id}`}>
            <AccordionTrigger className="hover:no-underline">
              <OrderRow order={order} />
            </AccordionTrigger>
            <AccordionContent>
              <Table className="mb-5">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Product</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">QTY</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {order.orderItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="line-clamp-1 w-max">{item.productTitle}</TableCell>
                      <TableCell>
                        <OrderStatusBadge status={item.status} />
                      </TableCell>
                      <TableCell className="text-right">{item.quantity}</TableCell>
                      <TableCell className="text-right">{formatCurrency(item.subtotal)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

const OrderRow = ({ order }: { order: Order }) => {
  return (
    <div className="w-full flex gap-5 items-center pr-10">
      {/* <Text>{order.id.slice(0, 8)}</Text> */}
      <Text className="w-max">{formatDate(order.orderDate)}</Text>
      <div className="flex min-w-20">
        <PaymentStatusBadge status={order.paymentStatus} />
      </div>
      <Text>{formatCurrency(order.totalAmount)}</Text>
    </div>
  );
};
