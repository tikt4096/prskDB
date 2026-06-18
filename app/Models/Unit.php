<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Unit extends Model
{
    public function characterDetails()
    {
        return $this->hasMany(CharacterDetail::class);
    }

    public function songs()
    {
        return $this->hasMany(Song::class);
    }
}
