<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JWTController;
use App\Http\Controllers\ProductController;
/*
===========================================================================================
*/

Route::group(['prefix'=>'no_auth'], function (){
    Route::get('/get_products', [ProductController::class, 'getProducts']);
    Route::post('/register', [JWTController::class, 'register']);
    Route::post('/login', [JWTController::class, 'login']);
});

Route::group(['middleware' => 'role.admin'], function () {
    Route::post('/post_products', [ProductController::class, 'addProduct']);
    Route::post('/logout', [JWTController::class, 'logout']);
});

Route::group(['middleware' => 'role.user'], function () {
    Route::post('/favorite_this', [ProductController::class, 'favoriteThis']);
    Route::get('/my_faves', [ProductController::class, 'myFavorites']);
    Route::post('logout', [JWTController::class, 'logout'])->name("logout");
    Route::post('/refresh', [JWTController::class, 'refresh']);
    Route::post('/profile', [JWTController::class, 'profile']);
});




