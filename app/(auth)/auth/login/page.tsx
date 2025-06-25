'use client'
import { hookContext } from "@/context/AppProvider";
import { useEffect, useState } from "react";
import { LoginForm } from "../components/loginForm";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { EyeOffIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface formData{
    email: string, 
    password: string
}


export default function login(){
    const [formData, setFormData] = useState<formData> ({
        email: "",
        password: ""
        })
    
    const router = useRouter()
    const {login, register, isLoading, authToken} = hookContext()

    useEffect(() => {
        if(authToken){
            router.push('/')
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
    {/* <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
        <div className="w-full max-w-sm md:max-w-3xl">
            <LoginForm formData={formData} onChange={handleOnChangeInput} onSubmit={handleFormChange}/>
        </div>
    </div> */}
    
    <main className="flex min-h-screen bg-[#101014]">
      {/* Left side - placeholder/image area */}
      <section className="w-full md:w-5/12 lg:w-[795px] bg-[#d9d9d9]" />

      {/* Right side - login form */}
      <section className="w-full md:w-7/12 lg:w-[1125px] bg-[#101014] flex justify-center items-center">
        <Card className="w-full max-w-[650px] rounded-[0px_24px_24px_0px] border-none bg-transparent">
          <CardContent className="p-14">
            <div className="flex flex-col space-y-10">
              {/* Header */}
              <h1 className="text-center text-white text-3xl font-semibold font-poppins ">
                Entrar na sua conta
              </h1>

              {/* Form */}
              <form className="space-y-10" onSubmit={handleFormChange}>
                {/* Email field */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-white text-base font-poppins mx-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    onChange={handleOnChangeInput}
                    value={formData.email}
                    placeholder="mail@example.com"
                    required
                    className="h-14 rounded-xl border-[#66666659] bg-transparent text-white my-2"
                  />
                </div>

                {/* Password field */}
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <label
                      htmlFor="password"
                      className="text-white text-base font-poppins mx-2"
                    >
                      Sua senha
                    </label>
                    <div className="flex items-center gap-1">
                      <EyeOffIcon className="h-6 w-6 text-white" />
                      <span className="text-[#ffffffcc] text-base text-right font-poppins ">
                        Ocultar
                      </span>
                    </div>
                  </div>
                  <Input
                    id="senha"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleOnChangeInput}
                    required
                    className="h-14 rounded-xl border-[#66666659] bg-transparent text-white my-2"
                  />
                </div>

                {/* Forgot password link */}
                <div className="flex justify-end">
                  <a
                    href="#"
                    className="text-[#ffffffcc] text-sm underline font-poppins "
                  >
                    Esqueci minha senha
                  </a>
                </div>
                <div className="w-full flex justify-center">
                {/* Login button */}
                    <Button
                        type="submit"
                        className="w-4/4  h-12 bg-[#c41010] hover:bg-[#a30d0d] rounded-[20px] text-[18px] font-medium font-poppins"
                    >
                    Entrar
                    </Button>
                </div>

                {/* Terms text */}
                <p className="text-white text-base font-poppins ">
                  Ao continuar, você concorda com os{" "}
                  <a href="#" className="underline">
                    Termos de Serviço
                  </a>{" "}
                  e Políticas de Privacidade.
                </p>
              </form>

              {/* Divider */}
              <div className="flex items-center gap-6">
                <Separator className="flex-1 bg-[#66666680]" />
                <span className="text-white text-[22px] font-medium font-['Poppins-Medium',Helvetica]">
                  ou
                </span>
                <Separator className="flex-1 bg-[#66666680]" />
              </div>

              {/* Create account button */}
              <Button
                variant="outline"
                className="w-full h-[58px] bg-white text-[#111111] border-[#111111] rounded-[40px] text-xl font-poppins "
              >
                <a href="/auth/register" className="text-base underline-offset-2 no-underline">Registrar</a>
                
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
    </>
    )
} 
//https://www.youtube.com/watch?v=i270Os2MSqg&t=1171s