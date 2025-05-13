<?php

use Illuminate\Support\Facades\Route;
use App\Mail\BemVindoMail;
use Illuminate\Support\Facades\Mail;


Route::get('/email', function(){
    $user = new \stdClass();
    $user -> name = 'Usuario teste';
    $user -> email = 'tiagorossinicorrea@gmail.com';

    Mail::to($user->email)->send(new BemVindoMail);

    return 'Email criado com sucesso';
});