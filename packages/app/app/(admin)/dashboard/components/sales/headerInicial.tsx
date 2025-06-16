import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BarChart3, Plus, Settings2 } from "lucide-react";

export function HeaderSales(){
    return(
        <div className="flex flex-wrap items-center justify-between gap-6 pb-6 border-b border-gray-200 mb-8">
      <div className="flex items-center gap-5">
        <Button variant="outline" size="sm" className="h-8 w-8 p-0">
          <BarChart3 className="h-5 w-5 text-gray-500" />
        </Button>
        <h1 className="text-sm font-bold text-gray-800">Sales Dashboard</h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-start gap-3">
          <Button variant="outline" size="sm" className="h-8">
            <Settings2 className="h-5 w-5 text-gray-500 mr-2" />
            <span className="text-xs font-bold">Customize</span>
          </Button>
        </div>

        <div className="relative w-40">
          <div className="relative">
            <Input
              placeholder="Search"
              className="h-8 text-xs font-bold pr-12 bg-white border-gray-200 shadow-sm"
            />
            <div className="absolute right-1 top-1/2 -translate-y-1/2">
              <Button
                variant="outline"
                size="sm"
                className="h-6 px-2 text-xs font-bold"
              >
                ⌘K
              </Button>
            </div>
          </div>
        </div>

        <Button size="sm" className="h-8 bg-black hover:bg-gray-800">
          <Plus className="h-5 w-5 mr-2" />
          <span className="text-xs font-bold">Add Widget</span>
        </Button>
      </div>
    </div>
    )
}