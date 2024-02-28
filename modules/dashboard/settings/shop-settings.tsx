import React from "react";
import { Input } from "@/ui/input";
import { Textarea } from "@/ui/textarea";
import { Label } from "@/ui/label";
import { Button } from "@/ui/button";

export const ShopSettings = () => {
  return (
    <div className="flex flex-col gap-2 max-w-lg">
      <div className="space-y-1">
        <Label htmlFor="name">Name</Label>
        <Input id="name" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" rows={4} />
      </div>

      <div>
        <Button className="mt-5">Update Shop</Button>
      </div>
    </div>
  );
};
