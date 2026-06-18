<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VocalType extends Model
{
    public function characterToSongs()
    {
        return $this->hasMany(CharacterToSong::class);
    }
}
