import { NotFound } from "@/common/not-found";
import React from "react";
import Link from "next/link";
import { Button } from "@/ui/button";

export default function NotFoundPage() {
  return (
    <NotFound module="page">
      <Link href="/dashboard">
        <Button className="mt-4">Return to Dashboard</Button>
      </Link>
    </NotFound>
  );
}
