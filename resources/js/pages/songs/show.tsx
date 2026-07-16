import { Link } from '@inertiajs/react';
import { motion } from 'motion/react';
import { useMemo, useState } from 'react';
import CommentForm from '@/components/comment-form';
import type { Comment } from '@/components/comment-list';
import CommentList from '@/components/comment-list';
import PageBody from '@/components/page-body';
import PageHeader from '@/components/pageHeader';
import SubTitle from '@/components/sub-title';
import { Button } from '@/components/ui/button';

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

type Creator = {
    id: number;
    name: string;
};

type CreateType = {
    id: number;
    name: string;
};

type CreatorToSong = {
    id: number;
    creator_id: number;
    create_type: CreateType;
};

type MvUrl = {
    id: number;
    url: string;
    platform: string;
    name: string;
};

export type Song = {
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
    mv_2d: boolean;
    mv_3d: boolean;
    mv_original: boolean;
    characters: Character[];
    character_to_songs: CharacterToSong[];
    creators: Creator[];
    creator_to_songs: CreatorToSong[];
    mv_urls: MvUrl[];
};

type Props = {
    song: Song;
    comments: Comment[];
};

type SingerGroup = {
    combination_id: number;
    characters: Character[];
};

type VocalGroup = {
    vocalType: VocalType;
    singerGroups: SingerGroup[];
};

export default function SongDetail({ song, comments }: Props) {
    const [isMvSectionOpen, setIsMvSectionOpen] = useState(false);

    const vocalGroupRows = useMemo(() => {
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

        return vocalGroups;
    }, [song]);

    const creatorInfos = song.creator_to_songs.map((cts) => {
        const creator = song.creators.find(
            (creator) => creator.id === cts.creator_id,
        )!;

        return { ...cts, creator };
    });

    return (
        <>
            <PageHeader caption={song.name}>
                <Link
                    href="/songs"
                    className="min-w-17 rounded bg-gray-500 px-4 py-2 text-center text-white hover:bg-gray-600"
                >
                    戻る
                </Link>
            </PageHeader>
            <PageBody>
                <SubTitle level="h2">楽曲情報</SubTitle>
                <table className="table">
                    <tbody className="[&_th]:bg-sky-200 [&_th]:text-black">
                        <tr>
                            <th>楽曲種別</th>
                            <td>{song.type.name}</td>
                        </tr>
                        {creatorInfos.map((info) => {
                            return (
                                <tr>
                                    <th>{info.create_type.name}</th>
                                    <td>{info.creator.name}</td>
                                </tr>
                            );
                        })}
                        <tr>
                            <th>担当ユニット</th>
                            <td>{song.unit.name}</td>
                        </tr>
                        <tr>
                            <th>配信日</th>
                            <td>{song.release_date.replace(/-/g, '/')}</td>
                        </tr>
                        <tr>
                            <th>2D MV</th>
                            <td>{song.mv_2d ? '○' : '×'}</td>
                        </tr>
                        <tr>
                            <th>3D MV</th>
                            <td>{song.mv_3d ? '○' : '×'}</td>
                        </tr>
                        <tr>
                            <th>オリジナルMV</th>
                            <td>{song.mv_original ? '○' : '×'}</td>
                        </tr>
                    </tbody>
                </table>
                <SubTitle level="h2">歌唱</SubTitle>
                {vocalGroupRows.length > 0 ? (
                    <>
                        <table className="table">
                            <thead>
                                <tr className="bg-sky-200 [&>th]:text-black">
                                    <th>音源</th>
                                    <th>キャラクター</th>
                                </tr>
                            </thead>
                            <tbody>
                                {vocalGroupRows.map((vg) => {
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
                ) : (
                    <div className="bg-gray-200 p-4 text-black">
                        Inst. ver. Only
                    </div>
                )}
                <SubTitle level="h2">難易度</SubTitle>
                <div className="hidden md:block">
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
                <div className="md:hidden">
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>難易度</th>
                                <th>コンボ数</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="bg-green-300">EASY</th>
                                <td>{song.difficulty_level_easy}</td>
                                <td>{song.combo_count_easy}</td>
                            </tr>
                            <tr>
                                <th className="bg-cyan-300">NORMAL</th>
                                <td>{song.difficulty_level_normal}</td>
                                <td>{song.combo_count_normal}</td>
                            </tr>
                            <tr>
                                <th className="bg-yellow-300">HARD</th>
                                <td>{song.difficulty_level_hard}</td>
                                <td>{song.combo_count_hard}</td>
                            </tr>
                            <tr>
                                <th className="bg-red-300">EXPERT</th>
                                <td>{song.difficulty_level_expert}</td>
                                <td>{song.combo_count_expert}</td>
                            </tr>
                            <tr>
                                <th className="bg-violet-300">MASTER</th>
                                <td>{song.difficulty_level_master}</td>
                                <td>{song.combo_count_master}</td>
                            </tr>
                            <tr>
                                <th className="bg-pink-300">APPEND</th>
                                <td>{song.difficulty_level_append ?? '-'}</td>
                                <td>{song.combo_count_append ?? '-'}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {song.mv_urls.length > 0 && (
                    <>
                        <SubTitle level="h2">MV</SubTitle>
                        <div className="flex justify-center">
                            <Button
                                className="mb-2 w-1/2 cursor-pointer rounded border border-blue-200 bg-blue-300 px-2 py-1 transition duration-300 hover:bg-blue-400 md:w-1/3"
                                onClick={() =>
                                    setIsMvSectionOpen(!isMvSectionOpen)
                                }
                            >
                                {isMvSectionOpen ? '閉じる' : '開く'}
                            </Button>
                        </div>
                        <motion.div
                            initial={{
                                height: 0,
                                opacity: 0,
                            }}
                            animate={{
                                height: isMvSectionOpen ? 'auto' : 0,
                                opacity: isMvSectionOpen ? 1 : 0,
                            }}
                            transition={{
                                duration: 0.3,
                            }}
                            style={{ overflow: 'hidden' }}
                        >
                            <div className="grid grid-cols-1 place-items-center gap-2 md:grid-cols-2">
                                {song.mv_urls.map((mv) => {
                                    return (
                                        <div className="mb-4">
                                            <div className="mb-2 font-bold underline underline-offset-4">
                                                {mv.name} - {mv.platform}
                                            </div>
                                            <iframe
                                                width="560"
                                                height="315"
                                                src={mv.url}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                className="max-w-full"
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </>
                )}
                <SubTitle level="h2">コメント</SubTitle>
                <CommentList
                    comments={comments}
                    relationId={song.id}
                    relationName="songs"
                />
                <SubTitle level="h2">コメント投稿</SubTitle>
                <CommentForm relationId={song.id} relationName="songs" />
            </PageBody>
        </>
    );
}
