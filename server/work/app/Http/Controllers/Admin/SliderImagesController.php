<?php

namespace App\Http\Controllers\Admin;
require_once app_path('helpers.php');

use App\Http\Controllers\Controller;
use App\Models\Slider;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class SliderImagesController extends Controller
{
    public function index()
    {

        $images = Slider::all();
        return view('/admin.slider_images', ["images" => $images]);
    }
    public function update(Request $request)
    {
        //insert
        $links = $request->input('links');
        $insert_images = upload_file($request, "link", 155, 'images', 'slider');
        $images_with_links = array_map(function ($item, $index) use ($links) {
            $item['link'] = $links[$index];
            return $item;
        }, $insert_images, array_keys($insert_images));


        Slider::insert($images_with_links);

        //update
        $updated_slider_images = $request->input('updated_slider_images');
        if ($updated_slider_images) {
            $updated_slider_images_arr = array_map(function ($item) {
                return explode('--', $item);
            }, explode(',', $updated_slider_images));

            foreach ($updated_slider_images_arr as $item) {
                Slider::where('url', 'LIKE', '%' . $item[0] . '%')->update(['link' => $item[1]]);
            }
        }

        //delete
        $deleted_images = $request->input('deleted_slider_images');
        delete_files($deleted_images, Slider::query());
        return redirect()->back()->with(['success' => 1]);
    }
}
