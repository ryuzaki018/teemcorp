<?php

namespace App\Http\Controllers\CompanyProfile;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class CompanyProfileController extends Controller
{

    public function show(){
        return Inertia::render('CompanyProfile');
    }
    
    public function getCompanyProfile($stockSymbol)
    {

        $result = $this->apiService->get("/v3/profile/{$stockSymbol}");

        if(empty($result))
        {
            return Redirect::back()->withErrors(['result' => 'No results']);

        }

        return Redirect::back()->with('result', $result);
    }
}