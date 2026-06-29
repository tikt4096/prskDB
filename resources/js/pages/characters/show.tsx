import { Link } from '@inertiajs/react';
import PageHeader from '@/components/pageHeader';
import { CHARACTER_IDS } from '@/consts';

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
                <div className="flex">
                    <div className="w-120">
                        <img
                            src={`/images/characters/${imgFileName}`}
                            alt={character.name}
                        />
                    </div>
                    <table className="table w-300">
                        <tbody className="[&_th]:w-35">
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
            </div>
        </>
    );
}
