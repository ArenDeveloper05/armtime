<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Spatie\Permission\Traits\HasRoles;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            // Authentication passed
            $user = Auth::user();
            $token = $user->createToken("AdminAccessToken")->plainTextToken;

            return response()->json([
                'user' => $user,
                'access_token' => $token,
            ]);
        }

        // Authentication failed
        return response()->json(['message' => 'Invalid credentials'], 401);
    }

    public function register(Request $request)
    {
        $request_data = $request->only('name', 'email', 'password',"role");
        $validator = Validator::make($request_data, [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|min:8',
        ]);

        if ($validator->fails()) {
            return response()->json([
                "status" => false,
                "message" => $validator->messages()
            ])->setStatusCode(522);
        }

        // Create a new user record
        $user = User::create([
            'name' => $request_data['name'],
            'email' => $request_data['email'],
            'password' => bcrypt($request_data['password']),
        ]);

        $user->assignRole($request_data['role']);

        return response()->json(['message' => 'User registered successfully'], 201);
    }

}
