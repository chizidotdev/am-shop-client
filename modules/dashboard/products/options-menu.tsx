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
          <DropdownMenuItem className="md:hidden">Add Product</DropdownMenuItem>
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
      <Button className="hidden md:flex">Add Product</Button>
    </div>
  );
};
