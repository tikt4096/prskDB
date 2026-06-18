<?php

namespace App\Http\Controllers;

use App\Models\Character;
use Illuminate\Http\Request;
use Inertia\Inertia;

class testController extends Controller
{
    public function index()
    {
        $characters = Character::with([
            'detail.unit',
            'detail.gender'
        ])->get();

        return Inertia::render('welcome', [
            'characters' => $characters
        ]);
    }
}
