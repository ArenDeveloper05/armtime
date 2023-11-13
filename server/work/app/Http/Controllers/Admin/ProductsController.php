<?php

namespace App\Http\Controllers\Admin;
require_once app_path('helpers.php');

use App\Http\Controllers\Controller;
use App\Models\Image;
use App\Models\Product;
use App\Models\Video;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use function tests\data;

class ProductsController extends Controller
{
    protected string $product_type;
    protected $model;
    protected $image_model;
    protected $video_model;
    protected array $fillable = [
        "name_am" => ['required','string'],
        "name_en" => ['required','string'],
        "name_ru" => ['required','string'],
        "desc_am" => ['required','string'],
        "desc_en" => ['required','string'],
        "desc_ru" => ['required','string'],
        "count" => ['required','integer'],
        "price" => ['required','integer'],
        "discounted_price" => ['required','integer'],
        "exist" => ['required','boolean'],
        "sex" => ['required','string'],
        "color" => ['required','string'],
    ];

    public function __construct() {
    }

    protected function mergeFillable($additionalFillable)
    {
        $this->fillable = array_merge($this->fillable, $additionalFillable);
    }

    public function show_form($product = null, $error = null)
    {
        return view('/admin.add_product', [
            'product' => $product,
            "error" => $error,
            'product_type' => $this->product_type
        ]);
    }

    public function show_create_form()
    {
        return $this->show_form();
    }

    public function show_update_form($id)
    {
        $product = $this->model->find($id);
        return $this->show_form($product);
    }

    public function show_products_list()
    {
        $form_path = route($this->product_type . '_create_form');
        $products = $this->model->get();
        if (count($products)) {
            return view('/admin.product_list', [
                "products" => $products,
                "product_type" => $this->product_type
            ]);
        } else {
            return view('/admin.alert', ['form_path' => $form_path]);
        }
    }

    public function show_product_info($id)
    {
        $product = $this->model->find($id);
        return view('/admin.product_info', [
            "product" => $product,
            "product_type" => $this->product_type
        ]);
    }

    public function validateForm($request)
    {
        $data_request = $request->only(...array_keys($this->fillable));
        $data_request['exist'] = array_key_exists('exist', $data_request);;

        $validator = Validator::make($data_request, $this->fillable);

        if ($validator->fails()) {
            return [
                "error" => $validator->messages(),
            ];
        } else {
            return $data_request;
        }
    }

    public function store(Request $request)
    {
        $data_request = $this->validateForm($request);

        if (array_key_exists('error', $data_request)) {
            return redirect()->back()->withErrors($data_request['error'])->withInput();
        }
        $product = $this->model->create($data_request);
        if (!$product) {
            return response()->json([
                "status" => false,
                "messages" => "Product not found!"
            ])->setStatusCode(404, 'Product not found');
        }
        $images = upload_file($request, "product_id",$product['id'], 'images','images');
        $videos = upload_file($request ,"product_id", $product['id'], 'videos','videos');
        if ($images) $this->image_model->insert($images);
        if ($videos) $this->video_model->insert($videos);
        return redirect()->route($this->product_type . '_list');

    }



    public function update(Request $request, $id)
    {
        $product = $this->model->find($id);
        $data_request = $this->validateForm($request);

        if (array_key_exists('error', $data_request)) {
            return redirect()->back()->withErrors($data_request['error'])->withInput();
        }

        $product->update($data_request);
        $deleted_images = $request->input('deleted_images');
        $deleted_videos = $request->input('deleted_videos');

        delete_files($deleted_images, $this->image_model);
        delete_files($deleted_videos, $this->video_model);

        $images = upload_file($request,"product_id", $product['id'], 'images','images');
        $videos = upload_file($request,"product_id", $product['id'], 'videos','videos');
        if ($images) $this->image_model->insert($images);
        if ($videos) $this->video_model->insert($videos);
        return redirect()->route($this->product_type.'_info',['id'=> $product['id']]);
    }

    public function delete($id)
    {
        $images = $this->image_model->where('product_id', $id)->get();
        $videos = $this->video_model->where('product_id', $id)->get();

        delete_files($images);
        delete_files($videos);
        $this->model->where('id', $id)->delete();

        return redirect()->route($this->product_type.'_list');

    }

}
