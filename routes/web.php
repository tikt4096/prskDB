<?php

use App\Http\Controllers\SongController;
use App\Http\Controllers\testController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'index');
Route::get('/songs', [SongController::class, 'index']);
Route::get('/songs/{song}', [SongController::class, 'show']);

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__ . '/settings.php';
