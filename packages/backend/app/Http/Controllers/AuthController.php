<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

//register (name, email, password, confirm_password)
//login (email, password)
//logout
//profile

class AuthController extends Controller{
    public function register(Request $request){
        $data = $request->validate([
           "name" => "required|string",
           "email" => "required|email|unique:users", 
           "password" => "required"
        ]);

        $data['role'] = 'comum';
        User::create($data);

        return response()->json([
            'status' => true,
            'message' => 'Usuário criado com sucesso'
        ]);
    }

    public function login(Request $request){
        $request -> validate([
            'email' => 'required|email',
            'password' => 'required'    
        ]);

        if(!Auth::attempt($request -> only("email", "password"))){
            return response() -> json([
                'status' => false,
                'message' => 'Credenciais inválidas'    
            ]);
        }

        $user = Auth::user(); 

        $token = $user -> createToken("myToken")->plainTextToken;
        
        return response() -> json([
            'status' => true,
            'message' => 'Usuário logado com sucesso!',
            'token' => $token
        ]);
    }

    public function logout(){
        Auth::logout();

        return response() -> json([
           'status' => true,
           'message' => 'Usuário deslogado com sucesso' 
        ]);
    }

    public function profile(){
        $user  = Auth::user();

        return response() -> json([
            'status' => true,
            'message' => "Perfil do usuário",
            'user' => $user
        ]);
    }
}
