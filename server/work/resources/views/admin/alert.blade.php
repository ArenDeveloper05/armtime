@extends('layouts.app')

@section('title', 'Add Product')
@section('content')
    <div class="alert alert-danger" role="alert">
        <h1 class="text-center text-uppercase">Product Not Found!</h1>
        <div class="add_products text-secondary d-flex justify-content-center">
            <a href="{{$form_path}}" class="text-decoration-none"><h3 class="text-black text-uppercase btn-success  text-center rounded p-2">Add Product</h3></a>
        </div>
    </div>
    @endsection