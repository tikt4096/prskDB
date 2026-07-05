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
        Schema::create('comments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('relation_id')->nullable();
            $table->string('relation_name')->nullable();
            $table->unsignedBigInteger('reply_id')->nullable();
            $table->text('content')->nullable();
            $table->string('name')->nullable();
            $table->dateTime('post_date')->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('reply_id')->references('id')->on('comments')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('comments');
    }
};
