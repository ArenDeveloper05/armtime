<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $image_model;
    protected $video_model;
    protected $fillable = [
        "name_am",
        "name_en",
        "name_ru",
        "desc_am",
        "desc_en",
        "desc_ru",
        "count",
        "price",
        "discounted_price",
        "exist",
        "sex",
        "color",
    ];

    public function mergeFillable($additionalFillable)
    {
        $this->fillable = array_merge($this->fillable, $additionalFillable);
    }

    public function image()
    {
        return $this->hasMany($this->image_model, 'product_id', 'id');
    }

    public function video()
    {
        return $this->hasMany($this->video_model, 'product_id', 'id');
    }

}
