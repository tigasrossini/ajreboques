import { Avatar } from "@/components/ui/avatar";
import { DropdownMenuItem,DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { AvatarImage } from "@radix-ui/react-avatar";

export default function Header(){
    return(
        <>
        <div className="flex h-16 items-center w-full justify-between">
            <div className="flex items-center gap-4">
                <SidebarTrigger className="ml-1 mt-1"/>
                <Separator orientation="vertical" className="data-[orientation=vertical]:h-8" />
                {/* Barra de pesquisa e trigger */}
                <h1>barra de pesquisa</h1>
            </div>
            <div className="flex items-center gap-4 m-8">
                {/* Botão de notificação, configuracoes e conta */}
                <h1>Ajuda</h1>
                <h1>Notificações</h1>
                <h1>Configurações</h1>
                    <Separator orientation="vertical" className="data-[orientation=vertical]:h-8" />
                <div className="flex items-center gap-4 m-05">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className="flex items-center gap-2 cursor-pointer">
                                <Avatar className="w-8 h-8 rounded-lg">
                                    <AvatarImage src={'https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg'}/>
                                </Avatar>
                                <div className="grid text-left text-sm leading-tight">
                                    <span className="truncate font-semibold">Matheus</span>
                                    <span className="truncate text-xs">matheus@teste.com</span>
                                </div>
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-30">
                            <DropdownMenuItem>Conta</DropdownMenuItem>
                            <DropdownMenuItem>Configurações</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
        </>
    )
}