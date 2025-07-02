'use client'
import React, { useState } from "react";
import NavBar from "@/components/nav-bar";
import { Search, Plus, X, Bookmark } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/footer"; // <-- Importa o Footer

interface FilterCategory {
  id: string;
  name: string;
  expanded: boolean;
}

interface AppliedFilter {
  id: string;
  label: string;
  category: string;
}

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [appliedFilters, setAppliedFilters] = useState<AppliedFilter[]>([
    { id: "1", label: "Off Road", category: "category" },
    { id: "2", label: "2000kg", category: "capacity" },
  ]);

  const [filterCategories, setFilterCategories] = useState<FilterCategory[]>([
    { id: "price", name: "Faixa de preço", expanded: false },
    { id: "dimensions", name: "Dimensões", expanded: false },
    { id: "color", name: "Cor", expanded: false },
    { id: "category", name: "Categoria", expanded: false },
    { id: "vehicles", name: "Tipos de veículos", expanded: false },
    { id: "capacity", name: "Capacidade de carga", expanded: false },
    { id: "price2", name: "Faixa de preço", expanded: false },
    { id: "dimensions2", name: "Dimensões", expanded: false },
  ]);

  const removeFilter = (filterId: string) => {
    setAppliedFilters((prev) =>
      prev.filter((filter) => filter.id !== filterId),
    );
  };

  const toggleFilterCategory = (categoryId: string) => {
    setFilterCategories((prev) =>
      prev.map((cat) =>
        cat.id === categoryId ? { ...cat, expanded: !cat.expanded } : cat,
      ),
    );
  };

  // Generate mock product data
  const products = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: "AJ OFF ROAD BRASIL",
    image: null,
    bookmarked: false,
  }));

  const FilterSidebar = ({ className }: { className?: string }) => (
    <div className={cn("w-full max-w-[220px] p-0", className)}>
      <div className="py-8 px-0">
        <h2 className="text-xl font-normal text-white mb-6 font-staatliches">
          FILTROS
        </h2>
        <div className="space-y-4">
          {filterCategories.map((category, index) => (
            <div key={category.id}>
              <div
                className="flex items-center justify-between cursor-pointer py-1 hover:bg-gray-800 hover:bg-opacity-30 px-2 -mx-2 rounded transition-colors duration-200"
                onClick={() => toggleFilterCategory(category.id)}
              >
                <span className="text-white text-base font-light font-roboto">
                  {category.name}
                </span>
                <Plus
                  className={cn(
                    "w-5 h-5 text-white transition-transform duration-200",
                    category.expanded && "rotate-45",
                  )}
                />
              </div>
              {/* Linha horizontal após cada item, inclusive o último */}
              <div className="h-px bg-white w-full mt-2" />
            </div>
          ))}
        </div>
        {appliedFilters.length > 0 && (
          <div className="flex flex-col gap-2 pt-6">
            {appliedFilters.map((filter) => (
              <span
                key={filter.id}
                className="flex items-center bg-[#454d5c] text-white rounded-full px-4 py-2 text-base font-light w-fit"
              >
                {filter.label}
                <span
                  onClick={() => removeFilter(filter.id)}
                  className="ml-2 hover:bg-gray-500 rounded-full p-0.5 cursor-pointer"
                  role="button"
                  tabIndex={0}
                  aria-label="Remover filtro"
                >
                  <X className="w-3 h-3" />
                </span>
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  // Card com parte inferior branca ocupando toda a largura, sem borda cinza embaixo
  const ProductCard = ({ product }: { product: (typeof products)[0] }) => (
    <div className="relative flex flex-col h-[370px] rounded-md overflow-hidden border border-black bg-[#6b7280]">
      {/* Bookmark Icon */}
      <button
        type="button"
        className="absolute top-4 right-4 z-10 text-white hover:text-gray-200 transition-colors duration-200 opacity-80 hover:opacity-100"
        aria-label="Favoritar produto"
        style={{ width: 30, height: 30 }}
      >
        <Bookmark className="w-7 h-7" />
      </button>
      {/* Espaço cinza */}
      <div className="flex-1" />
      {/* Parte branca inferior, sem borda inferior */}
      <div className="w-full bg-white h-16 flex items-center justify-center">
        <h3 className="text-black text-lg font-bold uppercase tracking-wide px-4 text-center font-inter">
          {product.name}
        </h3>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <NavBar />
      <div className="flex-1 w-full px-0">
        <div className="max-w-[1400px] mx-auto flex flex-row gap-0">
          {/* Sidebar alinhada com a logo e linha vertical com espaçamento */}
          <aside className="hidden lg:flex flex-row min-h-[calc(100vh-100px)]" style={{ minWidth: 220 }}>
            <div className="flex-1 pl-4">
              <FilterSidebar />
            </div>
            <div className="w-0" style={{ minWidth: 32 }} />
            <div className="w-px bg-white/30 h-full" />
            <div className="w-0" style={{ minWidth: 32 }} />
          </aside>
          {/* Mobile Filter Sheet */}
          <div className="lg:hidden w-full">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  className="mb-6 bg-gray-600 border-white text-white hover:bg-gray-700 font-roboto"
                >
                  Filtros
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="bg-black border-gray-600 w-80"
              >
                <FilterSidebar />
              </SheetContent>
            </Sheet>
          </div>
          {/* Conteúdo principal */}
          <main className="flex-1 px-0 py-8">
            {/* Barra de busca alinhada com os cards */}
            <div className="flex items-center mb-8">
              <div className="w-full max-w-[420px]">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white w-6 h-6" />
                  <Input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Pesquise por um produto ou categoria..."
                    className="w-full h-12 pl-12 pr-4 bg-[#454d5c] border-0 rounded-full text-white placeholder:text-white text-lg font-roboto"
                  />
                </div>
              </div>
            </div>
            {/* Grid de produtos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </main>
        </div>
      </div>
      <Footer /> {/* <-- Adiciona o Footer aqui */}
    </div>
  );
};

export default Index;