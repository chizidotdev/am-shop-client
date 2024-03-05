import React from "react";
import { Button } from "@/ui/button";
import { Text } from "@/ui/text";
import { Input } from "@/ui/input";
import { BiSearch } from "react-icons/bi";
import { AppLogo } from "@/common/app-logo";
import { RightNav } from "@/common/navbar/right-nav";

export default function Home() {
  return (
    <main className="relative max-w-5xl mx-auto p-5 flex min-h-dvh flex-col ">
      <div className="flex w-full justify-end">
        <RightNav />
      </div>

      <div className="pt-[35vh] flex flex-col gap-5 items-center">
        <AppLogo />
        <div className="w-full max-w-3xl flex justify-between items-center">
          <Input
            placeholder="Search for stores"
            className="w-full h-10 pb-1.5 bg-secondary shadow-none border-none"
            icon={<BiSearch />}
          />
        </div>
      </div>
    </main>
  );
}
