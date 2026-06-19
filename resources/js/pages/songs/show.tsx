import { Link, Head } from '@inertiajs/react';
import Header from '@/components/header';

type SongType = {
    name: string;
};

type Unit = {
    name: string;
};

type VocalType = {
    id: number;
    name: string;
};

type CharacterToSong = {
    id: number;
    character_id: number;
    vocal_type: VocalType;
    combination_id: number;
};

type Character = {
    id: number;
    name: string;
    characterToSongs: VocalType[];
};

type Song = {
    id: number;
    name: string;
    type: SongType;
    unit: Unit;
    difficulty_level_easy: number;
    difficulty_level_normal: number;
    difficulty_level_hard: number;
    difficulty_level_expert: number;
    difficulty_level_master: number;
    difficulty_level_append: number;
    combo_count_easy: number;
    combo_count_normal: number;
    combo_count_hard: number;
    combo_count_expert: number;
    combo_count_master: number;
    combo_count_append: number;
    release_date: string;
    characters: Character[];
    character_to_songs: CharacterToSong[];
};

type Props = {
    song: Song;
};

type SingerGroup = {
    combination_id: number;
    characters: Character[];
};

type VocalGroup = {
    vocalType: VocalType;
    singerGroups: SingerGroup[];
};

export default function show({ song }: Props) {
    const singers = song.character_to_songs.map((s) => {
        const character = song.characters.find(
            (character) => s.character_id === character.id,
        )!;

        return { ...s, character };
    });

    // 歌唱キャラクターを音源毎、同時歌唱毎にグループ分け
    const vocalGroups: VocalGroup[] = [];

    for (const singer of singers) {
        let vocalGroup = vocalGroups.find(
            (vg) => vg.vocalType.id === singer.vocal_type.id,
        );

        if (!vocalGroup) {
            vocalGroups.push({
                vocalType: singer.vocal_type,
                singerGroups: [],
            });
            vocalGroup = vocalGroups.find(
                (vg) => vg.vocalType.id === singer.vocal_type.id,
            );
        }

        let singerGroup = vocalGroup?.singerGroups.find(
            (sg) => sg.combination_id === singer.combination_id,
        );

        if (!singerGroup) {
            vocalGroup?.singerGroups.push({
                combination_id: singer.combination_id,
                characters: [],
            });
            singerGroup = vocalGroup?.singerGroups.find(
                (sg) => sg.combination_id === singer.combination_id,
            );
        }

        singerGroup?.characters.push(singer.character);
    }

    return (
        <>
            <Head title={song.name} />
            <div className="song-detail-container">
                <div className="mt-4">
                    <Link
                        href="/songs"
                        className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
                    >
                        戻る
                    </Link>
                </div>
                <Header>{song.name}</Header>
                <div className="ml-6">
                    <div>
                        楽曲種別 : <span>{song.type.name}</span>
                    </div>
                    <div>
                        担当ユニット : <span>{song.unit.name}</span>
                    </div>
                    <div>
                        配信日 :{' '}
                        <span>{song.release_date.replace(/-/g, '/')}</span>
                    </div>
                </div>
                {vocalGroups.length > 0 && (
                    <>
                        <h2 className="m-6 text-xl font-bold">歌唱</h2>
                        <table className="table">
                            <thead>
                                <tr className="bg-sky-200">
                                    <th>音源</th>
                                    <th>キャラクター</th>
                                </tr>
                            </thead>
                            <tbody>
                                {vocalGroups.map((vg) => {
                                    return vg.singerGroups.map(
                                        (singers, index) => {
                                            return (
                                                <tr>
                                                    {index === 0 ? (
                                                        <td
                                                            rowSpan={
                                                                vg.singerGroups
                                                                    .length > 1
                                                                    ? vg
                                                                          .singerGroups
                                                                          .length
                                                                    : undefined
                                                            }
                                                        >
                                                            {vg.vocalType.name}
                                                        </td>
                                                    ) : (
                                                        <></>
                                                    )}
                                                    <td>
                                                        {singers.characters
                                                            .map(
                                                                (character) =>
                                                                    character.name,
                                                            )
                                                            .join(', ')}
                                                    </td>
                                                </tr>
                                            );
                                        },
                                    );
                                })}
                            </tbody>
                        </table>
                    </>
                )}
                <h2 className="m-6 text-xl font-bold">難易度</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th className="bg-green-300">EASY</th>
                            <th className="bg-cyan-300">NORMAL</th>
                            <th className="bg-yellow-300">HARD</th>
                            <th className="bg-red-300">EXPERT</th>
                            <th className="bg-violet-300">MASTER</th>
                            <th className="bg-pink-300">APPEND</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>難易度</th>
                            <td>{song.difficulty_level_easy}</td>
                            <td>{song.difficulty_level_normal}</td>
                            <td>{song.difficulty_level_hard}</td>
                            <td>{song.difficulty_level_expert}</td>
                            <td>{song.difficulty_level_master}</td>
                            <td>{song.difficulty_level_append ?? '-'}</td>
                        </tr>
                        <tr>
                            <th>コンボ数</th>
                            <td>{song.combo_count_easy}</td>
                            <td>{song.combo_count_normal}</td>
                            <td>{song.combo_count_hard}</td>
                            <td>{song.combo_count_expert}</td>
                            <td>{song.combo_count_master}</td>
                            <td>{song.combo_count_append ?? '-'}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
