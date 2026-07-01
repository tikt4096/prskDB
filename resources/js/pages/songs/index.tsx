import { Link, router } from '@inertiajs/react';
import { useState } from 'react';
import PageHeader from '@/components/pageHeader';
import TextLink from '@/components/text-link';
import Search from '@/components/search-form';
import { Input } from '@/components/ui/input';
import CheckBox from '@/components/checkbox';

type SongType = {
    id: number;
    name: string;
};

type Unit = {
    id: number;
    name: string;
};

type Song = {
    id: number;
    name: string;
    type: SongType;
    unit: Unit;
};

type Filters = {
    name?: string;
    unit_ids?: number[];
    song_type_ids?: number[];
};

type Props = {
    songs: Song[];
    units: Unit[];
    song_types: SongType[];
    filters: Filters;
};

type SearchConditions = {
    name: string;
    unit_ids: number[];
    song_type_ids: number[];
};

function search(conditions: SearchConditions) {
    let request = {};
    if (conditions.name) {
        request = {
            name: conditions.name,
        };
    }
    if (conditions.unit_ids.length > 0) {
        request = {
            ...request,
            unit_ids: conditions.unit_ids,
        };
    }
    if (conditions.song_type_ids.length > 0) {
        request = {
            ...request,
            song_type_ids: conditions.song_type_ids,
        };
    }
    router.get('/songs', request);
}

export default function Songs({ songs, units, song_types, filters }: Props) {
    const [keyword, setKeyword] = useState(filters?.name ?? '');
    const [unitIds, setUnitIds] = useState<number[]>(filters?.unit_ids ?? []);
    const [songTypeIds, setSongTypeIds] = useState<number[]>(
        filters?.song_type_ids ?? [],
    );

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
                <div className="flex justify-center">
                    <Search
                        onSearch={() =>
                            search({
                                name: keyword,
                                unit_ids: unitIds,
                                song_type_ids: songTypeIds,
                            })
                        }
                        onClear={() => {
                            setKeyword('');
                            setUnitIds([]);
                            setSongTypeIds([]);
                        }}
                        contentClassName="mb-5"
                        className="w-full"
                    >
                        <div className="mb-5 flex items-center justify-center">
                            <div className="mr-2 font-bold md:mr-5">曲名</div>
                            <Input
                                type="text"
                                name="song_title"
                                className="w-3/4"
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                            />
                        </div>
                        <div className="md:flex md:justify-around">
                            <div className="md:w-1/3">
                                <div className="bg-gray-300 p-2">ユニット</div>
                                {units.map((unit) => {
                                    return (
                                        <div className="my-2 flex items-center">
                                            <CheckBox
                                                key={unit.id}
                                                checked={unitIds.includes(
                                                    unit.id,
                                                )}
                                                label={unit.name}
                                                onChange={(e) => {
                                                    if (e.target.checked) {
                                                        setUnitIds((prev) => [
                                                            ...prev,
                                                            unit.id,
                                                        ]);
                                                    } else {
                                                        setUnitIds((prev) =>
                                                            prev.filter(
                                                                (id) =>
                                                                    id !==
                                                                    unit.id,
                                                            ),
                                                        );
                                                    }
                                                }}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="md:w-1/3">
                                <div className="bg-gray-300 p-2">楽曲種別</div>
                                {song_types.map((songType) => {
                                    return (
                                        <div className="my-2 flex items-center">
                                            <CheckBox
                                                key={songType.id}
                                                checked={songTypeIds.includes(
                                                    songType.id,
                                                )}
                                                label={songType.name}
                                                onChange={(e) => {
                                                    if (e.target.checked) {
                                                        setSongTypeIds(
                                                            (prev) => [
                                                                ...prev,
                                                                songType.id,
                                                            ],
                                                        );
                                                    } else {
                                                        setSongTypeIds((prev) =>
                                                            prev.filter(
                                                                (id) =>
                                                                    id !==
                                                                    songType.id,
                                                            ),
                                                        );
                                                    }
                                                }}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </Search>
                </div>
                <div className="flex justify-center">
                    {songs.length > 0 ? (
                        <div className="overflow-auto">
                            <div className="m-4">{songs.length}件ヒット</div>
                            <table className="table">
                                <thead className="[&_th]:text-sm [&_th]:md:text-base">
                                    <tr>
                                        <th>ID</th>
                                        <th>曲名</th>
                                        <th>楽曲種別</th>
                                        <th>ユニット</th>
                                    </tr>
                                </thead>
                                <tbody className="[&_td]:text-sm [&_td]:md:text-base">
                                    {songs.map((song) => {
                                        return (
                                            <tr>
                                                <td>{song.id}</td>
                                                <td>
                                                    <TextLink
                                                        href={`songs/${song.id}`}
                                                        className="text-blue-500"
                                                    >
                                                        {song.name}
                                                    </TextLink>
                                                </td>
                                                <td>{song.type.name}</td>
                                                <td>{song.unit.name}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="w-full bg-gray-300 p-5 text-center font-bold">
                            該当曲なし
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
