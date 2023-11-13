<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Belt extends Product
{
    public function __construct()
    {
        parent::__construct();
        $this->image_model =  BeltImage::class;
        $this->video_model =  BeltVideo::class;
        $this->mergeFillable(["material","sizes"]);
    }
}
