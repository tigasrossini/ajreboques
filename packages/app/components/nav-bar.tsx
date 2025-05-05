import {NavigationMenu, NavigationMenuTrigger, NavigationMenuList, NavigationMenuItem, NavigationMenuContent, NavigationMenuLink} from '@/components/ui/navigation-menu'
import { Button } from './ui/button'
import Link from 'next/link'

const defaultLogo = {
    url: '/',
    src: '../../logo.png',
    alt: 'LOGO AJ REBOQUES',
    title: 'AJ REBOQUES'
}

const defaultMenu = [
    {
        title: "a",
        url: 'a'
    },
    {
        title: 'b',
        url: 'b'
    }

]

type MenuItem = {
    title: string,
    url: string
}

interface navBarProps{
    logo?: typeof defaultLogo,
    menu?: MenuItem[]
}


export function NavBar({logo = defaultLogo, menu =  defaultMenu}: navBarProps){
    return(
        <>
        <section>
            <div>
                <nav className="flex justify-between items-center px-4 py-2 border-b bg-stone-100">
                    <div>
                        <a href={logo.url} className="gap-4">
                            <img src={logo.src} alt={logo.alt} title={logo.title}  />
                        </a>
                    </div>
                    <div className="flex gap-4 items-center">
                        <Link href={``}>Produtos</Link>
                        {/* <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className='bg-stone-100 text-'>
                                        Categorias
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <NavigationMenuLink>a</NavigationMenuLink>
                                        <NavigationMenuLink>b</NavigationMenuLink>
                                        <NavigationMenuLink>c</NavigationMenuLink>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu> */}
                        <Link href={``}>Categorias</Link>
                        <Link href="">Contato</Link>
                        <Link href="">Reboques Especiais</Link>
                    </div>
                    <div>
                        <Button variant={`link`} className='bg-stone-100 border-0 shadow-none text-red-500 font-bold '>
                            <Link href={`/auth/login`} className='transition' prefetch={false}>ENTRAR</Link>
                        </Button>
                        <Button className='border-red-500 bg-inherit hover:bg-stone-200 border-solid border-2 text-red-500 font-bold '>
                            <Link href={'/auth/register'} prefetch={false}>CADASTRAR-SE</Link>
                        </Button>
                    </div>
                </nav>
            </div>
        </section>
        </>
    )
}