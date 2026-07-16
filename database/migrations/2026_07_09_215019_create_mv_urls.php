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
        Schema::create('mv_urls', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('song_id');
            $table->string('url');
            $table->string('platform');
            $table->string('name');
            $table->integer('display_order');
            $table->timestamps();

            $table->foreign('song_id')->references('id')->on('songs');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mv_urls');
    }
};
