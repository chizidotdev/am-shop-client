import React from "react";
import { Text } from "@/ui/text";
import { ToggleGroupItem } from "@/ui/toggle-group";

const filterOptions: readonly { value: OrderFilterOption; disabled: boolean }[] = [
  { value: "all", disabled: false },
  { value: "pending", disabled: false },
  { value: "fulfilled", disabled: false },
];

export const FilterOptions = () => {
  return (
    <>
      {filterOptions.map((option) => (
        <ToggleGroupItem value={option.value} disabled={option.disabled}>
          <Text className="text-xs capitalize">{option.value}</Text>
        </ToggleGroupItem>
      ))}
    </>
  );
};
