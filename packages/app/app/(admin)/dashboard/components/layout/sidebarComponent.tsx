import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../../../../../components/ui/sidebar";
import {NavMain} from "./nav-main";
import { ChevronRight, FileTextIcon, GalleryVerticalEnd, HomeIcon, LayoutGrid, UserIcon } from "lucide-react";
import { title } from "process";
import { url } from "inspector";

const data = {
    navMain: [
        {
            title: "Tela Inicial",
            url: "/dashboard/",
            icon: HomeIcon
        },
        {
            title: "Relatórios",
            url: "#",
            icon: FileTextIcon
        },
        {
            title: "Usuários",
            url: "/dashboard/users",
            icon: UserIcon
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
                                        <LayoutGrid className="size-4"/>
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