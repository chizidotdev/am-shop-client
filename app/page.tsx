import React from "react";
import { AppLogo } from "@/common/app-logo";
import { RightNav } from "@/common/navbar/right-nav";
import { StorefrontSearch } from "@/common/navbar/storefront-search";

export default function Home() {
  return (
    <main className="relative max-w-5xl mx-auto p-5 flex min-h-dvh flex-col ">
      <div className="flex w-full justify-end">
        <RightNav />
      </div>

      <div className="pt-[30vh] flex flex-col gap-5 items-center">
        <AppLogo size={50} />
        <StorefrontSearch className="w-full max-w-xl" />
      </div>
    </main>
  );
}
