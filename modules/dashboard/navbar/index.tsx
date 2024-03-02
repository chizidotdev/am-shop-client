"use client";

import React from "react";
import { AppLogo } from "@/common/app-logo";
import { cn } from "@/lib/utils";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { Button } from "@/ui/button";
import { ScrollArea, ScrollBar } from "@/ui/scroll-area";
import { DashboardSearch } from "./dashboard-search";
import { redirect, usePathname } from "next/navigation";
import Link from "next/link";
import { UserMenu } from "@/modules/auth/user-menu";
import { useSession } from "@/modules/auth/session-context";

export function DashboardNav() {
  const [hasScrolled, setHasScrolled] = React.useState(false);
  const pathname = usePathname();
  const { status } = useSession();

  React.useEffect(() => {
    const setScrollHandler = () => {
      const scroll = document.documentElement.scrollTop;
      scroll > 16 ? setHasScrolled(true) : setHasScrolled(false);
    };

    document.addEventListener("scroll", setScrollHandler);

    return () => {
      document.removeEventListener("scroll", setScrollHandler);
    };
  }, []);

  if (status === "unauthenticated") {
    // redirect("/");
  }

  return (
    <nav
      className={cn(
        "sticky bg-background top-0 z-10 transition-all",
        hasScrolled && "border-b shadow-sm",
      )}
    >
      <div className="border-b">
        <div className="flex items-center justify-between gap-5 max-w-7xl mx-auto p-5 py-3">
          <AppLogo />

          <div className="flex items-center gap-1">
            <Link href="/">
              <Button variant="link">Store</Button>
            </Link>
            <Button variant="ghost" className="rounded-full h-10 w-10 p-2">
              <FaRegHeart size={18} />
            </Button>
            <Button variant="ghost" className="rounded-full h-10 w-10 p-2">
              <MdOutlineShoppingBag size={20} />
            </Button>
            <UserMenu />
          </div>
        </div>
      </div>

      <div className="bg-background-dashboard border-b">
        <div className="max-w-7xl mx-auto px-5">
          <ScrollArea>
            <div className="flex items-center gap-3 md:gap-5">
              {links.map(({ href, label }) => {
                const isActive = pathname === href;

                return (
                  <Link
                    key={`${href}${label}`}
                    href={href}
                    className={cn(
                      "text-sm font-medium transition-colors border-b-2 border-background-dashboard text-muted-foreground",
                      "flex items-center h-12 sm:h-14 px-3",
                      isActive && "text-foreground border-b-2 border-primary",
                      "hover:text-foreground hover:border-primary",
                    )}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
            <ScrollBar className="h-0" orientation="horizontal" />
          </ScrollArea>
          {/* <DashboardSearch className="sm:hidden w-full mt-5" /> */}
        </div>
      </div>
    </nav>
  );
}

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/dashboard/products", label: "Products" },
  { href: "/dashboard/settings", label: "Settings" },
];
