@extends('layouts.app')
@section('title', 'Slider Images')

@section('content')
    <div class="container mt-5">
        @if(session('success') === 1)
        <div class="alert alert-success" role="alert">
                A simple success alert—check it out!
            </div>
        @elseif(session('success') == 2)
            <div class="alert alert-danger" role="alert">
                A simple success alert—check it out!
            </div>
        @endif
        <form
                action="{{route('slider_update')}}"
                method="POST"
                enctype="multipart/form-data"
        >
            @csrf
            <div class="d-flex">
                <label class="form-label text-white m-1 btn btn-primary btn-rounded"
                       for="slider_images_field">Add Images</label>
                <input
                        type="file"
                        class="form-control d-none"
                        id="slider_images_field"
                        name="images[]"
                        multiple
                        accept="image/*"
                />
                <input
                        type="hidden"
                        class="hidden-update-input"
                        name="updated_slider_images"
                        id="updated_slider_images"
                        data-file-path="slider"
                />
                <input
                        type="hidden"
                        class="file-hidden-input"
                        name="deleted_slider_images"
                        id="deleted_slider_images"
                        data-file-path="slider"
                />
            </div>
            <div class="mb-4 d-flex flex-wrap gap-3 " id="slider-images-block">
                @foreach($images as $image)
                    <div style="display: flex;flex-direction: column; background-color: #eee;justify-content: flex-end"
                         class="slider_image_block"
                    >
                        <img
                                class="product_image"
                                src="{{ asset("/storage/$image->url") }}"
                                alt="example placeholder"
                                style="width: 300px;object-fit: contain"/>
                        <input
                                type="text"
                                name="update_links[]"
                                style="border: 1px solid #0c84ff;border-radius: 8px;margin: 5px 0"
                                class="image-link-input"
                                placeholder="url"
                                value="{{$image->link}}"
                                data-value="{{$image->link}}"
                        >
                        <button type="button"
                                class="delete_btn"
                                style="border: none;cursor: pointer;background-color: #ff0c0c;color:#fff;">
                            Delete
                        </button>
                    </div>
                @endforeach
            </div>
            <button type="submit" class="btn btn-primary">Save</button>
        </form>
    </div>
    @vite(['resources/js/media.js', 'resources/js/sliderImages.js'])
@endsection