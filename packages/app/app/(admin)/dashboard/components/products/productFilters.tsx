import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, SlidersHorizontal } from "lucide-react";

export function ProductFilters() {
  return (
    <div className="flex h-[60px] pb-4 justify-between items-start self-stretch">
      <div className="flex h-9 items-start gap-2 flex-1">
        <Input
          placeholder="Filtrar..."
          className="w-[251px] h-9 px-3 py-1 rounded-md border border-input bg-white shadow-sm text-sm"
        />

        <Button
          variant="outline"
          className="h-9 px-4 py-2 rounded-md border border-dashed border-input bg-white shadow-sm flex items-center gap-2"
        >
          <Plus className="w-4 h-4 text-foreground" />
          <span className="text-sm font-medium text-secondary-foreground">
            Status
          </span>
        </Button>

        <Button
          variant="outline"
          className="h-9 px-4 py-2 rounded-md border border-dashed border-input bg-white shadow-sm flex items-center gap-2"
        >
          <Plus className="w-4 h-4 text-foreground" />
          <span className="text-sm font-medium text-secondary-foreground">
            Categoria
          </span>
        </Button>
      </div>

      <Button
        variant="outline"
        className="h-9 px-4 py-2 rounded-md border border-input bg-white shadow-sm flex items-center gap-2"
      >
        <SlidersHorizontal className="w-4 h-4 text-foreground" />
        <span className="text-sm font-medium text-secondary-foreground">
          Ver
        </span>
      </Button>
    </div>
  );
}
