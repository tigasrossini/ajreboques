import axios from "axios";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ['/dashboard'];
const publicRoutes = ['/login', '/register', '/'];
const URL_API = `${process.env.NEXT_PUBLIC_API_URL}`

export default async function middleware(req: NextRequest){
    const path = req.nextUrl.pathname
    const authToken = (await cookies()).get('authToken')?.value
 
    const isProtectedRoute = protectedRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)


    if(isProtectedRoute && !authToken){
        return NextResponse.redirect(new URL('/auth/login', req.nextUrl))
    }

    if(isPublicRoute && authToken && !req.nextUrl.pathname.startsWith('/dashboard')){
        return 
    }

    if(path.startsWith('/dashboard')){
        const response = await axios.get(`${URL_API}/profile`, {headers: {Authorization: `Bearer ${authToken}`}} )
        
        if(response?.data?.user?.role !== 'admin'){
            console.log('Não autorizado')
            return NextResponse.redirect(new URL('/', req.nextUrl))
        }
    }



    return NextResponse.next()
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}