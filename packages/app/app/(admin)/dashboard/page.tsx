'use client'
import Sidebar from "@/app/(admin)/dashboard/components/layout/sidebarComponent";
import { hookContext } from "@/context/AppProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
    const {authToken} = hookContext()
    const router = useRouter()
    
    return (
        <>
        <Sidebar/>
        </>
    );  
}
