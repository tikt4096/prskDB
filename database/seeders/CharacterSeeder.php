<?php

namespace Database\Seeders;

use App\Models\Character;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CharacterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Schema::disableForeignKeyConstraints();
        DB::table('characters')->truncate();

        $characters = [
            ['name' => '初音ミク', 'type_id' => 1],
            ['name' => '鏡音リン', 'type_id' => 1],
            ['name' => '鏡音レン', 'type_id' => 1],
            ['name' => '巡音ルカ', 'type_id' => 1],
            ['name' => 'MEIKO', 'type_id' => 1],
            ['name' => 'KAITO', 'type_id' => 1],
            ['name' => '星乃一歌', 'type_id' => 1],
            ['name' => '天馬咲希', 'type_id' => 1],
            ['name' => '望月穂波', 'type_id' => 1],
            ['name' => '日野森志歩', 'type_id' => 1],
            ['name' => '花里みのり', 'type_id' => 1],
            ['name' => '桐谷遥', 'type_id' => 1],
            ['name' => '桃井愛莉', 'type_id' => 1],
            ['name' => '日野森雫', 'type_id' => 1],
            ['name' => '小豆沢こはね', 'type_id' => 1],
            ['name' => '白石杏', 'type_id' => 1],
            ['name' => '東雲彰人', 'type_id' => 1],
            ['name' => '青柳冬弥', 'type_id' => 1],
            ['name' => '天馬司', 'type_id' => 1],
            ['name' => '鳳えむ', 'type_id' => 1],
            ['name' => '草薙寧々', 'type_id' => 1],
            ['name' => '神代類', 'type_id' => 1],
            ['name' => '宵崎奏', 'type_id' => 1],
            ['name' => '朝比奈まふゆ', 'type_id' => 1],
            ['name' => '東雲絵名', 'type_id' => 1],
            ['name' => '暁山瑞希', 'type_id' => 1],
        ];

        foreach ($characters as $character) {
            Character::create($character);
        }

        Schema::enableForeignKeyConstraints();
    }
}
