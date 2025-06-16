'use client'
import { createContext, useContext, useEffect, useState } from "react"
import axios from "axios"
import Cookies from "js-cookie"
import { usePathname, useRouter } from "next/navigation"

interface User{
    id: number,
    name: string,
    email: string,
    created_at: string,
    updated_at: string
}
interface AppProviderType{
    isLoading: boolean,
    authToken: string | null,
    login: (email: string, password: string) => Promise<void>,
    register: (name: string, email: string, password: string, confirm_password: string) => Promise<void>
    logout: () => void,
    user: User | null,
}

const AppContext = createContext<AppProviderType|undefined>(undefined)
const URL_API = `${process.env.NEXT_PUBLIC_API_URL}`

export const  AppProvider = ({children}: Readonly<{children: React.ReactNode}>) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [authToken, setAuthToken] = useState<string | null>(null) 
    const [user, setUser] = useState<User | null>(null)
    const router = useRouter()

    useEffect(() => {
        const token = Cookies.get('authToken')

        if(token){
            setAuthToken(token)
            profile()
        }
        setIsLoading(false)
    }, [authToken])

    const login = async (email: string, password: string) => {
        setIsLoading(true)
 
        try{
            const response = await axios.post(`${URL_API}/login`, {
                email, 
                password
            })
            if(response.data.status){
                Cookies.set('authToken', response.data.token, {expires: 3})
                console.log(response)
                setAuthToken(response.data.token)
                router.push('/dashboard')
            }
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

    const profile = async () => {
        setIsLoading(true)
        try{
            const response = await axios.get(`${URL_API}/profile`, {headers: {Authorization: `Bearer ${authToken}`}} )
            setUser(response.data.user)
        }catch(error){
        }
        finally{
            setIsLoading(false)
        }
    }

    const logout = () => {
        setAuthToken(null)
        Cookies.remove('authToken')
        setIsLoading(false)
        router.push('/auth/login')
    }

    return(
        <AppContext.Provider value={{login, register, isLoading, authToken, logout, user}}>
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