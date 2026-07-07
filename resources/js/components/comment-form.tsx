import { useEffect } from 'react';
import { toast } from 'sonner';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useForm } from '@inertiajs/react';

type Props = {
    replyId?: number;
    relationId?: number;
    relationName?: string;
    replyTo?: string;
    isReply?: boolean;
    onClose?: () => void;
    onSubmit?: () => void;
};

export default function CommentForm({
    replyId,
    relationId,
    relationName,
    replyTo,
    isReply = false,
    onClose,
    onSubmit,
}: Props) {
    const { data, setData, post, processing, errors } = useForm({
        relation_id: relationId,
        relation_name: relationName,
        reply_id: replyId,
        name: '',
        content: '',
    });

    useEffect(() => {
        setData({
            relation_id: relationId,
            relation_name: relationName,
            reply_id: replyId,
            name: data.name,
            content: data.content,
        });
    }, [relationId, relationName, replyId, data.name, data.content]);

    const handleSubmit = () => {
        post('/comment/post', {
            preserveScroll: true,
            onSuccess: () => {
                setData('content', '');
                toast.success('コメントを投稿しました。');
                if (onSubmit) {
                    onSubmit();
                }
            },
            onError: () => {
                toast.error('コメント投稿に失敗しました。');
            },
        });
    };

    return (
        <div className="mt-2 border border-gray-400 bg-white p-6 text-black dark:bg-gray-300">
            {replyTo && replyTo !== '' ? (
                <div className="my-2 font-bold">
                    コメントNo.{replyTo}への返信
                </div>
            ) : (
                <></>
            )}
            <div className="mb-4">
                <div className="mb-2 font-bold">名前</div>
                <Input
                    className="dark:bg-gray-200"
                    type="text"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                />
            </div>
            <div>
                {errors.content && (
                    <div className="font-bold text-red-400">
                        {errors.content}
                    </div>
                )}
                <div className="mb-2 font-bold">本文</div>
                <textarea
                    className="focus-visible:border-ring focus-visible:ring-ring/50 h-40 w-full rounded-md border focus-visible:ring-[3px] dark:bg-gray-200"
                    value={data.content}
                    onChange={(e) => setData('content', e.target.value)}
                ></textarea>
            </div>
            <div className="mt-4 flex justify-start">
                <Button
                    className="w-1/2 cursor-pointer border-2 border-blue-500 bg-blue-300 p-2 transition hover:border-blue-800 hover:bg-blue-400 md:w-1/8"
                    disabled={processing}
                    onClick={handleSubmit}
                >
                    投稿
                </Button>
                {isReply ? (
                    <Button
                        className="ml-4 w-1/2 cursor-pointer border-2 border-blue-500 bg-blue-300 p-2 transition hover:border-blue-800 hover:bg-blue-400 md:w-1/8"
                        onClick={onClose}
                    >
                        キャンセル
                    </Button>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}
