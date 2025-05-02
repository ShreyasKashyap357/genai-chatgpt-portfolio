"use client";

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Portfolio Certificates",
  description: "Showcasing my certificates in Generative AI, DAA, NPTEL, and Google Data Analytics",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  };

  return (
    <html lang="en" className={theme}>
      <body className="min-h-screen bg-background text-foreground">
        <div className="flex min-h-screen">
          <aside className="w-64 bg-card border-r shadow-sm">
            <div className="p-4 flex justify-between items-center">
              <h2 className="text-xl font-bold">Certificates</h2>
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </Button>
            </div>
            <ScrollArea className="h-[calc(100vh-4rem)]">
              <NavigationMenu orientation="vertical">
                <NavigationMenuList className="flex flex-col space-y-2 p-4">
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/genai" className="block p-2 hover:bg-accent rounded">
                      Generative AI & ChatGPT
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/daa" className="block p-2 hover:bg-accent rounded">
                      DAA Certificates
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/nptel" className="block p-2 hover:bg-accent rounded">
                      NPTEL Certificates
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/google" className="block p-2 hover:bg-accent rounded">
                      Google Data Analytics
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