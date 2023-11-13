<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    protected string $tableName = 'watches';

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
            $table->enum('type', ['quartz', 'automatic'])->nullable();
            $table->string('model_name_am',100);
            $table->string('model_name_ru',100);
            $table->string('model_name_en',100);
            $table->integer('water_resistant');
            $table->string('case_material',50);
            $table->integer('case_size');
            $table->integer('case_thickness');
            $table->string('band_material',50);
            $table->integer('weight');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('watches');
    }
};
