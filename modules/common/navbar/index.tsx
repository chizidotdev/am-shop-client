"use client";

import React from "react";
import { AppLogo } from "@/common/app-logo";
import { cn } from "@/lib/utils";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { Button } from "@/ui/button";
import { StorefrontSearch } from "./storefront-search";

export function MainNav() {
  const [hasScrolled, setHasScrolled] = React.useState(false);

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

  return (
    <nav
      className={cn(
        "sticky top-0 bg-background z-10 p-5 py-3 transition-all",
        hasScrolled && "border-b shadow-sm",
      )}
    >
      <div className="flex items-center justify-between gap-5 max-w-7xl mx-auto">
        <AppLogo />

        <StorefrontSearch className="hidden sm:flex flex-1 max-w-lg mx-auto w-full" />

        <div className="flex items-center gap-1">
          <Button variant="ghost" className="rounded-full h-10 w-10 p-2">
            <FaRegHeart size={18} />
          </Button>
          <Button variant="ghost" className="rounded-full h-10 w-10 p-2">
            <MdOutlineShoppingBag size={20} />
          </Button>
          <Button variant="outline">Sign In</Button>
        </div>
      </div>

      <StorefrontSearch className="sm:hidden w-full mt-5" />
      {/*links.map(({ href, label }) => {
        const isActive = pathname === href;

        return (
          <Link
            key={`${href}${label}`}
            href={href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              !isActive && "text-muted-foreground",
            )}
          >
            {label}
          </Link>
        );
      })*/}
    </nav>
  );
}

// const links = [
//   { href: "/dashboard", label: "Overview" },
//   { href: "/products", label: "Products" },
//   // { href: '/dashboard', label: 'Customers' },
//   // { href: '/dashboard', label: 'Settings' },
// ];
