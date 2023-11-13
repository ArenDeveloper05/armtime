<?php

use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Storage;

function upload_file($request, $key,$identifier, $input,$path)
{
    $files = $request->file($input);

    if (!$files) return [];
    $file_names = [];
    foreach ($files as $file) {
        $file_name = rand(0, 1000) . "-$identifier-" . (Carbon::now()->timestamp * 1000) . "." . $file->getClientOriginalExtension();
        $item = [
            'url' => "/admin/$path/$file_name",
        ];

        $item[$key] = $identifier;

        array_push($file_names, $item);
        $file->storeAs("/public/admin/$path", $file_name); // images , videos
    }
    return $file_names;
}

function delete_files($files, $model = null)
{
    if ($files) {

        if (is_string($files)) {
            $files_arr = explode(',', $files);

            $stored_files = $model->where(function ($query) use ($files_arr) {
                foreach ($files_arr as $keyword) {
                    $query->orWhere('url', 'LIKE', '%' . $keyword . '%');
                }
            })->get();
        } else {
            $stored_files = $files;
        }

        foreach ($stored_files as $file) {
            if (Storage::disk('local')->exists("public/$file->url")) {
                Storage::disk('local')->delete("public/$file->url");
            }
        }

        if($model) $stored_files->each->delete();
    }
}
