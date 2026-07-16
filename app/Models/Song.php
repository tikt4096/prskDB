<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class Song extends Model
{
    public function type()
    {
        return $this->belongsTo(SongType::class);
    }

    public function unit()
    {
        return $this->belongsTo(Unit::class);
    }

    public function characters()
    {
        return $this->belongsToMany(Character::class, 'character_to_songs', 'song_id', 'character_id');
    }

    public function characterToSongs()
    {
        return $this->hasMany(CharacterToSong::class);
    }

    public function creators()
    {
        return $this->belongsToMany(Creator::class, 'creator_to_songs', 'song_id', 'creator_id');
    }

    public function creatorToSongs()
    {
        return $this->hasMany(CreatorToSong::class);
    }

    public function mvUrls()
    {
        return $this->hasMany(MvUrl::class)
            ->orderBy('display_order');
    }

    public function scopeName(Builder $query, ?string $name)
    {
        if ($name) {
            $query->where('name', 'like', "%$name%");
        }

        return $query;
    }

    public function scopeUnitIds(Builder $query, ?array $unit_ids)
    {
        if ($unit_ids) {
            $query->whereIn('unit_id', $unit_ids);
        }

        return $query;
    }

    public function scopeSongTypeIds(Builder $query, ?array $song_type_ids)
    {
        if ($song_type_ids) {
            $query->whereIn('type_id', $song_type_ids);
        }

        return $query;
    }
}
