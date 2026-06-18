<?php

namespace App\Http\Controllers;

use App\Models\Song;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SongController extends Controller
{
    function index()
    {
        $songs = Song::with([
            'type',
            'unit'
        ])->get();

        return Inertia::render('songs/index', [
            'songs' => $songs
        ]);
    }

    function show(Song $song)
    {
        $song->load(['type', 'unit', 'characters', 'characterToSongs.vocalType']);
        return Inertia::render('songs/show', [
            'song' => $song
        ]);
    }
}
