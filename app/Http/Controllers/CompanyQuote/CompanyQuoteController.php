<?php

namespace App\Http\Controllers\CompanyQuote;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class CompanyQuoteController extends Controller
{
    //
    public function show(){
        return Inertia::render('CompanyQuote');
    }
    
    public function getCompanyQuote($stockSymbol)
    {
        $result = $this->apiService->get("/v3/quote/{$stockSymbol}");

        if(empty($result))
        {
            return Redirect::back()->withErrors(['result' => 'No results']);

        }

        return Redirect::back()->with('result', $result);
    }
}