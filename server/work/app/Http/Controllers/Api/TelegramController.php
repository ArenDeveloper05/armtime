<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Notifications\Telegram;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;
use stdClass;

class TelegramController extends Controller
{
    public function send_telegram_message(Request $request) {

        $message = "";

        foreach ($request->all() as $key => $value) {
            $message .= "$key: $value,\n";
        }
        Notification::route('telegram', '1104572935')
            ->notify(new Telegram($message));


        return response()->json([
            "status" => "ok"
        ]);
    }
}
