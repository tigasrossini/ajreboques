import React from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

export function ProductPagination() {
  return (
    <div className="flex h-[74px] px-2 py-4 justify-between items-center self-stretch">
      {/* Left side - Selection info */}
      <div className="flex w-[314px] h-10 flex-col items-start gap-2.5">
        <div className="flex items-start gap-2.5 self-stretch">
          <span className="flex-1 text-sm font-normal text-muted-foreground leading-5">
            0 of 100 linhas selecionadas.
          </span>
        </div>
      </div>

      {/* Right side - Pagination controls */}
      <div className="flex h-8 items-center gap-8">
        {/* Rows per page */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-foreground leading-5">
            Linhas por página
          </span>
          <div className="flex w-[70px] flex-col items-start gap-1">
            <div className="flex h-9 px-3 py-2 justify-center items-center gap-2.5 self-stretch rounded-md border border-input bg-white shadow-sm">
              <span className="flex-1 text-sm font-normal text-foreground leading-5">
                10
              </span>
              <div className="w-4 h-4 opacity-50">
                <div className="flex flex-col w-4 h-4">
                  <ChevronUp className="w-3 h-2 text-foreground" />
                  <ChevronDown className="w-3 h-2 text-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page info */}
        <div className="w-[100px] text-sm font-medium text-foreground text-center leading-5">
          Página 1 of 10
        </div>

        {/* Navigation buttons */}
        <div className="flex items-start gap-2 opacity-80">
          <Button
            variant="outline"
            size="sm"
            disabled
            className="w-8 h-8 px-4 py-2 rounded-md border border-input opacity-50 bg-white shadow-sm"
          >
            <ChevronsLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled
            className="w-8 h-8 px-4 py-2 rounded-md border border-input opacity-50 bg-white shadow-sm"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="w-8 h-8 px-4 py-2 rounded-md border border-input bg-white shadow-sm"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="w-8 h-8 px-4 py-2 rounded-md border border-input bg-white shadow-sm"
          >
            <ChevronsRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
