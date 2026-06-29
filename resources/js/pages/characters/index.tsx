import { Link } from '@inertiajs/react';
import { useMemo } from 'react';
import PageHeader from '@/components/pageHeader';
import { CHARACTER_IDS } from '@/consts';

type Unit = {
    id: number;
    name: string;
    color: string;
};

type Detail = {
    unit: Unit;
    color: string;
};

type Character = {
    id: number;
    name: string;
    detail: Detail;
};

type Props = {
    characters: Character[];
};

function characterIconName(id: number) {
    switch (id) {
        case CHARACTER_IDS.MIKU:
            return 'miku_icon.png';
        case CHARACTER_IDS.RIN:
            return 'rin_icon.png';
        case CHARACTER_IDS.LEN:
            return 'len_icon.png';
        case CHARACTER_IDS.LUKA:
            return 'luka_icon.png';
        case CHARACTER_IDS.MEIKO:
            return 'meiko_icon.png';
        case CHARACTER_IDS.KAITO:
            return 'kaito_icon.png';
        case CHARACTER_IDS.ICHIKA:
            return 'ichika_icon.png';
        case CHARACTER_IDS.SAKI:
            return 'saki_icon.png';
        case CHARACTER_IDS.HONAMI:
            return 'honami_icon.png';
        case CHARACTER_IDS.SHIHO:
            return 'shiho_icon.png';
        case CHARACTER_IDS.MINORI:
            return 'minori_icon.png';
        case CHARACTER_IDS.HARUKA:
            return 'haruka_icon.png';
        case CHARACTER_IDS.AIRI:
            return 'airi_icon.png';
        case CHARACTER_IDS.SHIZUKU:
            return 'shizuku_icon.png';
        case CHARACTER_IDS.KOHANE:
            return 'kohane_icon.png';
        case CHARACTER_IDS.AN:
            return 'an_icon.png';
        case CHARACTER_IDS.AKITO:
            return 'akito_icon.png';
        case CHARACTER_IDS.TOYA:
            return 'toya_icon.png';
        case CHARACTER_IDS.TSUKASA:
            return 'tsukasa_icon.png';
        case CHARACTER_IDS.EMU:
            return 'emu_icon.png';
        case CHARACTER_IDS.NENE:
            return 'nene_icon.png';
        case CHARACTER_IDS.RUI:
            return 'rui_icon.png';
        case CHARACTER_IDS.KANADE:
            return 'kanade_icon.png';
        case CHARACTER_IDS.MAFUYU:
            return 'mafuyu_icon.png';
        case CHARACTER_IDS.ENA:
            return 'ena_icon.png';
        case CHARACTER_IDS.MIZUKI:
            return 'mizuki_icon.png';
    }
}

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
                            <Link href={`characters/${row.character.id}`}>
                                <div
                                    className={`flex flex-col items-center border border-gray-200 p-2 transition-colors duration-300 hover:bg-[var(--hover-color)]`}
                                    style={
                                        {
                                            '--hover-color':
                                                row.character.detail.color,
                                        } as React.CSSProperties
                                    }
                                >
                                    <img
                                        className="w-20"
                                        src={`/images/character_icons/${characterIconName(row.character.id)}`}
                                        alt={row.character.name}
                                    />
                                    <div>{row.character?.name}</div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
