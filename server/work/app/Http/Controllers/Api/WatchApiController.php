<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Watch;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;

class WatchApiController extends ProductsApiController
{
    public function __construct() {
        $this->query =  Watch::query();
        $this->columns = Schema::getColumnListing((new Watch())->getTable());
    }
}
