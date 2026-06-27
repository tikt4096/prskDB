<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CreateType extends Model
{
    public function creatorToSongs()
    {
        return $this->hasMany(CreatorToSong::class);
    }
}
