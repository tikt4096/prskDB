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
        DB::table('characterDetails')->truncate();

        $characterDetails = [
            ['character_id' => 1, 'gender_id' => 2, 'unit_id' => 1],
            ['character_id' => 2, 'gender_id' => 2, 'unit_id' => 1],
            ['character_id' => 3, 'gender_id' => 1, 'unit_id' => 1],
            ['character_id' => 4, 'gender_id' => 2, 'unit_id' => 1],
            ['character_id' => 5, 'gender_id' => 2, 'unit_id' => 1],
            ['character_id' => 6, 'gender_id' => 1, 'unit_id' => 1],
            ['character_id' => 7, 'gender_id' => 2, 'unit_id' => 2],
            ['character_id' => 8, 'gender_id' => 2, 'unit_id' => 2],
            ['character_id' => 9, 'gender_id' => 2, 'unit_id' => 2],
            ['character_id' => 10, 'gender_id' => 2, 'unit_id' => 2],
            ['character_id' => 11, 'gender_id' => 2, 'unit_id' => 3],
            ['character_id' => 12, 'gender_id' => 2, 'unit_id' => 3],
            ['character_id' => 13, 'gender_id' => 2, 'unit_id' => 3],
            ['character_id' => 14, 'gender_id' => 2, 'unit_id' => 3],
            ['character_id' => 15, 'gender_id' => 2, 'unit_id' => 4],
            ['character_id' => 16, 'gender_id' => 2, 'unit_id' => 4],
            ['character_id' => 17, 'gender_id' => 1, 'unit_id' => 4],
            ['character_id' => 18, 'gender_id' => 1, 'unit_id' => 4],
            ['character_id' => 19, 'gender_id' => 1, 'unit_id' => 5],
            ['character_id' => 20, 'gender_id' => 2, 'unit_id' => 5],
            ['character_id' => 21, 'gender_id' => 2, 'unit_id' => 5],
            ['character_id' => 22, 'gender_id' => 1, 'unit_id' => 5],
            ['character_id' => 23, 'gender_id' => 2, 'unit_id' => 6],
            ['character_id' => 24, 'gender_id' => 2, 'unit_id' => 6],
            ['character_id' => 25, 'gender_id' => 2, 'unit_id' => 6],
            ['character_id' => 26, 'gender_id' => 3, 'unit_id' => 6],
        ];

        foreach ($characterDetails as $characterDetail) {
            CharacterDetail::create($characterDetail);
        }

        Schema::enableForeignKeyConstraints();
    }
}
