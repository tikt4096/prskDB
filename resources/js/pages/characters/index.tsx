import { Link } from '@inertiajs/react';
import { useMemo } from 'react';
import PageHeader from '@/components/pageHeader';

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

export default function Characters({ characters }: Props) {
    const characterDataRows = useMemo(() => {
        const rows = [];
        let prevUnitId = -1;

        for (const character of characters) {
            if (prevUnitId != character.detail.unit.id) {
                rows.push({
                    unit: character.detail.unit,
                });
                prevUnitId = character.detail.unit.id;
            }

            rows.push({
                character: character,
            });
        }

        return rows;
    }, [characters]);

    return (
        <>
            <PageHeader caption="キャラクター一覧">
                <Link
                    href="/"
                    className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
                >
                    戻る
                </Link>
            </PageHeader>
            <div className="m-6">
                <div className="grid grid-cols-6 gap-1">
                    {characterDataRows.map((row) => {
                        return 'unit' in row ? (
                            <div
                                className="col-span-6 mt-4 border border-gray-200 p-2"
                                style={{
                                    backgroundColor: row.unit?.color,
                                }}
                            >
                                {row.unit?.name}
                            </div>
                        ) : (
                            <div className="border border-gray-200 p-2">
                                <Link
                                    href={`characters/${row.character?.id}`}
                                    className="font-bold text-blue-500 hover:text-blue-600"
                                >
                                    {row.character?.name}
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
