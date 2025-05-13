import { hookContext } from "@/context/AppProvider";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ['/dashboard'];
const publicRoutes = ['/login', '/register', '/'];

export default async function middleware(req: NextRequest){
    const path = req.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)

    const authToken = (await cookies()).get('authToken')?.value

    if(isProtectedRoute && !authToken){
        return NextResponse.redirect(new URL('/auth/login', req.nextUrl))
    }

    if(isPublicRoute && authToken && !req.nextUrl.pathname.startsWith('/dashboard')){
        return 
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}