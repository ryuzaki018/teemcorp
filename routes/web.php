<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TestController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\CompanyProfile\CompanyProfileController;
use App\Http\Controllers\CompanyQuote\CompanyQuoteController;
use App\Http\Controllers\Dashboard\DashboardController;
use App\Http\Controllers\Register\RegisterController;
use App\Http\Controllers\FinanceApiController;
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


Route::middleware(['guest'])->group(function () {
    Route::post('/login', [AuthController::class, 'loginHandler']);
    Route::get('/login', [AuthController::class, 'show'])->name('login');
    Route::get('/register', [RegisterController::class, 'show'])->name('register');
    Route::post('/register', [RegisterController::class, 'registerHandler'])->name('register');
});

Route::middleware('auth')->group(function () {
    Route::get('/', [DashboardController::class, 'show'])->name('dashboard');

    Route::get('/logout', [AuthController::class, 'logoutHandler']);

    Route::get('/company-profile', [CompanyProfileController::class, 'show'])->name('companyProfile');
    Route::get(
        '/company-profile/{stockSymbol}',
        [CompanyProfileController::class, 'getCompanyProfile']
    );
    Route::get('/company-quote', [CompanyQuoteController::class, 'show'])->name('companyQuote');
    Route::get(
        '/company-quote/{stockSymbol}',
        [CompanyQuoteController::class, 'getCompanyQuote']
    );
});