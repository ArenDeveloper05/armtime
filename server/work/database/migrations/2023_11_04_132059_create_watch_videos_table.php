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
        Schema::create('watch_videos', function (Blueprint $table) {
            $table->id();
            $table->string('url');
            $table->unsignedBigInteger('product_id')->unsigned();
            $table->timestamps();
            $table->foreign('product_id')->references('id')->on('watches')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('watch_videos');
    }
};
