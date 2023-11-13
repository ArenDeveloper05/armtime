@extends('layouts.app')

@section('title', 'Add Product')
@section('content')
    @php

        function set_method($product) {
            return $product ? 'PUT' : 'POST';
        }
            function set_value($product,$name,$default_value = "")
            {
                if(old($name) === null) {

                return $product ? $product->{$name} : $default_value;
                } else {
                    return old($name);
                }
            }

            function set_error($error,$name)
            {
                return $error && $error[$name];
            }

    @endphp
    <div class="container mt-5">
        <h1 class="animate__animated animate__zoomInDown text-center text-secondary font-italic">{{ $product ? "UPDATE PRODUCT FORM" : "ADD PRODUCT FORM" }}</h1>
        <form
                action="{{ $product ? route('update_'.$product_type, ['id' => $product->id]) : route('store_'.$product_type) }}"
                method="POST" class="form-group mt-5"
                enctype="multipart/form-data">
            @csrf
            @method(set_method($product))
            <input type="hidden" name="product_type" value="{{$product_type}}">
            <label for="product_name_am">Product Name AM</label>
            <input value="{{set_value($product,"name_am")}}"
                   class="form-control @error('name_am') border-danger @enderror" type="text" name="name_am"
                   id="product_name_am">
            <label for="product_name_en">Product Name EN</label>
            <input value="{{set_value($product,"name_en")}}"
                   class="form-control @error('name_en') border-danger @enderror" type="text" name="name_en"
                   id="product_name_en">
            <label for="product_name_en">Product Name RU</label>
            <input value="{{set_value($product,"name_ru")}}"
                   class="form-control @error('name_ru') border-danger @enderror" type="text" name="name_ru"
                   id="product_name_ru">

            <label for="description_am">Description AM</label>
            <input value="{{set_value($product,"desc_am")}}"
                   class="form-control @error('desc_am') border-danger @enderror" type="text" name="desc_am"
                   id="description_am">
            <label for="description_en">Description EN</label>
            <input value="{{set_value($product,"desc_en")}}"
                   class="form-control @error('desc_en') border-danger @enderror" type="text" name="desc_en"
                   id="description_en">
            <label for="description_en">Description RU</label>
            <input value="{{set_value($product,"desc_ru")}}"
                   class="form-control @error('desc_ru') border-danger @enderror" type="text" name="desc_ru"
                   id="description_ru">


            <label for="price">Price</label>
            <input value="{{set_value($product,"price")}}" class="form-control @error('price') border-danger @enderror"
                   type="number" name="price" id="price">
            <label for="discounted_price">Discounted Price</label>
            <input value="{{set_value($product,"discounted_price")}}"
                   class="form-control @error('discounted_price') border-danger @enderror"
                   type="number" name="discounted_price" id="discounted_price">
            <label for="count">Count</label>
            <input value="{{set_value($product,"count")}}" class="form-control @error('count') border-danger @enderror"
                   type="number" name="count" id="count">
            <label for="color">Color</label>
            <input value="{{set_value($product,"color")}}" class="form-control @error('color') border-danger @enderror"
                   type="text" name="color" id="color">
            @if($product_type === 'belt')
                <label for="material">material</label>
                <input value="{{set_value($product,"material")}}"
                       class="form-control @error('material') border-danger @enderror"
                       type="text" name="material" id="material">
                <label for="sizes">sizes</label>
                <input value="{{set_value($product,"sizes")}}"
                       class="form-control @error('sizes') border-danger @enderror"
                       type="text" name="sizes" id="sizes">
            @endif

            @if($product_type === "watch")
                <label for="model_name_am">Model Name AM</label>
                <input value="{{set_value($product,"model_name_am")}}"
                       class="form-control @error('model_name_am') border-danger @enderror"
                       type="text" name="model_name_am" id="model_name_am">
                <label for="model_name_ru">Model Name RU</label>
                <input value="{{set_value($product,"model_name_ru")}}"
                       class="form-control @error('model_name_ru') border-danger @enderror"
                       type="text" name="model_name_ru" id="model_name_ru">
                <label for="model_name_en">Model Name EN</label>
                <input value="{{set_value($product,"model_name_en")}}"
                       class="form-control @error('model_name_en') border-danger @enderror"
                       type="text" name="model_name_en" id="model_name_en">
                <label for="water_resistant">Water Resistant</label>
                <input value="{{set_value($product,"water_resistant")}}"
                       class="form-control @error('water_resistant') border-danger @enderror"
                       type="number" name="water_resistant" id="water_resistant">
                <label for="case_material">Case Material</label>
                <input value="{{set_value($product,"case_material")}}"
                       class="form-control @error('case_material') border-danger @enderror"
                       type="text" name="case_material" id="case_material">
                <label for="case_size">Case Size</label>
                <input value="{{set_value($product,"case_size")}}"
                       class="form-control @error('case_size') border-danger @enderror"
                       type="number" name="case_size" id="case_size">
                <label for="case_thickness">Case Thickness</label>
                <input value="{{set_value($product,"case_thickness")}}"
                       class="form-control @error('case_thickness') border-danger @enderror"
                       type="number" name="case_thickness" id="case_thickness">
                <label for="band_material">Band Material</label>
                <input value="{{set_value($product,"band_material")}}"
                       class="form-control @error('band_material') border-danger @enderror"
                       type="text" name="band_material" id="band_material">
                <label for="weight">Weight</label>
                <input value="{{set_value($product,"weight")}}"
                       class="form-control @error('weight') border-danger @enderror"
                       type="number" name="weight" id="weight">
                <div style="display: flex;gap: 10px">
                    <div class="form-check">
                        <input {{ !$product || $product->type === "quartz" ? "checked" : "" }} class="form-check-input"
                               type="radio" name="type"
                               id="quartz_type_ratio" value="quartz">
                        <label class="form-check-label" for="quartz_type_ratio">
                            Quartz
                        </label>
                    </div>
                    <div class="form-check">
                        <input {{ $product?->type === "automatic" ? "checked" : "" }} class="form-check-input"
                               type="radio"
                               name="type" id="automatic_type_ratio"
                               value="automatic">
                        <label class="form-check-label" for="automatic_type_ratio">
                            Automatic
                        </label>
                    </div>
                </div>
            @else
                <div style="display: flex;gap: 10px">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="material" id="leather_material_ratio"
                               value="leather"
                                {{ !$product || $product->material === "leather" ? "checked" : "" }}>
                        <label class="form-check-label" for="leather_material_ratio">
                            Leather
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="material" id="stainless_steel_material_ratio"
                               value="stainless_steel"
                                {{ $product?->material === "stainless_steel" ? "checked" : "" }}>
                        <label class="form-check-label" for="stainless_steel_material_ratio">
                            Stainless Steel
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="material" id="nylon_material_ratio"
                               value="nylon"
                                {{ $product?->material === "nylon" ? "checked" : "" }}>
                        <label class="form-check-label" for="nylon_material_ratio">
                            Nylon
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="material" id="rubber_material_ratio"
                               value="rubber"
                                {{ $product?->material === "rubber" ? "checked" : "" }}>
                        <label class="form-check-label" for="rubber_material_ratio">
                            Rubber
                        </label>
                    </div>
                </div>
            @endif
            <div style="display: flex;gap: 10px">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="sex" id="male_sex_ratio" value="male"
                            {{ !$product || $product->sex === "male" ? "checked" : "" }}>
                    <label class="form-check-label" for="male_sex_ratio">
                        Male
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="sex" id="female_sex_ratio" value="female"
                            {{ $product?->sex === "female" ? "checked" : "" }}>
                    <label class="form-check-label" for="female_sex_ratio">
                        Female
                    </label>
                </div>
            </div>

            <div class="form-check">
                <input class="form-check-input" type="checkbox"
                       {{ $product && $product->exist ? 'checked' : ''}} name="exist"
                       id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                    Exist
                </label>
            </div>
            <br>
            <div>
                <div class="mb-4 d-flex flex-wrap" id="images_container" style="gap: 10px">
                    @if($product && $product->image)
                        @foreach($product->image as $image)
                            <div style="display: flex;flex-direction: column;background-color: #eee;justify-content: flex-end"
                                 class="product_image_block"
                            >
                                <img
                                        class="product_image"
                                        src="{{ asset("/storage$image->url") }}"
                                        alt="example placeholder"
                                        style="width: 300px;object-fit: contain"/>
                                <button type="button"
                                        class="delete_btn"
                                        style="border: none;cursor: pointer;background-color: #ff0c0c;color:#fff;">
                                    Delete
                                </button>
                            </div>
                        @endforeach
                    @endif
                </div>
                <div class="d-flex">
                    <label class="form-label text-white m-1 btn btn-primary btn-rounded"
                           for="images_field">{{ $product ? "Update Images" : "Add Images"}}</label>
                    <input
                            type="file"
                            class="form-control d-none"
                            id="images_field"
                            name="images[]"
                            multiple
                            accept="image/*"
                    />
                    <input type="hidden" class="file-hidden-input" name="deleted_images" id="deleted_images"
                           data-file-path="images">
                </div>
            </div>
            <br>
            <div>
                <div class="mb-4 d-flex flex-wrap" id="videos_container" style="gap: 10px">
                    @if($product && $product->video)
                        @foreach($product->video as $video)
                            <div style="display: flex;flex-direction: column;background-color: #eee;justify-content: flex-end"
                                 class="product_video_block">
                                <video width="320" height="240" controls class="product_file-item product_video">
                                    <source src="{{$video->url}}" type="video/mp4">
                                    Your browser does not support the video tag.
                                </video>
                                <button type="button"
                                        class="delete_btn"
                                        style="border: none;cursor: pointer;background-color: #ff0c0c;color:#fff;">
                                    Delete
                                </button>
                            </div>
                        @endforeach
                    @endif
                </div>
                <div class="d-flex">
                    <label class="form-label text-white m-1 btn btn-primary btn-rounded"
                           for="videos_field">{{ $product ? "Update Videos" : "Add Videos" }}</label>
                    <input
                            type="file"
                            class="form-control d-none"
                            id="videos_field"
                            name="videos[]"
                            multiple
                            accept="video/*"
                    />
                    <input
                            type="hidden"
                            class="file-hidden-input"
                            name="deleted_videos"
                            id="deleted_videos"
                            data-file-path="videos"
                    >
                </div>
            </div>
            <button class="bg-success rounded p-2 mt-3 hover" type="submit">
                Save Product
            </button>
        </form>
    </div>
    @vite('resources/js/media.js')
@endsection