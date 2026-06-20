<?php

namespace Database\Seeders;

use App\Models\CharacterType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CharacterTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Schema::disableForeignKeyConstraints();
        DB::table('characterTypes')->truncate();

        $characterTypes = [
            ['name' => 'playable'],
            ['name' => 'unplayable']
        ];

        foreach ($characterTypes as $characterType) {
            CharacterType::create($characterType);
        }

        Schema::enableForeignKeyConstraints();
    }
}
