import { Link } from '@inertiajs/react';
import PageHeader from '@/components/pageHeader';

export default function index() {
    return (
        <>
            <PageHeader
                caption="プロセカデータベース"
                noTitle={true}
            ></PageHeader>
            <div className="m-6">
                <div className="mb-6">
                    <img src="./images/logo_app.png" className="logo-img" />
                </div>
                <ul className="menu-index">
                    <li>
                        <Link
                            href="/songs"
                            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                        >
                            楽曲一覧
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/characters"
                            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                        >
                            キャラクター一覧
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}
