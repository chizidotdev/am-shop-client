import { Input } from "@/ui/input";
import React from "react";
import { BiSearch } from "react-icons/bi";

export const DashboardSearch = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <Input
        placeholder="Search dashboard"
        className="w-full h-10 pb-1.5 bg-secondary shadow-none border-none"
        icon={<BiSearch />}
      />
    </div>
  );
};
