import React from "react";
import { Button } from "@/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu";
import { Text } from "@/ui/text";
import { ToggleGroupItem } from "@/ui/toggle-group";
import { useMediaQuery } from "@/common/hooks/useMediaQuery";

const filterOptions = [
  { label: "All", value: "all", disabled: false },
  { label: "In Stock", value: "inStock", disabled: false },
  { label: "Out Of Stock", value: "outOfStock", disabled: false },
  { label: "Archive", value: "archive", disabled: true },
] as const;

export const FilterOptions = ({
  filter,
  setFilter,
}: {
  filter: ProductFilterOption;
  setFilter: (value: ProductFilterOption) => void;
}) => {
  const mq = useMediaQuery("(min-width: 768px)");

  if (mq) {
    return (
      <>
        {filterOptions.map((option) => (
          <ToggleGroupItem
            value={option.value}
            disabled={option.disabled}
            onClick={() => setFilter(option.value)}
          >
            <Text className="text-xs">{option.label}</Text>
          </ToggleGroupItem>
        ))}
      </>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Filter</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Filter</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {filterOptions.map((option) => (
          <DropdownMenuCheckboxItem
            checked={filter === option.value}
            onCheckedChange={(checked) => checked && setFilter(option.value)}
            disabled={option.disabled}
          >
            {option.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
