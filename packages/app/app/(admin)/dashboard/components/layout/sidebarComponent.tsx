import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../../../../../components/ui/sidebar";
import {NavMain} from "./nav-main";
import { CalendarRange, Car, ChevronRight, Cloud, FileTextIcon, GalleryVerticalEnd, Grid3X3, HomeIcon, LayoutGrid, MessageSquareWarning, Paperclip, StickyNote, UserIcon } from "lucide-react";

const data = {
    navMain: [
        {
            title: "Tela Inicial",
            url: "/dashboard/",
            icon: LayoutGrid
        },
        {
            title: "Reboques",
            url: "/dashboard/reboques",
            icon: Car
        },
        {
            title: "Orçamentos",
            url: "/dashboard/orcamentos",
            icon: StickyNote
        },
        {
            title: "Arquivos",
            url: "/dashboard/arquivos",
            icon: Paperclip
        },
        {
            title: "Notificações",
            url: "/dashboard/notficacoes",
            icon: MessageSquareWarning
        },
        {
            title: "Usuários",
            url: "/dashboard/usuarios",
            icon: UserIcon
        },
        {
            title: "Calendário",
            url: "/dashboard/calendario",
            icon: CalendarRange
        }
    ]
}


export default function SidebarComponent() {
    return (
        <Sidebar>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size='lg' className="hover:bg-gray-200" asChild >
                            <a href="#" className="flex justify-between items-center p-2">
                                <div className="flex items-center gap-2 justify-center">
                                    <div className="flex items-center justify-center aspect-square size-8 rounded-lg bg-white text-gray-500">
                                        <LayoutGrid className="w-6 h-6"/>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-sm">AJ REBOQUES</span>
                                        <span className="">CNPJ: </span>
                                    </div>
                                </div>
                                <ChevronRight/>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain  items={data.navMain}/>
            </SidebarContent>
        </Sidebar>
    );
} 