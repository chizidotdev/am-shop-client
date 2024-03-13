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
import { useDashboard } from "../context-store";
import { useGenerateFakeData } from "./useProducts";
import { WhatsappImport } from "./whatsapp-import";

export const OptionsMenu = () => {
  const { refetch, store } = useDashboard();
  const { mutate, isPending } = useGenerateFakeData(refetch.products);

  function generateFakeData() {
    if (isPending || !store) return;

    mutate();
  }

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
          <DropdownMenuItem onClick={generateFakeData}>Generate Fake Data</DropdownMenuItem>
          <DropdownMenuItem disabled>
            <WhatsappImport />
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
