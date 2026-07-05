<?php

namespace App\Http\Controllers;

use App\Http\Requests\CommentPostRequest;
use App\Models\Comment;

class CommentController extends Controller
{
    function post(CommentPostRequest $request)
    {
        $param = $request->validated();
        $comment = new Comment();
        if ($param['name'] === '' || $param['name'] === null) {
            $param['name'] = '名無しさん';
        }
        $param['post_date'] = now();

        $comment->create($param);

        return redirect()->route($param['relation_name'] . '.show', $param['relation_id'])->with('message', '投稿完了');
    }
}
