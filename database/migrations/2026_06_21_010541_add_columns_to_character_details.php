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
        Schema::table('character_details', function (Blueprint $table) {
            $table->string('birthday')->nullable()->after('unit_id');
            $table->integer('height')->nullable()->after('birthday');
            $table->string('color')->nullable()->after('height');
            $table->text('introduction')->nullable()->after('color');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('character_details', function (Blueprint $table) {
            $table->dropColumn('birthday');
            $table->dropColumn('height');
            $table->dropColumn('color');
            $table->dropColumn('introduction');
        });
    }
};
