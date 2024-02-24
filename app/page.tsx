"use client";
import { shopProductSearchData } from "@/lib/data";
import { Button } from "@/ui/button";

export default function Home() {
  console.log(">>>>", shopProductSearchData);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button variant="outline">Click me</Button>
    </main>
  );
}
