type Props = {
    className?: string;
    children: React.ReactNode;
};

export default function PageBody({ children, className }: Props) {
    return <div className={`m-6 pb-40 ${className}`}>{children}</div>;
}
