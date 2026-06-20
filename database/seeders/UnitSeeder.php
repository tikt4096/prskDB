<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Unit;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class UnitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Schema::disableForeignKeyConstraints();
        DB::table('units')->truncate();

        $units = [
            ['name' => 'Virtual Singer', 'color' => '#ffffff'],
            ['name' => 'Leo/need', 'color' => '#4455dd'],
            ['name' => 'MORE MORE JUMP!', 'color' => '#88dd44'],
            ['name' => 'Vivid BAD SQUAD', 'color' => '#ee1166'],
            ['name' => 'ワンダーランズ×ショウタイム', 'color' => '#ff9900'],
            ['name' => '25時、ナイトコードで。', 'color' => '#884499'],
            ['name' => 'その他', 'color' => '#808080']
        ];

        foreach ($units as $unit) {
            Unit::create($unit);
        }

        Schema::enableForeignKeyConstraints();
    }
}
