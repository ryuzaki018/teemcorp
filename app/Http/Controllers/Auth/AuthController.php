<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function show()
    {
        return Inertia::render('Auth/Login');
    }

    public function loginHandler(Request $request)
    {
        // Login logic
        $credentials = $request->only('email', 'password');

        if (!Auth::attempt($credentials)) {;
            throw ValidationException::withMessages([
                'email' => __('auth.failed')
            ]);
        }

        return redirect()->intended(RouteServiceProvider::HOME);
    }

    public function logoutHandler(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
