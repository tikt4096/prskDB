import { Link } from '@inertiajs/react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import CommentForm from '@/components/comment-form';
import type { Comment } from '@/components/comment-list';
import CommentList from '@/components/comment-list';
import PageHeader from '@/components/pageHeader';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { CHARACTER_IDS } from '@/consts';
import type { Song } from '../songs/show';

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
    songs: Song[];
};

type Props = {
    character: Character;
    comments: Comment[];
};

export default function CharacterDetail({ character, comments }: Props) {
    const [cols, setCols] = useState(2);
    const [isSongSectionOpen, setIsSongSectionOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setCols(4);
            } else {
                setCols(2);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    let imgFileName = '';

    switch (character.id) {
        case CHARACTER_IDS.MIKU:
            imgFileName = 'miku.png';
            break;
        case CHARACTER_IDS.RIN:
            imgFileName = 'rin.png';
            break;
        case CHARACTER_IDS.LEN:
            imgFileName = 'len.png';
            break;
        case CHARACTER_IDS.LUKA:
            imgFileName = 'luka.png';
            break;
        case CHARACTER_IDS.MEIKO:
            imgFileName = 'meiko.png';
            break;
        case CHARACTER_IDS.KAITO:
            imgFileName = 'kaito.png';
            break;
        case CHARACTER_IDS.ICHIKA:
            imgFileName = 'ichika.png';
            break;
        case CHARACTER_IDS.SAKI:
            imgFileName = 'saki.png';
            break;
        case CHARACTER_IDS.HONAMI:
            imgFileName = 'honami.png';
            break;
        case CHARACTER_IDS.SHIHO:
            imgFileName = 'shiho.png';
            break;
        case CHARACTER_IDS.MINORI:
            imgFileName = 'minori.png';
            break;
        case CHARACTER_IDS.HARUKA:
            imgFileName = 'haruka.png';
            break;
        case CHARACTER_IDS.AIRI:
            imgFileName = 'airi.png';
            break;
        case CHARACTER_IDS.SHIZUKU:
            imgFileName = 'shizuku.png';
            break;
        case CHARACTER_IDS.KOHANE:
            imgFileName = 'kohane.png';
            break;
        case CHARACTER_IDS.AN:
            imgFileName = 'an.png';
            break;
        case CHARACTER_IDS.AKITO:
            imgFileName = 'akito.png';
            break;
        case CHARACTER_IDS.TOYA:
            imgFileName = 'toya.png';
            break;
        case CHARACTER_IDS.TSUKASA:
            imgFileName = 'tsukasa.png';
            break;
        case CHARACTER_IDS.EMU:
            imgFileName = 'emu.png';
            break;
        case CHARACTER_IDS.NENE:
            imgFileName = 'nene.png';
            break;
        case CHARACTER_IDS.RUI:
            imgFileName = 'rui.png';
            break;
        case CHARACTER_IDS.KANADE:
            imgFileName = 'kanade.png';
            break;
        case CHARACTER_IDS.MAFUYU:
            imgFileName = 'mafuyu.png';
            break;
        case CHARACTER_IDS.ENA:
            imgFileName = 'ena.png';
            break;
        case CHARACTER_IDS.MIZUKI:
            imgFileName = 'mizuki.png';
            break;
    }

    const songs: Song[] = [];

    // ボーカルタイプによる重複排除
    for (const song of character.songs) {
        const existence = songs.find((s) => s.name === song.name);

        if (!existence) {
            songs.push(song);
        }
    }

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
            <div className="m-6 pb-40">
                <div className="md:flex">
                    <div className="flex justify-center">
                        <img
                            className="w-60 md:w-120"
                            src={`/images/characters/${imgFileName}`}
                            alt={character.name}
                        />
                    </div>
                    <table className="table w-full md:w-300">
                        <tbody className="md:w-35 [&_th]:w-25">
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
                <h2 className="my-6 text-xl font-bold">楽曲</h2>
                <div className="flex justify-center">
                    <Button
                        className="mb-2 w-1/2 cursor-pointer rounded border border-blue-200 bg-blue-300 px-2 py-1 transition duration-300 hover:bg-blue-400 md:w-1/3"
                        onClick={() => setIsSongSectionOpen(!isSongSectionOpen)}
                    >
                        {isSongSectionOpen ? '閉じる' : '開く'}
                    </Button>
                </div>
                <motion.div
                    initial={{
                        height: 0,
                        opacity: 0,
                    }}
                    animate={{
                        height: isSongSectionOpen ? 'auto' : 0,
                        opacity: isSongSectionOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                >
                    <div className="grid grid-cols-2 border-y border-gray-400 py-5 md:grid-cols-4">
                        {songs.map((song, index) => {
                            const bg =
                                Math.floor(index / cols) % 2 === 0
                                    ? 'bg-gray-200 dark:bg-gray-500'
                                    : 'bg-white dark:bg-gray-700';

                            return (
                                <div key={index} className={`p-2 ${bg}`}>
                                    <TextLink
                                        href={`/songs/${song.id}`}
                                        className="text-blue-500 dark:text-green-500"
                                    >
                                        {song.name}
                                    </TextLink>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
                <h2 className="mt-6 mb-6 text-xl font-bold">コメント</h2>
                <CommentList
                    comments={comments}
                    relationId={character.id}
                    relationName="characters"
                />
                <h2 className="mt-6 mb-6 text-xl font-bold">コメント投稿</h2>
                <CommentForm
                    relationId={character.id}
                    relationName="characters"
                />
            </div>
        </>
    );
}
