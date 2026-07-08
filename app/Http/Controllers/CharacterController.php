<?php

namespace App\Http\Controllers;

use App\Models\Character;
use App\Models\Comment;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CharacterController extends Controller
{
    function index()
    {
        $characters = Character::with(
            [
                'detail.unit',
                'detail.gender'
            ]
        )->where('type_id', 1)
            ->get();

        return Inertia::render('characters/index', [
            'characters' => $characters
        ]);
    }

    function show(Character $character)
    {
        $character->load(['detail.unit', 'detail.gender', 'songs']);

        $comments = Comment::where('relation_id', $character->id)
            ->where('relation_name', 'characters')
            ->whereNull('reply_id')
            ->with('replies')
            ->get();

        return Inertia::render('characters/show', [
            'character' => $character,
            'comments' => $comments
        ]);
    }
}
