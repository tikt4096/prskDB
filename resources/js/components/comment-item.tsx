import { useState } from 'react';
import { motion } from 'motion/react';
import { Comment } from './comment-list';
import CommentForm from './comment-form';
import CommentList from './comment-list';

type Props = {
    comment: Comment;
    relationId?: number;
    relationName?: string;
    depth?: number;
    replyTo?: string;
    isReply?: boolean;
    index?: number;
};

export default function CommentItem({
    comment,
    relationId,
    relationName,
    depth = 0,
    replyTo = '',
    isReply = false,
    index = 0,
}: Props) {
    const [openReplyForm, setOpenReplyForm] = useState<boolean>(false);
    const [openReplies, setOpenreplies] = useState<boolean>(false);

    const mLeft = depth > 0 && depth < 4 ? 'ml-6' : '';
    const replyNum = replyTo !== '' ? replyTo + '-' : '';

    return (
        <div
            className={
                (depth === 0 ? 'mb-4 border border-gray-200 ' : '') + mLeft
            }
        >
            <div className="p-2">
                <div
                    className={
                        (isReply
                            ? 'md:flex md:items-center'
                            : `flex items-center`) +
                        ` bg-gray-200 p-2 [&>div]:mr-2`
                    }
                >
                    <div>{`${replyNum}${index + 1} : ${comment.name}`}</div>
                    {isReply ? (
                        <div className="text-sm text-gray-600">
                            {replyTo}への返信
                        </div>
                    ) : (
                        <></>
                    )}
                    <div className="text-sm text-gray-600">
                        {comment.post_date.toLocaleString().replace(/-/g, '/')}
                    </div>
                </div>
                <div className="bg-gray-100 p-2">
                    <div className="whitespace-pre-wrap">{comment.content}</div>
                    <div className="mt-2">
                        <span
                            className="cursor-pointer border border-gray-800 bg-gray-200 px-2 py-1 text-center transition duration-300 hover:bg-gray-400"
                            onClick={() => setOpenReplyForm(!openReplyForm)}
                        >
                            {openReplyForm ? 'キャンセル' : '返信'}
                        </span>
                    </div>
                    <motion.div
                        initial={{
                            height: 0,
                            opacity: 0,
                        }}
                        animate={{
                            height: openReplyForm ? 'auto' : 0,
                            opacity: openReplyForm ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden' }}
                    >
                        <CommentForm
                            key={comment.id}
                            replyId={comment.id}
                            replyTo={`${replyNum}${index + 1}`}
                            isReply={true}
                            relationId={relationId}
                            relationName={relationName}
                            onClose={() => setOpenReplyForm(false)}
                            onSubmit={() => setOpenReplyForm(false)}
                        />
                    </motion.div>
                </div>
            </div>
            {comment.replies.length > 0 ? (
                <>
                    <div className="m-2">
                        <span
                            className="cursor-pointer text-blue-400 underline underline-offset-4"
                            onClick={() => setOpenreplies(!openReplies)}
                        >
                            {openReplies
                                ? '返信コメントを非表示'
                                : `返信コメントを表示(${comment.replies.length})`}
                        </span>
                    </div>
                    <motion.div
                        initial={{
                            height: 0,
                            opacity: 0,
                        }}
                        animate={{
                            height: openReplies ? 'auto' : 0,
                            opacity: openReplies ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden' }}
                    >
                        <CommentList
                            comments={comment.replies}
                            depth={depth + 1}
                            relationId={relationId}
                            relationName={relationName}
                            isReply={true}
                            replyTo={`${replyNum}${index + 1}`}
                        />
                    </motion.div>
                </>
            ) : (
                <></>
            )}
        </div>
    );
}
