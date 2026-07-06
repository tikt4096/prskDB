import CommentItem from './comment-item';

export type Comment = {
    id: number;
    content: string;
    name: string;
    replyId: number;
    post_date: Date;
    replies: Comment[];
};

type Props = {
    comments: Comment[];
    depth?: number;
    relationId?: number;
    relationName?: string;
    isReply?: boolean;
    replyTo?: string;
};

export default function CommentList({
    comments,
    depth = 0,
    relationId,
    relationName,
    isReply = false,
    replyTo = '',
}: Props) {
    return comments.length > 0 ? (
        comments.map((comment, index) => (
            <CommentItem
                comment={comment}
                index={index}
                depth={depth}
                relationId={relationId}
                relationName={relationName}
                isReply={isReply}
                replyTo={replyTo}
            />
        ))
    ) : (
        <div className="my-5 bg-gray-200 p-4 text-black">
            コメントはまだありません。
        </div>
    );
}
