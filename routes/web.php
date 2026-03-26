<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// Catch-all route for Vue SPA - must be at the end
Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');
