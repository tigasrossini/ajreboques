'use client'
import React, { useState } from "react";
import NavBar from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { Plus, Minus, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Reboques() {
  const [open, setOpen] = useState({
    componentes: false,
    pagamento: false,
    adicionais: false,
  });

  const handleToggle = (section: 'componentes' | 'pagamento' | 'adicionais') => {
    setOpen((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleRequestQuote = () => {
    alert("Solicitação de orçamento enviada!");
  };

  // Cores disponíveis
  const colors = [
    { name: "Azul Escuro", value: "#314158" },
    { name: "Vermelho Escuro", value: "#482121" },
    { name: "Azul Médio", value: "#52637C" },
    { name: "Branco", value: "#FFFFFF" },
  ];

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <NavBar />
      <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 py-8 flex flex-col">
        {/* Grid principal */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Coluna esquerda: imagens */}
          <div className="flex flex-row gap-6">
            {/* Miniaturas verticais */}
            <div className="flex flex-col gap-4">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <div
                  key={i}
                  className="w-[60px] h-[60px] rounded-md bg-[#6b7280]"
                />
              ))}
            </div>
            {/* Imagem principal */}
            <div>
              <div className="w-[340px] h-[340px] rounded-md bg-[#6b7280]" />
            </div>
          </div>
          {/* Coluna direita: informações */}
          <div className="flex-1 flex flex-col justify-start">
            <span className="text-lg font-staatliches text-white mb-2 uppercase tracking-wide">
              Off Road
            </span>
            <h2 className="text-2xl md:text-3xl font-staatliches text-white uppercase mb-2">
              Carreta AJ OFF ROAD BRASIL
            </h2>
            {/* Estrelas */}
            <div className="flex items-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-white fill-white"
                  fill="white"
                  strokeWidth={2}
                />
              ))}
            </div>
            {/* Dimensões e carga */}
            <div className="mb-2 text-white text-base font-roboto">
              <div>
                Dimensões úteis: <span className="font-bold">2.30m x 1.80m</span>
              </div>
              <div>
                Capacidade de carga: <span className="font-bold">2000kg</span>
              </div>
            </div>
            {/* Cores disponíveis */}
            <div className="mt-6 mb-4">
              <div className="text-sm font-semibold mb-2 font-roboto">
                Cores disponíveis
              </div>
              <div className="flex gap-4">
                {colors.map((color) => (
                  <div
                    key={color.value}
                    title={color.name}
                    className="w-9 h-9 rounded-md border border-black"
                    style={{ background: color.value }}
                  />
                ))}
              </div>
            </div>
            {/* Botão de orçamento */}
            <button
              onClick={handleRequestQuote}
              className="mt-6 w-full max-w-xs h-11 rounded bg-white text-black font-semibold text-base transition hover:bg-gray-200"
            >
              Solicitar orçamento
            </button>
          </div>
        </div>
        {/* Grid Descrição + Seções expansíveis */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start w-full">
          {/* Coluna esquerda: Descrição */}
          <div>
            <h1
              className={cn(
                "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white",
                "font-open-sans tracking-wide leading-normal",
              )}
            >
              Descrição
            </h1>
            <div
              className={cn(
                "text-base sm:text-lg leading-relaxed text-white mt-4",
                "font-open-sans font-normal tracking-wide",
              )}
              style={{ lineHeight: "1.56" }}
            >
              Adicione um design contemporâneo e um toque de cor a um ambiente aconchegante ou à sua sala de estar com este sofá inspirado em chaise. Adoramos todos os detalhes de inspiração retrô, desde o encosto baixo e o braço arredondado até os pés afunilados com acabamento preto. A estrutura compacta é feita de madeira engenheirada e revestida com tecido de poliéster na cor sólida de sua escolha. Por dentro, esta peça é preenchida com espuma e molas ensacadas para apoiar você enquanto relaxa com um bom livro. Uma almofada amarela com botão central adiciona uma camada extra de cor e textura. Mas o melhor de tudo? Este sofá possui uma mesa lateral de madeira embutida para bebidas e lanches. As capas das almofadas não são removíveis.
            </div>
          </div>
          {/* Coluna direita: Seções expansíveis */}
          <div className="space-y-0">
            {/* Componentes */}
            <div className="border-b border-white">
              <button
                type="button"
                className="flex w-full items-center justify-between py-4 text-left transition-all hover:opacity-75"
                onClick={() => handleToggle("componentes")}
              >
                <span className="text-base sm:text-lg md:text-xl font-normal text-white font-inter">
                  Componentes
                </span>
                {open.componentes ? (
                  <Minus className="h-6 w-6 sm:h-7 sm:w-7 text-white flex-shrink-0" />
                ) : (
                  <Plus className="h-6 w-6 sm:h-7 sm:w-7 text-white flex-shrink-0" />
                )}
              </button>
              {open.componentes && (
                <div className="pb-4 text-white text-sm sm:text-base">
                  Chassi reforçado em aço carbono, pintura eletrostática automotiva, rodas e pneus para uso off road, suspensão reforçada.
                </div>
              )}
            </div>
            {/* Formas de pagamento */}
            <div className="border-b border-white">
              <button
                type="button"
                className="flex w-full items-center justify-between py-4 text-left transition-all hover:opacity-75"
                onClick={() => handleToggle("pagamento")}
              >
                <span className="text-base sm:text-lg md:text-xl font-normal text-white font-inter">
                  Formas de pagamento
                </span>
                {open.pagamento ? (
                  <Minus className="h-6 w-6 sm:h-7 sm:w-7 text-white flex-shrink-0" />
                ) : (
                  <Plus className="h-6 w-6 sm:h-7 sm:w-7 text-white flex-shrink-0" />
                )}
              </button>
              {open.pagamento && (
                <div className="pb-4 text-white text-sm sm:text-base">
                  Cartão de crédito e débito, Pix, transferência bancária, boleto bancário, parcelamento em até 12x.
                </div>
              )}
            </div>
            {/* Informações adicionais */}
            <div className="border-b border-white">
              <button
                type="button"
                className="flex w-full items-center justify-between py-4 text-left transition-all hover:opacity-75"
                onClick={() => handleToggle("adicionais")}
              >
                <span className="text-base sm:text-lg md:text-xl font-normal text-white font-inter">
                  Informações adicionais
                </span>
                {open.adicionais ? (
                  <Minus className="h-6 w-6 sm:h-7 sm:w-7 text-white flex-shrink-0" />
                ) : (
                  <Plus className="h-6 w-6 sm:h-7 sm:w-7 text-white flex-shrink-0" />
                )}
              </button>
              {open.adicionais && (
                <div className="pb-4 text-white text-sm sm:text-base">
                  Garantia de 1 ano, manual de instruções incluso, suporte técnico especializado, entrega para todo o Brasil.
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}