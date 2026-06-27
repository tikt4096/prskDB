<?php

namespace Database\Seeders;

use App\Models\CreateType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;


class CreateTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Schema::disableForeignKeyConstraints();
        DB::table('create_types')->truncate();

        $createTypes = [
            ['code' => 'lyrics', 'name' => '作詞'],
            ['code' => 'composition', 'name' => '作曲'],
            ['code' => 'arrangement', 'name' => '編曲']
        ];

        foreach ($createTypes as $createType) {
            CreateType::create($createType);
        }

        Schema::enableForeignKeyConstraints();
    }
}
