@extends('layouts.app')
@section('title', 'Home')

@section('content')
    <div class="container mt-5">
        <a href="{{route('watch_list')}}" class="btn btn-primary">Watches</a>
        <a href="{{route('belt_list')}}" class="btn btn-primary">Belts</a>
        <a href="{{route('slider')}}" class="btn btn-primary">Slider</a>
    </div>
@endsection
