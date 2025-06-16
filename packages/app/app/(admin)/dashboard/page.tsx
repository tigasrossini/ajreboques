'use client'
import Sidebar from "@/app/(admin)/dashboard/components/layout/sidebarComponent";
import { hookContext } from "@/context/AppProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import  {HeaderSales}  from "@/app/(admin)/dashboard/components/sales/headerInicial"
import {  MetricsGrid } from "./components/sales/metricsGrid";
import { SalesChart } from "./components/sales/salesChart";
import { ReferralSourceTable } from "./components/sales/ReferralSourceTable";

export default function Dashboard() {
    const {authToken} = hookContext()
    const router = useRouter()
    
    return (
        <>
            <Sidebar/>
             <div className="flex flex-col items-center gap-8 p-6 lg:p-12 xl:p-16 bg-gray-50 min-h-screen">
                <div className="w-full max-w-8xl">
                    <HeaderSales />
                </div>

                <div className="flex flex-col gap-6 w-full max-w-8xl">
                    <MetricsGrid />
                    <SalesChart />
                    <ReferralSourceTable />
                </div>
             </div>
        </>
    );  
}
