import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/ui/card";
import { Text } from "@/ui/text";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tabs";
import { StoreSettings } from "@/modules/dashboard/settings/store-settings";
import { AccountSettings } from "@/modules/dashboard/settings/account-settings";
import { ComingSoonBadge } from "@/common/coming-soon-badge";

export default function DashboardSettings() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2 border-b pb-4">
        <Text variant="h1">Settings</Text>
        <Text>Manage your store settings and set account preferences.</Text>
      </div>

      <Tabs defaultValue="store" className="">
        <TabsList className="grid w-full max-w-lg grid-cols-2">
          <TabsTrigger value="store">Store</TabsTrigger>
          <TabsTrigger disabled value="account">
            Account &nbsp;
            <ComingSoonBadge />
          </TabsTrigger>
        </TabsList>

        <TabsContent value="store">
          <Card>
            <CardHeader>
              <CardTitle>Shop</CardTitle>
              <CardDescription>
                Make changes to your shop settings and preferences here.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <StoreSettings />
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
