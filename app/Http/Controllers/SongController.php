<?php

namespace App\Http\Controllers;

use App\Models\Song;
use App\Models\SongType;
use App\Models\Unit;
use App\Models\Comment;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SongController extends Controller
{
    function index(Request $request)
    {
        $songs = Song::with([
            'type',
            'unit'
        ])
            ->name($request->name)
            ->unitIds($request->unit_ids)
            ->songTypeIds($request->song_type_ids)
            ->get();

        return Inertia::render('songs/index', [
            'songs' => $songs,
            'units' => Unit::all(),
            'song_types' => SongType::all(),
            'filters' => [
                'name' => $request->name,
                'unit_ids' => collect($request->unit_ids)
                    ->map(fn($id) => (int) $id)
                    ->all(),
                'song_type_ids' => collect($request->song_type_ids)
                    ->map(fn($id) => (int)$id)
                    ->all()
            ]
        ]);
    }

    function show(Song $song)
    {
        $song->load(['type', 'unit', 'characters', 'characterToSongs.vocalType', 'creators', 'creatorToSongs.createType']);
        $comments = Comment::where('relation_id', $song->id)
            ->where('relation_name', 'songs')
            ->whereNull('reply_id')
            ->with('replies')
            ->get();

        return Inertia::render('songs/show', [
            'song' => $song,
            'comments' => $comments
        ]);
    }
}
