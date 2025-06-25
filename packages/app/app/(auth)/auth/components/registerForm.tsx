import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface RegisterFormProps{
    formData: {
        email: string,
        password: string,
        name: string,
        confirm_password: string
    }
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void
}


export function RegisterForm({formData, onChange, onSubmit}: RegisterFormProps){
    return (
        <>
            <div className="flex flex-col gap-6">
                <Card className="overflow-hidden p-0">
                    <CardContent className="grid p-0 md:grid-cols-2">
                        <form className="p-8 md:p-12" onSubmit={onSubmit}>
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col items-center text-center">
                                    <h1 className="font-bold text-2xl">CRIE SUA CONTA</h1>
                                    <p className="text-muted-foreground">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                    </p>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Nome</Label>
                                    <Input 
                                        id="name"
                                        name="name"
                                        type="text"
                                        onChange={onChange}
                                        value={formData.name}
                                        placeholder="Seu nome"
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input 
                                        id="email"
                                        name="email"
                                        type="email"
                                        onChange={onChange}
                                        value={formData.email}
                                        placeholder="mail@example.com"
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="senha">Senha</Label>
                                    </div>
                                    <Input 
                                        id="senha"
                                        name="password"
                                        type="password"
                                        value={formData.password}
                                        onChange={onChange}
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="senha">Confirme sua senha</Label>
                                    </div>
                                    <Input 
                                        id="confirm_password"
                                        name="confirm_password"
                                        type="password"
                                        value={formData.confirm_password}
                                        onChange={onChange}
                                        required
                                    />
                                </div>
                                <Button type="submit" className="w-full">
                                    Entrar
                                </Button>
                                
                                <div className="text-center text-sm">
                                    Já possui conta? {" "} 
                                    <a href="/auth/login" className="text-sm underline-offset-2 underline">Entrar</a>
                                </div>
                            </div>
                        </form>
                        <div className="relative">
                            <img
                                src={'../../../placeholder.svg'}
                                className="w-full inset-0 h-full object-cover absolute"
                            />
                        </div>
                    </CardContent>
                </Card>
                <div className="text-center text-xs text-mute">
                    Ao entrar, você concorda com os nossos <a href="" className="underline-offset-2 underline">Termos de serviços</a> {" "} e <a href="" className="underline-offset-2 underline">Política de Privacidade</a>
                </div>
            </div>
        </>
    )
} 