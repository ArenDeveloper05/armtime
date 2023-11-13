<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Belt;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;

class BeltApiController extends ProductsApiController
{
    public function __construct() {
        $this->query =  Belt::query();
        $this->columns = Schema::getColumnListing((new Belt())->getTable());
    }
}
