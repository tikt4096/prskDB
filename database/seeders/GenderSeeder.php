<?php

namespace Database\Seeders;

use App\Models\Gender;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class GenderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Schema::disableForeignKeyConstraints();
        DB::table('genders')->truncate();

        $genders = [
            ['name' => '男'],
            ['name' => '女'],
            ['name' => '不明']
        ];

        foreach ($genders as $gender) {
            Gender::create($gender);
        }

        Schema::enableForeignKeyConstraints();
    }
}
