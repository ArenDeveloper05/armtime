<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Watch;
use App\Models\WatchImage;
use App\Models\WatchVideo;
use Illuminate\Http\Request;

class WatchController extends ProductsController
{
    public function __construct() {
        parent::__construct();
        $this->product_type = "watch";
        $this->model =  Watch::query();
        $this->image_model =  WatchImage::query();
        $this->video_model =  WatchVideo::query();

        $this->mergeFillable([
            "type" => ['required',"string"],
            "model_name_am" => ['required',"string"],
            "model_name_ru" => ['required',"string"],
            "model_name_en" => ['required',"string"],
            "water_resistant" => ['required',"integer"],
            "case_material" => ['required',"string"],
            "case_size" => ['required',"integer"],
            "case_thickness" => ['required',"integer"],
            "band_material" => ['required',"string"],
            "weight" => ['required',"integer"]
        ]);
    }
}
