import { Input } from "@/ui/input";
import React from "react";
import { BiSearch } from "react-icons/bi";

export const StorefrontSearch = () => {
  return (
    <div className="flex-1 flex justify-center max-w-lg mx-auto relative w-full">
      <Input
        placeholder="Search for events"
        className="w-full h-10 pl-14 pb-1.5 bg-secondary shadow-none border-none"
      />
      <BiSearch
        size={20}
        className="absolute top-1/2 left-6 -translate-y-1/2 text-muted-foreground"
      />
    </div>
  );
};
