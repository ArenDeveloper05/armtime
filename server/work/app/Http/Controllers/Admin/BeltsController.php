<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Belt;
use App\Models\BeltImage;
use App\Models\BeltVideo;
use Illuminate\Http\Request;

class BeltsController extends ProductsController
{
    public function __construct() {
        parent::__construct();
        $this->product_type = "belt";
        $this->model =  Belt::query();
        $this->image_model =  BeltImage::query();
        $this->video_model =  BeltVideo::query();
        $this->mergeFillable([
            "material" => ['required','string'],
            "sizes" => ['required','string']
        ]);
    }
}
