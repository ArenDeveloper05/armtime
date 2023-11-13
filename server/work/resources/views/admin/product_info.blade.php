@extends('layouts.app')

@section('title', 'Product')

@section('content')
    <div class="productInfo">
        <div class="productInfo__imageWrapper">
            @if($product && count($product->image))

                @foreach($product->image as $img)

                    <img src="{{ asset("/storage" . $img->url) }}" alt="" class="productInfo__image">
                @endforeach

            @else
                <img src="{{ asset('/storage/noImage.png') }}" alt="" class="productInfo__image">
            @endif
        </div>
        @if(count($product->video))
            <div class="productInfo__imageWrapper">
                @foreach($product->video as $video)

                <video width="320" height="240" controls class="productInfo__image">
                        <source src={{asset("/storage" . $video->url)}} type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                @endforeach
            </div>
        @endif
        <h3 class="productInfo__title productInfo__existText">
            @if($product->exist)
                <span style="color: #63ef63">Exist</span>
            @else
                <span style="color: #bd3b3b">Not exist</span>
            @endif
        </h3>
        <div class="productInfo__rowWrapper">
            <div class="productInfo__columnBlock">
                <p class="productInfo__subtitle">Price</p>
                <h3 class="productInfo__title">{{$product->price}}</h3>
            </div>
            <div class="productInfo__columnBlock">
                <p class="productInfo__subtitle">Count</p>
                <h3 class="productInfo__title">{{$product->count}}</h3>
            </div>
        </div>
        <div class="productInfo__rowWrapper">
            <div class="productInfo__columnBlock">
                <p class="productInfo__subtitle">Name Eng</p>
                <h3 class="productInfo__title">{{$product->name_en}}</h3>
            </div>
            <div class="productInfo__columnBlock">
                <p class="productInfo__subtitle">Name Rus</p>
                <h3 class="productInfo__title">{{$product->name_ru}}</h3>
            </div>
            <div class="productInfo__columnBlock">
                <p class="productInfo__subtitle">Name Arm</p>
                <h3 class="productInfo__title">{{$product->name_am}}</h3>
            </div>
        </div>
        <div class="productInfo__imagesContainer">
        </div>
        <div class="productInfo__rowWrapper">

            @if($product_type === "watch")
                <div class="productInfo__columnBlock">
                    <p class="productInfo__subtitle">Type</p>
                    <h3 class="productInfo__title">{{$product->type}}</h3>
                </div>
                <div class="productInfo__columnBlock">
                    <p class="productInfo__subtitle">Sex</p>
                    <h3 class="productInfo__title">{{$product->sex}}</h3>
                </div>

            @else
                <div class="productInfo__columnBlock">
                    <p class="productInfo__subtitle">Material</p>
                    <h3 class="productInfo__title">{{$product->material}}</h3>
                </div>
                <div class="productInfo__columnBlock">
                    <p class="productInfo__subtitle">Sizes</p>
                    <h3 class="productInfo__title">{{$product->sizes}}</h3>
                </div>
            @endif
            <div class="productInfo__columnBlock">
                <p class="productInfo__subtitle">Color</p>
                <h3 class="productInfo__title">{{$product->color}}</h3>
            </div>
        </div>
        <div class="productInfo__descriptionsBlock">
            <div class="productInfo__columnBlock">
                <p class="productInfo__subtitle">Description Eng</p>
                <h3 class="productInfo__title">{{$product->desc_en}}</h3>
            </div>
            <div class="productInfo__columnBlock">
                <p class="productInfo__subtitle">Description Rus</p>
                <h3 class="productInfo__title">{{$product->desc_ru}}</h3>
            </div>
            <div class="productInfo__columnBlock">
                <p class="productInfo__subtitle">Description Arm</p>
                <h3 class="productInfo__title">{{$product->desc_am}}</h3>
            </div>

            <div class="d-flex justify-content-between gap-3    ">
                <a href="{{route($product_type.'_update_form', ['id' => $product->id])}}" class="productInfo__updateBtn">Update</a>
                <a href="{{route('delete_'.$product_type, ['id' => $product->id])}}" class="productInfo__deleteBtn">Delete</a>
            </div>

        </div>
    </div>
@endsection

{{----}}