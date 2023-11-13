@extends('layouts.app')
@section('title', 'Products')

@section('content')
    <div class="container mt-5">
        <div class="add_products">
            <a href="{{route($product_type."_create_form")}}" class="btn btn-primary">Add Product</a>
        </div>
        <div style="display:grid;grid-template-columns: repeat(4,1fr);gap: 10px;padding: 10px 0">
            @foreach($products as $product)
                <div class="card" >
                    @if(count($product->image))
                        <img
                                class="card-img-top"
                                src="{{ asset('/storage'. $product->image->first()->url) }}"
                                alt="Card image cap"
                                style="width: 100%;aspect-ratio: 4/4;object-fit: contain;background-color: #ccc"
                        >
                    @else
                        <img
                                class="card-img-top"
                                src="{{ asset('storage/noImage.png') }}"
                                alt="Card image cap"
                                style="width: 100%;aspect-ratio: 4/4;object-fit: contain;background-color: #ccc"
                        >

                    @endif
                    <div class="card-body">
                        <h5 class="card-title">{{$product->name_en}}</h5>
                        <p class="card-text">{{$product->desc_en}}</p>
                        <a href="{{route($product_type.'_info', ['id' => $product->id])}}" class="btn btn-primary">View details</a>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
@endsection
