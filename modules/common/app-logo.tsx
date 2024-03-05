import Link from "next/link";
import { Text } from "@/ui/text";

export function AppLogo({ withText }: { withText?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <img src="/logo.png" alt="copia Logo" className="max-w-[40px]" width={40} />
      {withText && <Text variant="h4">Copia</Text>}
    </Link>
  );
}
