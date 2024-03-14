import { EmptyIcon } from "@/common/empty-icon";
import { Button } from "@/ui/button";
import { Text } from "@/ui/text";
import Link from "next/link";
import React from "react";

export function NotFound({ module, children }: { module: string; children?: React.ReactNode }) {
  return (
    <div className="h-[70dvh] flex flex-col items-center justify-center gap-2 mx-10">
      <EmptyIcon />

      <Text variant="h3" className="text-center">
        404
        <span className="inline-block w-0.5 h-5 bg-muted-foreground -mb-1 mx-3" />
        {module} not found.
      </Text>
      <Text className="text-center">
        Sorry, we couldn&apos;t find the {module} you were looking for.
      </Text>

      {children ? (
        children
      ) : (
        <Link href="/">
          <Button className="mt-4">Return to Home Page</Button>
        </Link>
      )}
    </div>
  );
}
