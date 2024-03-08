import { Button } from "@/ui/button";
import { Text } from "@/ui/text";
import { Input } from "@/ui/input";
import { BiSearch } from "react-icons/bi";
import { getStore } from "@/modules/store-front/useStore";
import { ProductList } from "@/modules/store-front/product-list";
import { Avatar, AvatarFallback, AvatarImage } from "@/ui/avatar";

export default async function Home({ params: { storeId } }: { params: { storeId: string } }) {
  const storeData = await getStore(storeId as string);

  if (!storeData) {
    return null;
  }

  const { data: store } = storeData;

  if (!store) {
    return null;
  }

  return (
    <main className="flex min-h-screen flex-col gap-10 mb-10">
      <section className="flex flex-col gap-3">
        <div className="flex gap-3 w-full">
          <div className="flex-1 flex gap-3 items-center">
            <Avatar className="rounded-lg">
              <AvatarImage src="" alt={store.name} />
              <AvatarFallback>{store.name.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <Text variant="h3">{store.name}</Text>
          </div>

          <div className="flex items-center gap-1">
            <Button>Follow</Button>
          </div>
        </div>

        <Text className="max-w-[60ch] text-sm">{store.description}</Text>
      </section>

      <section className="flex flex-col gap-5">
        <Text variant="h3">Products</Text>

        <Input placeholder={`Search ${store.name}`} className="max-w-lg" icon={<BiSearch />} />

        <div className="flex flex-col gap-5">
          <ProductList storeId={store.id} />
          {/* <Button variant="secondary" className="self-center"> */}
          {/*   Load more */}
          {/* </Button> */}
        </div>
      </section>
    </main>
  );
}
