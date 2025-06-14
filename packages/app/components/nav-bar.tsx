import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import React from "react";

export function NavBar() {
  // Navigation items data
  const navItems = [
    { text: "Sobre Nós", href: "#" },
    { text: "Serviços", href: "#" },
    { text: "Nosso trabalho", href: "#" },
    { text: "FAQs", href: "#" },
    { text: "Contato", href: "#" },
  ];
    return (
        <>
            <header className="w-full h-[100px] overflow-hidden bg-[#101014]">
                <div className="max-w-[1920px] h-[85px] mx-auto px-[100px] flex items-center justify-between">
                    {/* Logo */}
                    <div className="[font-family:'Manrope-Bold',Helvetica] font-bold text-white text-lg tracking-[-0.10px] leading-[18px]">
                        AJ REBOQUES
                    </div>

                    {/* Navigation */}
                    <NavigationMenu>
                        <NavigationMenuList className="flex gap-8">
                            {navItems.map((item, index) => (
                                <NavigationMenuItem key={index}>
                                    <NavigationMenuLink
                                        href={item.href}
                                        className="[font-family:'Manrope-Bold',Helvetica] font-bold text-white text-lg tracking-[-0.10px] leading-[18px]"
                                    >
                                        {item.text}
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* Register Button */}
                    <Button className="w-[152px] h-[41px] bg-[#c41010] rounded-[11px] border border-solid border-white [font-family:'Manrope-Bold',Helvetica] font-bold text-white text-lg tracking-[-0.10px] leading-[18px]">
                        Registre-se
                    </Button>
                </div>
            </header>
        </>
    )
}