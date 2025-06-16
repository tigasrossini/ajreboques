'use client'
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenuItem,DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { hookContext } from "@/context/AppProvider";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Bell, CircleHelp } from "lucide-react";

export default function Header(){
    const {user, logout} = hookContext()
    return(
        <>
        <div className="flex h-16 items-center w-full justify-between">
            <div className="flex items-center justify-between gap-4">
                <SidebarTrigger className="ml-4 mt-1"/>
                <Separator orientation="vertical" className="data-[orientation=vertical]:h-8" />
                {/* Barra de pesquisa e trigger */}
                <h1>barra de pesquisa</h1>
            </div>
            <div className="text-sm font-semibold">
                Página Inicial
            </div>
            <div className="flex items-center gap-4 m-8">
                {/* Botão de notificação, configuracoes e conta */}
                <CircleHelp className="w-4 h-4 text-black hover:text-gray-700 cursor-pointer"/> 
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Bell className="w-4 h-4 text-black hover:text-gray-700 cursor-pointer"/>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-90">
                        <DropdownMenuLabel>Notificações</DropdownMenuLabel>
                        <DropdownMenuItem>
                            <div className="flex items-center flex-col gap-2">
                                <h1>a</h1>
                                <h1>b</h1>
                                <h1>c</h1>
                                <h1>d</h1>  
                            </div>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                    <Separator orientation="vertical" className="data-[orientation=vertical]:h-8" />
                <div className="flex items-center gap-4 m-05">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className="flex items-center gap-2 cursor-pointer">
                                <Avatar className="w-8 h-8 rounded-lg">
                                    <AvatarImage src={'https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg'}/>
                                </Avatar>
                                <div className="grid text-left text-sm leading-tight">
                                    <span className="truncate font-semibold">{user ? user?.name : 'Carregando...'}</span>
                                    <span className="truncate text-xs">{user?.email}</span>
                                </div>
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-30">
                            <DropdownMenuItem>Conta</DropdownMenuItem>
                            <DropdownMenuItem>Configurações</DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Button variant="link" className="w-full justify-start" onClick={() => {
                                    logout()
                                }}>
                                    Sair
                                </Button>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
        </>
    )
}