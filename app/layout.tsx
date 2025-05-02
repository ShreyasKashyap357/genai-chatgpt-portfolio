import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { ScrollArea } from "@/components/ui/scroll-area";

export const metadata = {
  title: "Generative AI & ChatGPT Portfolio",
  description: "Showcasing my 12 Coursera certificates in Generative AI and ChatGPT",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <div className="flex min-h-screen">
          <aside className="w-64 bg-white border-r shadow-sm">
            <div className="p-4">
              <h2 className="text-xl font-bold">Portfolio</h2>
            </div>
            <ScrollArea className="h-[calc(100vh-4rem)]">
              <NavigationMenu orientation="vertical">
                <NavigationMenuList className="flex flex-col space-y-2 p-4">
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/" className="block p-2 hover:bg-gray-100 rounded">
                      Certificates
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/about" className="block p-2 hover:bg-gray-100 rounded">
                      About
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </ScrollArea>
          </aside>
          <main className="flex-1 p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}