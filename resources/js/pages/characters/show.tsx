import { Head, Link } from '@inertiajs/react';
import Header from '@/components/header';

type Unit = {
    id: number;
    name: string;
};

type Gender = {
    id: number;
    name: string;
};

type Detail = {
    unit: Unit;
    gender: Gender;
};

type Character = {
    id: number;
    name: string;
    detail: Detail;
};

type Props = {
    character: Character;
};

export default function show({ character }: Props) {
    return (
        <>
            <Head title={character.name} />
            <Link
                href="/characters"
                className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
            >
                戻る
            </Link>
            <Header>{character.name}</Header>

            <table className="table">
                <tbody>
                    <tr>
                        <th>名前</th>
                        <td>{character.name}</td>
                    </tr>
                    <tr>
                        <th>性別</th>
                        <td>{character.detail.gender.name}</td>
                    </tr>
                    <tr>
                        <th>ユニット</th>
                        <td>{character.detail.unit.name}</td>
                    </tr>
                    <tr>
                        <th>紹介文</th>
                        <td>準備中</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}
