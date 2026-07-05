<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Comment extends Model
{
    use SoftDeletes;

    protected $dates = ['deleted_at'];

    protected $guarded = [
        'id'
    ];

    protected $fillable = [
        'content',
        'name',
        'relation_id',
        'relation_name',
        'reply_id',
        'post_date'
    ];

    public function song()
    {
        return $this->belongsTo(Song::class);
    }

    // 返信先コメント
    public function replyTo()
    {
        return $this->belongsTo(Comment::class, 'reply_id');
    }

    // 返信コメント
    public function replies()
    {
        return $this->hasMany(Comment::class, 'reply_id')
            ->with('replies');
    }
}
