import { Text } from "@/ui/text";
import { Avatar, AvatarFallback, AvatarImage } from "@/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { useSession } from "./session-context";

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
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Dashboard</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem onClick={() => push("/dashboard")}>Store</DropdownMenuItem>
                <DropdownMenuItem onClick={() => push("/dashboard/products")}>
                  Product
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logout}>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
