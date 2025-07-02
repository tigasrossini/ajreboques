import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-black text-white font-montserrat">
      {/* Top border line */}
      <div className="w-full h-[3px] bg-white" />

      <div className="container mx-auto px-4 py-8 lg:py-12">
        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Logo section */}
          <div className="lg:col-span-1">
            <div className="w-full max-w-[165px] h-[149px] bg-gray-300 rounded-lg mx-auto lg:mx-0" />
          </div>

          {/* Location section */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <h3 className="text-lg lg:text-xl font-bold mb-4 tracking-tight">
              Localização
            </h3>
            <address className="text-sm lg:text-base not-italic leading-6 tracking-tight">
              R. Antônio de Oliveira, 955 - Jardim das Oliveiras, São José do
              Rio Preto - SP, 15047-017
            </address>
          </div>

          {/* Institutional section */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <h3 className="text-sm lg:text-[15px] font-bold mb-4 leading-6 tracking-tight">
              Institucional
            </h3>
            <ul className="space-y-2 text-sm lg:text-base">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 transition-colors tracking-tight"
                >
                  Termos de uso
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 transition-colors tracking-tight"
                >
                  Políticas de privacidade
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 transition-colors tracking-tight"
                >
                  Políticas de descrição
                </a>
              </li>
            </ul>
          </div>

          {/* Terms of service section */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <h3 className="text-sm lg:text-[15px] font-bold mb-4 leading-6 tracking-tight">
              Termos de serviço
            </h3>
            <ul className="space-y-2 text-sm lg:text-base">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 transition-colors tracking-tight"
                >
                  Formas de pagamento
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 transition-colors tracking-tight"
                >
                  Formas de entrega
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 transition-colors tracking-tight"
                >
                  Dúvidas frequentes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 transition-colors tracking-tight"
                >
                  Sobre nós
                </a>
              </li>
            </ul>
          </div>

          {/* Contact section */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <h3 className="text-sm lg:text-[15px] font-bold mb-4 leading-6 tracking-tight">
              Contatos
            </h3>
            <a
              href="mailto:ajreboques@gmail.com"
              className="text-sm lg:text-base hover:text-gray-300 transition-colors tracking-tight"
            >
              ajreboques@gmail.com
            </a>
          </div>

          {/* Auth buttons section - positioned in grid on larger screens */}
          <div className="lg:col-span-1 flex flex-col gap-3 items-center lg:items-end lg:justify-start">
            <Button
              variant="secondary"
              className={cn(
                "w-[130px] h-10 rounded-md bg-white text-black hover:bg-gray-100",
                "text-sm lg:text-[15px] font-medium tracking-tight",
              )}
            >
              Registrar-se
            </Button>
            <Button
              variant="outline"
              className={cn(
                "w-[130px] h-10 rounded-md bg-black border-white text-white hover:bg-white hover:text-black",
                "text-sm lg:text-[15px] font-medium tracking-tight",
              )}
            >
              Login
            </Button>
          </div>
        </div>

        {/* Separator line */}
        <div className="w-full h-px bg-gray-300 my-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-sm lg:text-base tracking-tight order-2 md:order-1">
            © ETEC., 2025. Todos os direitos reservados
          </div>

          {/* Social media section */}
          <div className="flex flex-col sm:flex-row items-center gap-4 order-1 md:order-2">
            <span className="text-sm lg:text-[15px] tracking-tight whitespace-nowrap">
              Nos siga nas redes sociais:
            </span>

            {/* Social media icons */}
            <div className="flex gap-3">
              {[1, 2, 3, 4].map((_, index) => (
                <div
                  key={index}
                  className="w-11 h-11 rounded-full bg-gray-300 border border-black/30 flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  {/* Placeholder for social media icons */}
                  <div className="w-6 h-6 bg-gray-500 rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}