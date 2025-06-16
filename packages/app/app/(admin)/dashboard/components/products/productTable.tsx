import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, ChevronUp, ChevronDown } from "lucide-react";

interface ProductData {
  id: string;
  codigo: string;
  nome: string;
  status: "ativo" | "inativo";
  preco: string;
}

const mockData: ProductData[] = Array(10)
  .fill(null)
  .map((_, index) => ({
    id: `${index + 1}`,
    codigo: "REB-001",
    nome: "Reboque baú",
    status: "ativo" as const,
    preco: "R$20.000,00",
  }));

export function ProductTable() {
  return (
    <div className="flex h-[613px] flex-col items-start self-stretch rounded-md border border-border">
      {/* Header */}
      <div className="flex items-center self-stretch border-b border-border">
        <div className="flex w-[30px] h-10 px-2 py-0.5 items-center">
          <Checkbox className="w-4 h-4 rounded border border-primary bg-white" />
        </div>
        <div className="flex w-[120px] h-10 px-2 py-0.5 items-center">
          <span className="text-sm font-medium text-muted-foreground">
            CÓDIGO
          </span>
        </div>
        <div className="flex h-10 px-2 py-0.5 items-center flex-1">
          <Button
            variant="ghost"
            size="sm"
            className="h-8 px-3 py-2 rounded-md bg-white flex items-center gap-2"
          >
            <span className="text-xs font-medium text-muted-foreground">
              Nome
            </span>
            <div className="flex flex-col w-4 h-4">
              <ChevronUp className="w-3 h-2 text-muted-foreground" />
              <ChevronDown className="w-3 h-2 text-muted-foreground" />
            </div>
          </Button>
        </div>
        <div className="flex w-[145px] h-10 px-2 py-0.5 items-center">
          <Button
            variant="ghost"
            size="sm"
            className="px-3 py-2 rounded-md bg-white flex items-center gap-2"
          >
            <span className="text-xs font-medium text-muted-foreground">
              Status
            </span>
            <div className="flex flex-col w-4 h-4">
              <ChevronUp className="w-3 h-2 text-muted-foreground" />
              <ChevronDown className="w-3 h-2 text-muted-foreground" />
            </div>
          </Button>
        </div>
        <div className="flex w-[115px] h-10 px-2 py-0.5 items-center">
          <Button
            variant="ghost"
            size="sm"
            className="px-3 py-2 rounded-md bg-white flex items-center gap-2"
          >
            <span className="text-xs font-medium text-muted-foreground">
              Preço
            </span>
            <div className="flex flex-col w-4 h-4">
              <ChevronUp className="w-3 h-2 text-muted-foreground" />
              <ChevronDown className="w-3 h-2 text-muted-foreground" />
            </div>
          </Button>
        </div>
        <div className="flex w-[60px] h-10 px-2 py-0.5 items-center"></div>
      </div>

      {/* Rows */}
      {mockData.map((row, index) => (
        <div
          key={row.id}
          className="flex h-[49px] items-center self-stretch border-b border-border"
        >
          <div className="flex w-[30px] h-[49px] px-2 py-2 items-center">
            <Checkbox className="w-4 h-4 rounded border border-primary bg-white" />
          </div>
          <div className="flex w-[120px] h-[49px] px-2 py-2 items-center">
            <span className="flex-1 text-sm font-normal text-foreground">
              {row.codigo}
            </span>
          </div>
          <div className="flex h-[49px] px-2 py-2 items-center gap-2 flex-1">
            <span className="flex-1 text-sm font-normal text-foreground max-w-[500px] overflow-hidden text-ellipsis whitespace-nowrap">
              {row.nome}
            </span>
          </div>
          <div className="flex h-[49px] px-2 py-3 items-center relative w-[145px]">
            <Badge className="w-20 h-[26px] px-2.5 py-2.5 rounded-md border border-[#05DF72] bg-[#F0FDF4] flex items-center justify-center">
              <span className="text-[10px] font-normal text-[#016630] leading-5">
                Ativo
              </span>
            </Badge>
          </div>
          <div className="flex w-[115px] h-[49px] px-2 py-2 items-center gap-2">
            <span className="flex-1 text-sm font-normal text-foreground">
              {row.preco}
            </span>
          </div>
          <div className="flex w-[60px] h-[49px] px-2 py-2 items-center">
            <Button
              variant="ghost"
              size="sm"
              className="w-8 h-8 px-4 py-2 rounded-md bg-white flex items-center justify-center"
            >
              <MoreHorizontal className="w-4 h-4 text-foreground" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
