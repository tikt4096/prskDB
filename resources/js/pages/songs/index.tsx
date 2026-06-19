import { Link, Head } from '@inertiajs/react';
import Header from '@/components/header';

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
            <Head title="楽曲一覧" />
            <div className="m-4">
                <Link
                    href="/"
                    className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
                >
                    戻る
                </Link>
            </div>
            <Header>楽曲一覧</Header>
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
        </>
    );
}
