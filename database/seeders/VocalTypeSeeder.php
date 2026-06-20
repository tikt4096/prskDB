<?php

namespace Database\Seeders;

use App\Models\VocalType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class VocalTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Schema::disableForeignKeyConstraints();
        DB::table('vocal_types')->truncate();

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

        Schema::enableForeignKeyConstraints();
    }
}
