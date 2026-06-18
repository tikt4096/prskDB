<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Unit;

class UnitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $units = [
            ['name' => 'Virtual Singer'],
            ['name' => 'Leo/need'],
            ['name' => 'MORE MORE JUMP!'],
            ['name' => 'Vivid BAD SQUAD'],
            ['name' => 'ワンダーランズ×ショウタイム'],
            ['name' => '25時、ナイトコードで。'],
            ['name' => 'その他']
        ];

        foreach($units as $unit){
            Unit::create($unit);
        }
    }
}
