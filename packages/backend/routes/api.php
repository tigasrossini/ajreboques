<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\NewPasswordController;
use App\Http\Controllers\PasswordResetLinkController;
use App\Models\User;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;

Route::post("register", [AuthController::class, 'register']);
Route::post("login", [AuthController::class, 'login']);

Route::group([
    "middleware" => ['auth:sanctum']
], function(){
    Route::get('profile', [AuthController::class, 'profile']);
    Route::get('logout', [AuthController::class, 'logout']);
});

Route::post('/forgot-password', function(Request $request){
    $request -> validate(['email' => 'required|email']);

    $status = Password::sendResetLink(
        $request -> only('email')
    );

   return $status === Password::RESET_LINK_SENT
        ? response()->json(['message' => __($status)], 200)
        : response()->json(['message' => __($status)], 422); 
})->middleware('guest')->name('password.email');


Route::get('/reset-password/{token}', function(string $token){
    return view('auth.reset-password', ['token' => $token]);
})->middleware('guest')->name('password.reset');

Route::post('/reset-password', function(Request $request){
    $request -> validate([
            'token' => 'required',
            'email'=> 'required|email',
            'password' => 'required|min:8|confirmed',
    ]);

    $status = Password::reset(
        $request -> only('email', 'password', 'password_confirmation', 'token'),

        function(User $user, string $password){
            $user -> forceFill([
                'password' => Hash::make($password)
                ])->setRememberToken(Str::random(60));
            
            $user -> save();
            event(new PasswordReset($user));
        });
        
        return $status === Password::PASSWORD_RESET
            ? response()->json(['message' => 'Senha redefinida com sucesso'], 200)
            : response()->json(['message' => __($status)], 422);
})->middleware('guest')->name('password.update');