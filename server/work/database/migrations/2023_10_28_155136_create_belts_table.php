<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    protected string $tableName = 'belts';
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create($this->tableName, function (Blueprint $table) {
            $table->id();
            $table->string('name_am', 255);
            $table->string('name_en', 255);
            $table->string('name_ru', 255);
            $table->text('desc_am');
            $table->text('desc_en');
            $table->text('desc_ru');
            $table->integer('count');
            $table->integer('price');
            $table->integer('discounted_price');
            $table->boolean('exist')->default(0);
            $table->enum('sex', ['male','female'])->nullable();
            $table->string('color', 150);
            $table->string('material',50);
            $table->string('sizes',150);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('belts');
    }
};
