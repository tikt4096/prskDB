import { Link } from '@inertiajs/react';
import Header from '@/components/header';

export default function index() {
    return (
        <>
            <Header>プロセカデータベース</Header>
            <div className="mb-6">
                <img src="./images/logo_app.png" className="logo-img" />
            </div>
            <Link
                href="/songs"
                className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
                楽曲一覧
            </Link>
        </>
    );
}
