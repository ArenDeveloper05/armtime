<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Slider;
use Illuminate\Http\Request;

class SliderApiController extends Controller
{
    public function get_slider_images() {
        $data = Slider::all();

        return response()->json([
            "status" => true,
            "length" => count($data),
            "data" => $data,
        ]);
    }
}
