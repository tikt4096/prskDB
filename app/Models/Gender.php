<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Gender extends Model
{
    public function characterDetails()
    {
        return $this->hasMany(CharacterDetail::class);
    }
}
