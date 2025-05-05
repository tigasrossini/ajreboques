import { LucideIcon, MailIcon } from "lucide-react";
import { Button } from "./ui/button";
import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";

export function NavMain({items, } : {
    items: { 
        title: string;
        url: string;
        icon?: LucideIcon
    }[]
}){
    return(
        <SidebarGroup>
            <SidebarGroupContent className="flex flex-col gap-2">
                <SidebarMenu>
                    <SidebarMenuItem className="flex items-center justify-between">
                        <SidebarMenuButton className="min-w-8">
                            <a href="/"><span className="">Criar relatorio</span></a>
                        </SidebarMenuButton>
                        <Button size="icon" className="w-8 h-8" variant="ghost" aria-label="Criar relatorio">
                            <MailIcon/>
                        </Button>
                    </SidebarMenuItem>
                </SidebarMenu>
                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton>
                                {item.icon && <item.icon />}
                                <span>{item.title}</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}