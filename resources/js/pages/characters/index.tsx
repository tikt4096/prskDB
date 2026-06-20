import Header from '@/components/header';
import { Link, Head } from '@inertiajs/react';

type Unit = {
    id: number;
    name: string;
    color: string;
};

type Detail = {
    unit: Unit;
};

type Character = {
    id: number;
    name: string;
    detail: Detail;
};

type Props = {
    characters: Character[];
};

export default function index({ characters }: Props) {
    const indexRows = [];
    let prevUnitId = -1;

    for (const character of characters) {
        if (prevUnitId != character.detail.unit.id) {
            indexRows.push({
                unit: character.detail.unit,
            });
            prevUnitId = character.detail.unit.id;
        }
        indexRows.push({
            character: character,
        });
    }

    return (
        <>
            <Head title="キャラクター一覧" />
            <div className="m-4">
                <Link
                    href="/"
                    className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
                >
                    戻る
                </Link>
            </div>
            <Header>キャラクター一覧</Header>
            <table className="table">
                <tbody>
                    {indexRows.map((row) => {
                        return 'unit' in row ? (
                            <tr>
                                <th
                                    style={{ backgroundColor: row.unit?.color }}
                                    colSpan={2}
                                >
                                    {row.unit?.name}
                                </th>
                            </tr>
                        ) : (
                            <tr>
                                <td>
                                    <Link
                                        href={`characters/${row.character.id}`}
                                        className="font-bold text-blue-500 hover:text-blue-600"
                                    >
                                        {row.character.name}
                                    </Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}
