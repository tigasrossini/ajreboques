import SidebarComponent from "@/components/sidebarComponent";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Layout({children}: {children: React.ReactNode}) {
    return(
        <SidebarProvider>
            <SidebarComponent/>
            <main>
                <SidebarTrigger/>
                {children}
            </main>
        </SidebarProvider>
    )
}