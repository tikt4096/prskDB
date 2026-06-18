<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CharacterType extends Model
{
    public function characters()
    {
        return $this->hasMany(Character::class);
    }
}
