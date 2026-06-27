<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CreatorToSong extends Model
{
    public function createType()
    {
        return $this->belongsTo(CreateType::class);
    }
}
