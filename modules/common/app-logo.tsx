import Link from "next/link";
import { Text } from "@/ui/text";

type AppLogoProps =
  | {
      withText?: boolean;
      size?: never;
    }
  | {
      withText?: never;
      size?: number;
    };

export function AppLogo({ withText, size = 40 }: AppLogoProps) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <img src="/logo.png" alt="copia Logo" width={size} />
      {withText && <Text variant="h4">Copia</Text>}
    </Link>
  );
}
