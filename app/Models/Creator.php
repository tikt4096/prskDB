<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Creator extends Model
{
    public function songs()
    {
        return $this->belongsToMany(Song::class, 'creator_to_songs', 'creator_id', 'song_id');
    }
}
