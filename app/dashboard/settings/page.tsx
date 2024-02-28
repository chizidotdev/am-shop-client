import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/ui/card";
import { Text } from "@/ui/text";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tabs";
import { ShopSettings } from "@/modules/dashboard/settings/shop-settings";
import { AccountSettings } from "@/modules/dashboard/settings/account-settings";

export default function DashboardSettings() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2 border-b pb-4">
        <Text variant="h1">Settings</Text>
        <Text>Manage your shop settings and set account preferences.</Text>
      </div>

      <Tabs defaultValue="shop" className="">
        <TabsList className="grid w-full max-w-lg grid-cols-2">
          <TabsTrigger value="shop">Shop</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
        </TabsList>

        <TabsContent value="shop">
          <Card>
            <CardHeader>
              <CardTitle>Shop</CardTitle>
              <CardDescription>
                Make changes to your shop settings and preferences here.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ShopSettings />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>Manage your account preferences here.</CardDescription>
            </CardHeader>
            <CardContent>
              <AccountSettings />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
