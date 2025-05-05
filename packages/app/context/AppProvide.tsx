'use client'
import { createContext, useContext, useState } from "react"
import axios from "axios"

interface AppProviderType{
    isLoading: boolean,
    login: (email: string, password: string) => Promise<void>,
    register: (name: string, email: string, password: string, confirm_password: string) => Promise<void>
}

const AppContext = createContext<AppProviderType|undefined>(undefined)
const URL_API = `${process.env.NEXT_PUBLIC_API_URL}`

export const  AppProvider = ({children}: Readonly<{children: React.ReactNode}>) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const login = async (email: string, password: string) => {
        setIsLoading(true)
 
        try{
            const response = await axios.post(`${URL_API}/login`, {
                email, 
                password
            }).then(response => response.data).catch(error => {
                if(error.response){
                    console.log(error.response)
                }
            })
            console.log(response)
        }catch(error){

        }finally{
            setIsLoading(false)
        }
    }

    const register = async (name: string, email: string, password: string, confirm_password: string) => {
        setIsLoading(true)
        try{
            const response = await axios.post(`${URL_API}/register`, {
                name,
                email, 
                password,
                confirm_password
            }).then(response => response.data).catch(error => {
                if(error.response){
                    console.log(error.response)
                }
            })
            console.log(response)
        }catch(error){

        }finally{
            setIsLoading(false)
        }
    }

    return(
        <AppContext.Provider value={{login, register, isLoading}}>
            {children}
        </AppContext.Provider>
    )
} 

export const hookContext = () => {
    const context = useContext(AppContext)

    if(!context){
        throw new Error("O contexto deve estar dentro do AppProvider!")
    }

    return context
}