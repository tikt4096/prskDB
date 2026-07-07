import { MouseEventHandler } from 'react';
import { cn } from '@/lib/utils';

type Props = {
    children: React.ReactNode;
    onSearch: MouseEventHandler;
    onClear?: MouseEventHandler;
    className?: string;
    contentClassName?: string;
    caption?: string;
};

export default function Search({
    children,
    onSearch,
    onClear,
    className,
    contentClassName,
    caption,
}: Props) {
    return (
        <form
            className={cn('m-10 border border-gray-200', className)}
            onSubmit={(e) => {
                e.preventDefault();
            }}
        >
            <div className="bg-blue-300 px-5 py-2">
                {caption ? caption : '検索フォーム'}
            </div>
            <div className="p-5">
                <div className={contentClassName}>{children}</div>
                <div className="flex justify-end border-t border-gray-200 pt-5">
                    {onClear ? (
                        <button
                            className="mr-10 cursor-pointer rounded border border-gray-600 bg-gray-300 px-4 text-black hover:bg-gray-500"
                            onClick={onClear}
                        >
                            クリア
                        </button>
                    ) : (
                        <></>
                    )}
                    <button
                        type="submit"
                        className="cursor-pointer rounded border border-blue-600 bg-blue-300 px-4 text-black hover:bg-blue-500"
                        onClick={onSearch}
                    >
                        検索
                    </button>
                </div>
            </div>
        </form>
    );
}
