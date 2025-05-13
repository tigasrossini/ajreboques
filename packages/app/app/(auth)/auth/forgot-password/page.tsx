'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { CircleHelp, ShieldQuestion } from "lucide-react";
import { useState } from "react";

const URL_API = `${process.env.NEXT_PUBLIC_API_URL}`

export default function ForgotPassword(){
    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState<string[]>([])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setErrors([])

        try{
            const response = await axios.post(`${URL_API}/forgot-password`, {email})
            console.log(response)
        }catch(error: any){
            setErrors(['Erro ao enviar e-mail. Tente novamente.'])
            console.log(error)
        }
    }

    return(
        <>
            <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
                <div className="flex flex-col w-full max-w-lg md:max-w-2xl h-96 gap-2 justify-center">
                    <div className="flex flex-col items-center gap-5 max-w-full w-full">
                        <ShieldQuestion className="w-20 h-20"/>
                        <h1 className="font-bold text-4xl">Esqueceu sua senha?</h1>
                        <h2>Sem problemas, nós enviaremos um email com instruções.</h2>
                    
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-4 w-xl">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    className="" 
                                    id="email" 
                                    name="email" 
                                    type="email" 
                                    placeholder="teste@teste.com"
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                />
                                <Button type="submit">Alterar senha</Button>
                            </div>
                        </form>
                        <a href="#" className="text-sm underline">Voltar ao login</a>
                    </div>
                </div>
            </div>
        </>
    )
}