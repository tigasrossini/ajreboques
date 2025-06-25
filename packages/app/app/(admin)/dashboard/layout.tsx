import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Header from "./components/layout/header";
import SidebarComponent from "./components/layout/sidebarComponent";

export default function Layout({children}: {children: React.ReactNode}) {
    return(
        <SidebarProvider>
            <SidebarComponent/>
            <div className="w-full h-screen flex flex-col">
                <Header/>
                <main>
                    {children}
                </main>
            </div>
        </SidebarProvider>
    )
}