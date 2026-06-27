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
        Schema::create('creator_to_songs', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('creator_id');
            $table->unsignedBigInteger('song_id');
            $table->unsignedBigInteger('create_type_id');
            $table->timestamps();

            $table->foreign('creator_id')->references('id')->on('creators');
            $table->foreign('song_id')->references('id')->on('songs');
            $table->foreign('create_type_id')->references('id')->on('create_types');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('creator_to_songs');
    }
};
