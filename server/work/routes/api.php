<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\WatchApiController;    
use App\Http\Controllers\Api\BeltApiController;
use App\Http\Controllers\Api\SliderApiController;
use App\Http\Controllers\Api\TelegramController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(AuthController::class)->group(function (){

//  Register API
    Route::post('/user_register', 'register');
// Login API
    Route::post('/user_login', 'login');
});

//api-s
Route::get('/watches',[WatchApiController::class,'get_all_products']);
Route::get('/belts',[BeltApiController::class,'get_all_products']);
Route::get('/slider',[SliderApiController::class,'get_slider_images']);

Route::post('/send-telegram-message',[TelegramController::class,'send_telegram_message']);
