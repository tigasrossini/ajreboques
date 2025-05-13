'use client'
import { useState } from "react";
import { RegisterForm } from "../components/registerForm";
import { hookContext } from "@/context/AppProvider";

interface formData{
    name: string,
    email: string, 
    password: string,
    confirm_password: string
}

export default function register(){
    const {register} = hookContext()
    const [formData, setFormData] = useState<formData>({
        name: "",
        email: "",
        password: "",
        confirm_password: ""
    })

    const handleOnChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleFormChange = async (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()
        try{
            await register(formData.name, formData.email, formData.password, formData.confirm_password!)
        }catch(Error){
            console.log("Authentication error")
        }
    }

    return(
        <>
            <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
                <div className="w-full max-w-sm md:max-w-3xl">
                    <RegisterForm formData={formData} onChange={handleOnChangeInput} onSubmit={handleFormChange}/>
                </div>
            </div>
        </>
    )
}