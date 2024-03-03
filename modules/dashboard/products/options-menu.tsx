import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu";
import { Button } from "@/ui/button";
import { GoChevronDown } from "react-icons/go";
import { ComingSoonBadge } from "@/common/coming-soon-badge";
import { AddProduct } from "./add-product";

export const OptionsMenu = () => {
  return (
    <div className="flex items-center gap-2">
      {/* <Button variant="outline">Import</Button> */}
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="outline">
            Options&nbsp;
            <GoChevronDown className="mt-0.5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <AddProduct>
            <DropdownMenuItem className="md:hidden">Add Product</DropdownMenuItem>
          </AddProduct>

          <DropdownMenuItem disabled>
            Import &nbsp;
            <ComingSoonBadge />
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            Export &nbsp;
            <ComingSoonBadge />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <AddProduct>
        <Button className="hidden md:flex">Add Product</Button>
      </AddProduct>
    </div>
  );
};
