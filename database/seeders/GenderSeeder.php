<?php

namespace Database\Seeders;

use App\Models\Gender;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GenderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $genders = [
            ['name' => '男'],
            ['name' => '女'],
            ['name' => '不明']
        ];

        foreach ($genders as $gender) {
            Gender::create($gender);
        }
    }
}
