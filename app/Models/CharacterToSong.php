<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CharacterToSong extends Model
{
  public function song()
  {
    return $this->belongsTo(Song::class);
  }

  public function vocalType()
  {
    return $this->belongsTo(VocalType::class);
  }
}
