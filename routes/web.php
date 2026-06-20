<?php

use App\Http\Controllers\CharacterController;
use App\Http\Controllers\SongController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'index')->name('home');
Route::get('/songs', [SongController::class, 'index']);
Route::get('/songs/{song}', [SongController::class, 'show']);

Route::get('/characters', [CharacterController::class, 'index']);
Route::get('/characters/{character}', [CharacterController::class, 'show']);

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__ . '/settings.php';
