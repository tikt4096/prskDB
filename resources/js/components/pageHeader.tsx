import { Head } from '@inertiajs/react';
import Header from './header';

type Props = {
    caption: string;
    title?: string;
    children?: React.ReactNode;
    noTitle?: boolean;
};

export default function PageHeader({
    caption,
    title,
    children,
    noTitle = false,
}: Props) {
    return (
        <>
            {noTitle ? <></> : <Head title={title ?? caption} />}
            <header className="mb-6 flex items-center justify-between bg-gray-200 pr-4 pl-4 text-black">
                <Header>{caption}</Header>
                {children ? (
                    <div className="flex gap-2">{children}</div>
                ) : (
                    <></>
                )}
            </header>
        </>
    );
}
