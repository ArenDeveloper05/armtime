<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Watch;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Validator;

class ProductsApiController extends Controller
{
    protected $query;
    protected $columns;

    public function __construct() {
    }

    public function get_all_products(Request $request)
    {

        $allowed_filters = [...array_slice($this->columns,1,count($this->columns) - 3)];


        foreach ($allowed_filters as $filter) {
            if ($request->has($filter)) {
                $name = $request->input($filter);
                $this->query->where($filter, 'like', "%$name%");
            }
        }

        if ($request->has('min_price')) {
            $minPrice = $request->input('min_price');
            $this->query->where('price', '>=', $minPrice);
        }

        if ($request->has('max_price')) {
            $maxPrice = $request->input('max_price');
            $this->query->where('price', '<=', $maxPrice);
        }

        $products = $this->query->with('image')->with('video')->get();

        return response()->json([
            "status" => true,
            "length" => count($products),
            "data" => $products,
        ]);
    }
}
