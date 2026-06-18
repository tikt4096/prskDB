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
}
