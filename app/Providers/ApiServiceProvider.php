<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\ApiService;
use GuzzleHttp\Client;

class ApiServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind(ApiService::class, function () {
            return new ApiService(new Client());
        });
    }
}
