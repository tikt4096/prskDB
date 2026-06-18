<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SongType extends Model
{
  public function songs()
  {
    return $this->hasMany(Song::class);
  }
}
