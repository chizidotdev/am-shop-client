import { Input } from "@/ui/input";
import React from "react";
import { BiSearch } from "react-icons/bi";

export const StorefrontSearch = () => {
  return (
    <div className="flex-1 flex justify-center max-w-lg mx-auto w-full">
      <Input
        placeholder="Search for stores"
        className="w-full h-10 pb-1.5 bg-secondary shadow-none border-none"
        icon={<BiSearch />}
      />
    </div>
  );
};
