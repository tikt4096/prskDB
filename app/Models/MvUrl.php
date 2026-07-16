<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MvUrl extends Model
{
    public function song()
    {
        return $this->belongsTo(Song::class);
    }
}
