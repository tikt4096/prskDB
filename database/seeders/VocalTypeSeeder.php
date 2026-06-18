<?php

namespace Database\Seeders;

use App\Models\VocalType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class VocalTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $vocalTypes = [
            ['name' => 'バーチャルシンガー'],
            ['name' => 'セカイ'],
            ['name' => 'アナザー'],
            ['name' => 'コネクトライブ'],
            ['name' => 'その他']
        ];

        foreach ($vocalTypes as $vocalType) {
            VocalType::create($vocalType);
        }
    }
}
