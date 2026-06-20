<?php

namespace Database\Seeders;

use App\Models\CharacterDetail;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CharacterDetailSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Schema::disableForeignKeyConstraints();
        DB::table('character_details')->truncate();

        $characterDetails = [
            ['character_id' => 1, 'gender_id' => 2, 'unit_id' => 1, 'birthday' => '8/31', 'height' => 158, 'color' => '#33ccbb', 'introduction' => 'ブルーグリーンのツインテールが特徴的な少女バーチャル・シンガー。ハツラツとした明るく可愛い歌声で様々なジャンルの歌を歌う。バーチャル・シンガーの中でも、世代を問わず世界的に名前が知られている。'],
            ['character_id' => 2, 'gender_id' => 2, 'unit_id' => 1, 'birthday' => '12/27', 'height' => 152, 'color' => '#ffcc11', 'introduction' => '大きなリボンを着けたブロンドボブヘアが特徴的な少女バーチャル・シンガー。鏡音レンとはツイン・ボーカル。キュートで元気な見た目にぴったりな、チャーミングな歌声を持っている。'],
            ['character_id' => 3, 'gender_id' => 1, 'unit_id' => 1, 'birthday' => '12/27', 'height' => 156, 'color' => '#ffee11', 'introduction' => '短く後ろに結ばれたブロンドヘアが特徴的な少年バーチャル・シンガー。鏡音リンとはツイン・ボーカル。少年らしい芯のあるパワフルな歌声の中に感情表現の豊かさもかね備えている。'],
            ['character_id' => 4, 'gender_id' => 2, 'unit_id' => 1, 'birthday' => '1/30', 'height' => 162, 'color' => '#ffbbcc', 'introduction' => 'ピンクのロングヘアが特徴的な女性バーチャル・シンガー。落ちついた物腰によく合う柔らかい歌声を持つ一方、時には情熱的な歌声を聴かせることも。バイリンガルで、日本語と英語で歌うことができる。'],
            ['character_id' => 5, 'gender_id' => 2, 'unit_id' => 1, 'birthday' => '11/5', 'height' => 167, 'color' => '#dd4444', 'introduction' => '栗色のショートボブと、赤いショート丈のトップスとミニスカートが特徴的な女性バーチャル・シンガー。安定感のある抜群の歌唱力と、女性ならではの優しく温かみのある声質を持っている。'],
            ['character_id' => 6, 'gender_id' => 1, 'unit_id' => 1, 'birthday' => '2/17', 'height' => 175, 'color' => '#3366cc', 'introduction' => '若干外ハネしたダークブルーの髪と、青いロングマフラーの衣装が特徴的な男性バーチャル・シンガー。清涼感のある素直な歌声で、男性らしい厚みのある低音から伸びのある高音まで歌いわける。'],
            ['character_id' => 7, 'gender_id' => 2, 'unit_id' => 2, 'birthday' => '8/11', 'height' => 162, 'color' => '#33aaee', 'introduction' => 'クールに見えて、本当は友人想いの優しい少女。幼馴染みの咲希、穂波、志歩と共にLeo/needというバンドを結成し、念願のプロ入りを果たした。Leo/needではギターボーカルを担当。オリジナル楽曲の作詞も行いつつ、最近は『初音ミク』を使った作曲にも挑戦している。'],
            ['character_id' => 8, 'gender_id' => 2, 'unit_id' => 2, 'birthday' => '5/8', 'height' => 160, 'color' => '#ffdd44', 'introduction' => 'いつも明るく、笑顔を絶やさないムードメーカー。Leo/needのキーボード担当。病気がちで学校に通うこともままならなかった経験から、みんなと一緒にいることや青春を謳歌すること、そして苦しむ人の心に寄り添うことを大切にしており、楽曲制作にもその想いを生かしている。'],
            ['character_id' => 9, 'gender_id' => 2, 'unit_id' => 2, 'birthday' => '10/27', 'height' => 166, 'color' => '#ee6666', 'introduction' => '文武両道の優等生で、包み込むような優しさを持つ。Leo/needのドラム担当。人を傷つけたくないという思いから、何かを決断することに悩みがちだったが、バンド活動をとおして少しだけ決断する勇気を抱けるようになる。現在はその精神の強さでLeo/needを支えている。'],
            ['character_id' => 10, 'gender_id' => 2, 'unit_id' => 2, 'birthday' => '1/8', 'height' => 159, 'color' => '#bbdd22', 'introduction' => 'Leo/needのベース担当。音楽に対してストイックで、馴れ合いを嫌う一匹狼のため周りに誤解されることも多かったが、プロになりたいという夢に向かって共に走り、その願いを叶えてくれたLeo/needのみんなのことを、とても大切に思っている。'],
            ['character_id' => 11, 'gender_id' => 2, 'unit_id' => 3, 'birthday' => '4/14', 'height' => 159, 'color' => '#ffccaa', 'introduction' => '純粋な頑張り屋。MORE MORE JUMP！の中で唯一のアイドル未経験者だったが、多くの活動をとおしてファンにも受け入れられ、念願のワンマンライブの開催を果たした。今はドームライブができるような国民的アイドルになることを目標に活動を続けている。'],
            ['character_id' => 12, 'gender_id' => 2, 'unit_id' => 3, 'birthday' => '10/5', 'height' => 163, 'color' => '#99ccff', 'introduction' => '国民的アイドルグループ『ASRUN』に所属していた元トップアイドル。現在はMORE MORE JUMP！のワンマンライブをきっかけに、さらにアイドル活動の意欲に火がつく。そしてみのりと共に単位制へと編入し、もう一度アイドル活動に全力を注ぐことを決める。'],
            ['character_id' => 13, 'gender_id' => 2, 'unit_id' => 3, 'birthday' => '3/19', 'height' => 156, 'color' => '#ffaacc', 'introduction' => 'アイドルグループ『QT』の元メンバー。アイドルに対しての強い情熱や誇りを武器に、メンバーに活をいれる存在として活躍している。企画力やスケジュール管理能力も高く、事務所を持たないMORE MORE JUMP！に欠かせない業務も積極的にこなしている。'],
            ['character_id' => 14, 'gender_id' => 2, 'unit_id' => 3, 'birthday' => '12/6', 'height' => 168, 'color' => '#99eedd', 'introduction' => '今でも人気を博しているアイドルグループ『Cheerful＊Days』の元センター。かつてのメンバー達とうまくいかず脱退してしまったことにわだかまりを持っていたが、MORE MORE JUMP！初のテレビ出演での共演をきっかけに少しだけ和解し、前向きに進んでいる。'],
            ['character_id' => 15, 'gender_id' => 2, 'unit_id' => 4, 'birthday' => '3/2', 'height' => 156, 'color' => '#ff6699', 'introduction' => '内気な性格だったが、仲間との切磋琢磨と、伝説のイベントを行ったメンバーのひとり・大河の修行により、自分の歌に自信を持てるようになった。一度師匠の大河に打ち負かされ悔しい思いをするものの、その気持ちを胸に立ち上がり、改めて『RAD WEEKEND』を超えることを宣言する。'],
            ['character_id' => 16, 'gender_id' => 2, 'unit_id' => 4, 'birthday' => '7/26', 'height' => 160, 'color' => '#00bbdd', 'introduction' => '明るく裏表のない、WEEKEND GARAGEの看板娘。父達がおこなった伝説のイベント『RAD WEEKEND』を超えるイベントをつくるため活動している中、憧れの人物・凪の秘密を知り衝撃を受ける。しかし父から凪の想いを聞いて再起し、改めて伝説を超えることを誓う。'],
            ['character_id' => 17, 'gender_id' => 1, 'unit_id' => 4, 'birthday' => '11/12', 'height' => 176, 'color' => '#ff7722', 'introduction' => '伝説のイベント『RAD WEEKEND』を超えることを夢見て、血の滲むような練習を重ねる努力家。『RAD WEEKEND』の裏にあった秘密の重さに一度は立ち止まりそうになるものの、夢にかける強い想いで奮起し、挑み続けることを決める。'],
            ['character_id' => 18, 'gender_id' => 1, 'unit_id' => 4, 'birthday' => '5/25', 'height' => 179, 'color' => '#0077dd', 'introduction' => 'クラシックの名家に生まれた秀才。伝説のイベント『RAD WEEKEND』超えを目指し、作曲にも挑戦している。伝説の真のレベルの高さを知り圧倒されるものの、これまでの経験を胸に、仲間とともに壁を越え、その先の景色を見ることを望むようになる。'],
            ['character_id' => 19, 'gender_id' => 1, 'unit_id' => 5, 'birthday' => '5/17', 'height' => 173, 'color' => '#ffbb00', 'introduction' => '世界一のスターを目指す、ワンダーランズ×ショウタイムの座長。キャストとして様々な経験を積むなか、広い世界を見て学びを深めたいという想いを強く抱き、ついに仲間達と共にワンダーステージを飛び出し、次のステップへ踏み出すことを決める。'],
            ['character_id' => 20, 'gender_id' => 2, 'unit_id' => 5, 'birthday' => '9/9', 'height' => 152, 'color' => '#ff66bb', 'introduction' => '底抜けに明るい、天真爛漫な性格。祖父の遺したフェニックスワンダーランドを守ることが夢で、夢を追いかけるワンダーランズ×ショウタイムのみんなとはいずれ別れが来ることを覚悟していた。だが、兄達や仲間達に背中を押され、修業のため外へ足を踏み出すことを決める。'],
            ['character_id' => 21, 'gender_id' => 2, 'unit_id' => 5, 'birthday' => '7/20', 'height' => 156, 'color' => '#33dd99', 'introduction' => '世界で活躍するミュージカル俳優を目指す少女。ある公演の練習では歌への自信が折られてしまうが、それをきっかけに、歌にかける強い想いを再確認することができた。今後は仲間達と共に広い世界で、多くのことを吸収しようと意気込んでいる。'],
            ['character_id' => 22, 'gender_id' => 1, 'unit_id' => 5, 'birthday' => '6/24', 'height' => 182, 'color' => '#bb88ee', 'introduction' => 'マイペースな天才演出家。かつてはひとりでショーを行っていたが、自身の演出を受け入れてくれるワンダーランズ×ショウタイムに居場所を見出し、夢のために離れ離れにならずにすむ道を模索。結果、全員でショーを続けながら夢を追い続けるという最高のフィナーレへ導いた。'],
            ['character_id' => 23, 'gender_id' => 2, 'unit_id' => 6, 'birthday' => '2/10', 'height' => 154, 'color' => '#bb6688', 'introduction' => '『25時、ナイトコードで。』の作曲担当。自分の作った曲にまふゆが反応することが増え嬉しく思っていたが、ある時、まふゆの母親から「まふゆから離れてほしい」と要求されてしまう。しかしその言動や振る舞いに違和感を覚え、要求を跳ねのけ、まふゆと一緒にいることを選ぶ。'],
            ['character_id' => 24, 'gender_id' => 2, 'unit_id' => 6, 'birthday' => '1/27', 'height' => 162, 'color' => '#8888cc', 'introduction' => '『25時、ナイトコードで。』の作詞担当。母親に『いい子』であることを求められ続け自分を見失っていたが、音楽活動をとおしてサークルを居場所だと認識するようになる。しかしその居場所さえ奪われそうになり、ついに限界を感じ家を飛び出して奏に助けを求めた。'],
            ['character_id' => 25, 'gender_id' => 2, 'unit_id' => 6, 'birthday' => '4/30', 'height' => 158, 'color' => '#ccaa88', 'introduction' => '『25時、ナイトコードで。』のイラスト担当。絵の才能のなさに苦しみながらも努力し、酷評されても描き続ける心の強さを持つ。はっきりとした性格で、母親に意思を伝えないまふゆにイラついていたものの、出会った時からの変化は感じており、仲間として大切に見守っている。'],
            ['character_id' => 26, 'gender_id' => 3, 'unit_id' => 6, 'birthday' => '8/27', 'height' => 165, 'color' => '#ddaacc', 'introduction' => '『25時、ナイトコードで。』の動画担当。母親と関係が悪化していくまふゆのことを心配していたが、瑞希自身、自分の秘密と向きあえずにいる現状から無力感を覚えていた。だが、その経験から逃げることで得られるものがあることにも気づき、まふゆに「逃げていい」と助言する。'],
        ];

        foreach ($characterDetails as $characterDetail) {
            CharacterDetail::create($characterDetail);
        }

        Schema::enableForeignKeyConstraints();
    }
}
