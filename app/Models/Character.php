<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Character extends Model
{
    public function detail()
    {
        return $this->hasOne(CharacterDetail::class);
    }

    public function type()
    {
        return $this->belongsTo(CharacterType::class);
    }

    public function songs()
    {
        return $this->belongsToMany(Song::class, 'character_to_songs', 'character_id', 'song_id');
    }

    public function characterToSongs()
    {
        return $this->hasMany(CharacterToSong::class);
    }
}
