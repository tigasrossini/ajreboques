import { LucideIcon, MailIcon, PlusCircle, PlusCircleIcon } from "lucide-react";
import { Button } from "../../../../../components/ui/button";
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../../../../../components/ui/sidebar";

const navRelatorios = [
    {
        title: "Relatório 1",
        url: "/",
        icon: MailIcon
    },
    {
        title: "Relatório 2",
        url: "#",
        icon: MailIcon
    },
    {
        title: "Relatório 3",
        url: "#",
        icon: MailIcon
    }
]

export function NavMain({items, } : {
    items: { 
        title: string;
        url: string;
        icon?: LucideIcon
    }[]
}){
    return(
        <>
        <SidebarGroup>
            <SidebarGroupContent className="flex flex-col gap-2">
                <SidebarMenu>
                    <SidebarMenuItem className="flex items-center gap-2">
                        <SidebarMenuButton className="min-w-8 bg-sidebar-primary text-sidebar-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground duration-200 ease-linear">
                            <PlusCircleIcon/>
                            <a href="/"><span className="">Criar relatorio</span></a>
                        </SidebarMenuButton>
                        <Button size="icon" className="w-8 h-8" variant="outline" aria-label="Criar relatorio">
                            <MailIcon/>
                        </Button>
                    </SidebarMenuItem>
                </SidebarMenu>

                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild>
                                <a href={item.url} className="flex items-center gap-2">
                                    {item.icon && <item.icon />}
                                    <span>{item.title}</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
            <SidebarGroupContent className="flex flex-col gap-2">
                <SidebarGroupLabel>Relatórios</SidebarGroupLabel>
                <SidebarMenu>
                    {navRelatorios.map((item) => (
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
        </>
    )
}