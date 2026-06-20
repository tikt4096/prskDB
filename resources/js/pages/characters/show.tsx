import { Link } from '@inertiajs/react';
import PageHeader from '@/components/pageHeader';

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
    birthday: string;
    height: number;
    color: string;
    introduction: string;
};

type Character = {
    id: number;
    name: string;
    detail: Detail;
};

type Props = {
    character: Character;
};

export default function CharacterDetail({ character }: Props) {
    return (
        <>
            <PageHeader caption={character.name}>
                <Link
                    href="/characters"
                    className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
                >
                    戻る
                </Link>
            </PageHeader>
            <div className="m-6">
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
                            <th>身長</th>
                            <td>{character.detail.height}cm</td>
                        </tr>
                        <tr>
                            <th>誕生日</th>
                            <td>{character.detail.birthday}</td>
                        </tr>
                        <tr>
                            <th>イメージカラー</th>
                            <td>
                                <div className="flex items-center justify-start">
                                    <div
                                        className="mr-2 h-5 w-5"
                                        style={{
                                            backgroundColor:
                                                character.detail.color,
                                        }}
                                    ></div>
                                    {character.detail.color}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>紹介文</th>
                            <td>{character.detail.introduction}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
