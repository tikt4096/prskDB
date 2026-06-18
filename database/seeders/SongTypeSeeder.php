<?php

namespace Database\Seeders;

use App\Models\SongType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SongTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $songTypes = [
            ['name' => '既存曲'],
            ['name' => '書き下ろし曲'],
            ['name' => '公募曲']
        ];

        foreach ($songTypes as $songType) {
            SongType::create($songType);
        }
    }
}
