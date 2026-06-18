type Props = {
    children: React.ReactNode;
};

export default function Header({ children }: Props) {
    return <h1 className="mt-6 mb-6 text-3xl font-bold">{children}</h1>;
}
