import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import {NavMain} from "./nav-main";
import { FileTextIcon, HomeIcon, UserIcon } from "lucide-react";
import { title } from "process";
import { url } from "inspector";

const data = {
    navMain: [
        {
            title: "Tela Inicial",
            url: "#",
            icon: HomeIcon
        },
        {
            title: "Relatórios",
            url: "#",
            icon: FileTextIcon
        },
        {
            title: "Usuários",
            url: "#",
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
                        <SidebarMenuButton asChild >
                            <a href=""><span className="">AJ REBOQUES DASHBOARD</span></a>
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