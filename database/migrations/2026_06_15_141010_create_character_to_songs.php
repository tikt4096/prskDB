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
        Schema::create('character_to_songs', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('song_id');
            $table->unsignedBigInteger('character_id');
            $table->unsignedBigInteger('vocal_type_id');
            $table->integer('combination_id');
            $table->string('annotation');
            $table->timestamps();

            $table->foreign('song_id')->references('id')->on('songs');
            $table->foreign('character_id')->references('id')->on('characters');
            $table->foreign('vocal_type_id')->references('id')->on('vocal_types');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('character_to_songs');
    }
};
