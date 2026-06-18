<?php

namespace Database\Seeders;

use App\Models\CharacterType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CharacterTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $characterTypes = [
            ['name' => 'playable'],
            ['name' => 'unplayable']
        ];

        foreach ($characterTypes as $characterType) {
            CharacterType::create($characterType);
        }
    }
}
