<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Watch extends Product
{
    public function __construct()
    {
        parent::__construct();
        $this->image_model =  WatchImage::class;
        $this->video_model =  WatchVideo::class;
        $this->mergeFillable(["type","model_name_am","model_name_ru","model_name_en","water_resistant","case_material","case_size","case_thickness","band_material","weight"]);
    }
}
