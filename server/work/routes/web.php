<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\ProductsController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\SliderImagesController;
use App\Http\Controllers\Admin\WatchController;
use App\Http\Controllers\Admin\BeltsController;
use Illuminate\Support\Facades\Notification;
use App\Notifications\Telegram;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Auth::routes();

// Get Home Page


// Get Group Middleware is Admin Panel
Route::middleware('role:admin')->group(function () {
    Route::get('/', [AdminController::class, 'index'])->name('index');

    Route::prefix('watches')->group(function () {
        Route::get('/', [WatchController::class, "show_products_list"])->name('watch_list');
        Route::get('/create-form', [WatchController::class, "show_create_form"])->name('watch_create_form');
        Route::get('/update-form/{id}', [WatchController::class, "show_update_form"])->name('watch_update_form');
        Route::get('/{id}', [WatchController::class, "show_product_info"])->name('watch_info');
        Route::post('/create', [WatchController::class, "store"])->name('store_watch');
        Route::put('/update/{id}', [WatchController::class, "update"])->name('update_watch');
        Route::match(['get', 'delete'], '/delete/{id}', [WatchController::class, "delete"])->name('delete_watch');
    });

    Route::prefix('belts')->group(function () {
        Route::get('/', [BeltsController::class, "show_products_list"])->name('belt_list');
        Route::get('/create-form', [BeltsController::class, "show_create_form"])->name('belt_create_form');
        Route::get('/update-form/{id}', [BeltsController::class, "show_update_form"])->name('belt_update_form');
        Route::get('/{id}', [BeltsController::class, "show_product_info"])->name('belt_info');
        Route::post('/create', [BeltsController::class, "store"])->name('store_belt');
        Route::put('/update/{id}', [BeltsController::class, "update"])->name('update_belt');
        Route::match(['get', 'delete'], '/delete/{id}', [BeltsController::class, "delete"])->name('delete_belt');
    });

    Route::controller(SliderImagesController::class)->group(function () {
        Route::get('/slider','index')->name('slider');
        Route::post('/slider/update','update')->name('slider_update');
    });


});


