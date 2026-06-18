<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CharacterDetail extends Model
{
    public function charcter()
    {
        return $this->belongsTo(Character::class);
    }

    public function unit()
    {
        return $this->belongsTo(Unit::class);
    }

    public function gender()
    {
        return $this->belongsTo(Gender::class);
    }
}
