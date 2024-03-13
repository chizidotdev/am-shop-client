import { Text } from "@/ui/text";
import { Avatar, AvatarFallback, AvatarImage } from "@/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { useSession } from "./session-context";
import { Permissions } from "./permissions";
import { ComingSoonBadge } from "@/common/coming-soon-badge";

export function UserMenu() {
  const { data, logout } = useSession();
  const { push } = useRouter();

  if (!data) {
    return null;
  }

  const fallbackLetter = data.firstName.charAt(0).toUpperCase();
  const imageSrc = data.image;
  const alt = `${data.firstName} ${data.lastName}`;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="ml-2 cursor-pointer">
        <Avatar>
          <AvatarImage src={imageSrc} alt={alt} />
          <AvatarFallback>{fallbackLetter}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className="">
          <Text className="leading-5">{alt}</Text>
          <Text className="font-normal text-sm">{data.email}</Text>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <Permissions role="vendor">
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => push("/dashboard")}>Dashboard</DropdownMenuItem>
            <DropdownMenuItem onClick={() => push("/dashboard/settings")}>
              Settings
              {/* <DropdownMenuShortcut>⌘S</DropdownMenuShortcut> */}
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuItem disabled>API</DropdownMenuItem>
        </Permissions>

        <DropdownMenuItem>Orders</DropdownMenuItem>

        <DropdownMenuSeparator />
        <Permissions role="customer">
          <DropdownMenuItem disabled>
            Request Store &nbsp;
            <ComingSoonBadge />
          </DropdownMenuItem>
          <DropdownMenuSeparator />
        </Permissions>

        <DropdownMenuItem onClick={logout}>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
