import React from "react";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/ui/select";

export const ProductOptions = ({
  options,
}: {
  options: StorefrontProductVariantOption[];
  variants: StorefrontProductVariant[];
}) => {
  return (
    <>
      {options.map((option) => (
        <Select defaultValue={option.values[0]}>
          <SelectTrigger className="text-md font-semibold border-none border-b focus:ring-0 px-0 pb-5 rounded-none">
            <span className="flex-1 text-left">{option.name}</span>
            <SelectValue placeholder={option.name} className="pr-3" />
          </SelectTrigger>
          <SelectContent>
            {option.values.map((value) => (
              <SelectItem key={value} value={value}>
                {value}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ))}
    </>
  );
};
