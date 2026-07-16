type Props = {
    level: string;
    children: React.ReactNode;
    bgColor?: string;
};

export default function SubTitle({
    children,
    level,
    bgColor = 'bg-gray-300 dark:bg-gray-400',
}: Props) {
    let component: React.ReactNode | null = null;

    switch (level) {
        case 'h1':
            component = (
                <h1
                    className={`my-6 px-2 py-1 text-3xl font-bold text-black ${bgColor}`}
                >
                    {children}
                </h1>
            );
            break;
        case 'h2':
            component = (
                <h2
                    className={`my-6 px-2 py-1 text-2xl font-bold text-black ${bgColor}`}
                >
                    {children}
                </h2>
            );
            break;
        case 'h3':
            component = (
                <h3
                    className={`my-6 px-2 py-1 text-xl font-bold text-black ${bgColor}`}
                >
                    {children}
                </h3>
            );
            break;
        case 'h4':
            component = (
                <h4
                    className={`my-6 px-2 py-1 text-lg font-bold text-black ${bgColor}`}
                >
                    {children}
                </h4>
            );
            break;
        case 'h5':
            component = (
                <h5
                    className={`my-6 px-2 py-1 text-base font-bold text-black ${bgColor}`}
                >
                    {children}
                </h5>
            );
            break;
        case 'h6':
            component = (
                <h6
                    className={`my-6 px-2 py-1 text-sm font-bold text-black ${bgColor}`}
                >
                    {children}
                </h6>
            );
            break;
    }

    return component;
}
