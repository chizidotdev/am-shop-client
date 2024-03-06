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
            <span className="hidden sm:inline">Options&nbsp;</span>
            <GoChevronDown className="mt-0.5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
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
        <Button>Add Product</Button>
      </AddProduct>
    </div>
  );
};
