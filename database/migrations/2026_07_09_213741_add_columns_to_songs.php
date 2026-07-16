<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('songs', function (Blueprint $table) {
            $table->boolean('mv_2d')->nullable()->after('release_date');
            $table->boolean('mv_3d')->nullable()->after('mv_2d');
            $table->boolean('mv_original')->nullable()->after('mv_3d');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('songs', function (Blueprint $table) {
            $table->dropColumn('mv_2d');
            $table->dropColumn('mv_3d');
            $table->dropColumn('mv_original');
        });
    }
};
