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
}