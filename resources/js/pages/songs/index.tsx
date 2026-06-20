import { Link } from '@inertiajs/react';
import PageHeader from '@/components/pageHeader';

type SongType = {
    name: string;
};

type Unit = {
    name: string;
};

type Song = {
    id: number;
    name: string;
    type: SongType;
    unit: Unit;
};

type Props = {
    songs: Song[];
};

export default function Songs({ songs }: Props) {
    return (
        <>
            <PageHeader caption="楽曲一覧">
                <Link
                    href="/"
                    className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
                >
                    戻る
                </Link>
            </PageHeader>
            <div className="m-6">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>曲名</th>
                            <th>楽曲種別</th>
                            <th>ユニット</th>
                        </tr>
                    </thead>
                    <tbody>
                        {songs.map((song) => {
                            return (
                                <tr>
                                    <td>{song.id}</td>
                                    <td>
                                        <Link
                                            href={`songs/${song.id}`}
                                            className="font-bold text-blue-500 hover:text-blue-600"
                                        >
                                            {song.name}
                                        </Link>
                                    </td>
                                    <td>{song.type.name}</td>
                                    <td>{song.unit.name}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}
