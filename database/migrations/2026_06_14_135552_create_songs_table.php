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
        Schema::create('songs', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->unsignedBigInteger('type_id');
            $table->integer('default_order');
            $table->unsignedBigInteger('unit_id');
            $table->integer('bpm');
            $table->time('duration');
            $table->integer('difficulty_level_easy')->nullable();
            $table->integer('difficulty_level_normal')->nullable();
            $table->integer('difficulty_level_hard')->nullable();
            $table->integer('difficulty_level_expert')->nullable();
            $table->integer('difficulty_level_master')->nullable();
            $table->integer('difficulty_level_append')->nullable();
            $table->integer('combo_count_easy')->nullable();
            $table->integer('combo_count_normal')->nullable();
            $table->integer('combo_count_hard')->nullable();
            $table->integer('combo_count_expert')->nullable();
            $table->integer('combo_count_master')->nullable();
            $table->integer('combo_count_append')->nullable();
            $table->date('release_date');
            $table->timestamps();

            $table->foreign('type_id')->references('id')->on('song_types');
            $table->foreign('unit_id')->references('id')->on('units');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('songs');
    }
};
