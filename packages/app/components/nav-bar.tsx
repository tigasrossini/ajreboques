<<<<<<< HEAD
import { NavigationMenu, NavigationMenuTrigger, NavigationMenuList, NavigationMenuItem, NavigationMenuContent, NavigationMenuLink } from '@/components/ui/navigation-menu'
import { Button } from './ui/button'
import Link from 'next/link'





export function NavBar() {
    const navItems = [
        { text: "Sobre Nós", id: "sobre" },
        { text: "Serviços", id: "servicos" },
        { text: "Nosso trabalho", id: "trabalho" },
        { text: "FAQs", id: "faqs" },
        { text: "Contato", id: "contato" },
    ]
    
    return (
        <header className="w-full h-[100px] bg-[#101014] flex items-center">
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo - texto branco */}
                <div className="font-bold text-white text-lg tracking-[-0.10px]">
                    AJ REBOQUES
                </div>

                {/* Navigation - itens em branco */}
                <NavigationMenu>
                    <NavigationMenuList className="flex gap-8">
                        {navItems.map((item) => (
                            <NavigationMenuItem key={item.id}>
                                <NavigationMenuLink
                                    className="font-bold text-white hover:text-gray-300 transition-colors text-lg tracking-[-0.10px] leading-[18px]"
                                    href={`#${item.id}`}
                                >
                                    {item.text}
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Register Button (mantido como está) */}
                <Button className="bg-[#c41010] text-white font-bold rounded-[11px] border border-solid border-white px-6 py-2.5 h-[41px] w-[152px]">
                    Registre-se
                </Button>
            </div>
        </header>
    );
=======
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
>>>>>>> 10a228b119cdd967aec38f16f276dc00abf68d19
}