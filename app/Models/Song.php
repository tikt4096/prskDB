<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Song extends Model
{
    public function type()
    {
        return $this->belongsTo(SongType::class);
    }

    public function unit()
    {
        return $this->belongsTo(Unit::class);
    }

    public function characters()
    {
        return $this->belongsToMany(Character::class, 'character_to_songs', 'song_id', 'character_id');
    }

    public function characterToSongs()
    {
        return $this->hasMany(CharacterToSong::class);
    }

    public function creators()
    {
        return $this->belongsToMany(Creator::class, 'creator_to_songs', 'song_id', 'creator_id');
    }

    public function creatorToSongs()
    {
        return $this->hasMany(CreatorToSong::class);
    }
}
