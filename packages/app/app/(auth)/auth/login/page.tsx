'use client'
import { Input } from "@/components/ui/input";
import { hookContext } from "@/context/AppProvide";
import { useEffect, useState } from "react";
import { LoginForm } from "../components/loginForm";
import { useRouter } from "next/navigation";

interface formData{
    name?: string,
    email: string, 
    password: string,
    confirm_password?: string
}


export default function login(){
    const [isLogin, setIsLogin] = useState<boolean>(true) 
    const [formData, setFormData] = useState<formData> ({
        name: "",
        email: "",
        password: "",
        confirm_password: ""
    })
    const router = useRouter()
    const {login, register, isLoading, authToken} = hookContext()

    useEffect(() => {
        if(authToken){
            router.push('/dashboard')
        }
    }, [authToken])

    const handleOnChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleFormChange = async (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()
        //alert(`${formData.name}\n${formData.email}\n${formData.password}\n`)
        try{
            await login(formData.email, formData.password)
            //await register(formData.name!, formData.email, formData.password, formData.confirm_password!)
        }catch(Error){
            console.log("Authentication error")
        }
    }

    return(
    <>   
    {/*      
    <form onSubmit={handleFormChange}>
        <Input placeholder="Digite seu email" id="email" name="email" value={formData.email} onChange={handleOnChangeInput}/>
        <Input placeholder="Digite sua senha" id="senha" type="password" name="password" value={formData.password} onChange={handleOnChangeInput}/>
        <Input placeholder="Digite seu nome" id="nome"  name="name" value={formData.name} onChange={handleOnChangeInput}/>
        <Input placeholder="Confirme sua senha" type="password" name="confirm_password" value={formData.confirm_password} onChange={handleOnChangeInput}/>
        <button type="submit">Cadastrar</button>
        <button type="submit">Login</button>
    </form> */}
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
        <div className="w-full max-w-sm md:max-w-3xl">
            <LoginForm formData={formData} onChange={handleOnChangeInput} onSubmit={handleFormChange}/>
        </div>
    </div>
    </>
    )
} 
//https://www.youtube.com/watch?v=i270Os2MSqg&t=1171s