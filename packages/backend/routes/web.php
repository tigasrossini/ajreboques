<?php

use Illuminate\Support\Facades\Route;

Route::get('/api', function () {
    return json_decode('a');
});
