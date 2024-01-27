<?php

namespace App\Services;

use GuzzleHttp\Client;
use App\Contracts\ApiServiceInterface;

class ApiService implements ApiServiceInterface
{
    private $client;

    private $apiKey;
    private $baseUrl;


    public function __construct(Client $client)
    {
        $this->client = $client;
        $this->apiKey = env('FINANCE_MODEL_API_KEY');
        $this->baseUrl = env('FINANCE_MODEL_API_URL');
    }

    public function get($endpoint)
    {
        // Make a GET request to the API endpoint
        $apiUrl = "{$this->baseUrl}/{$endpoint}?apikey={$this->apiKey}";
        $response = $this->client->get($apiUrl);

        // Get the response body as a string
        $data = $response->getBody()->getContents();

        // Decode JSON response if the API returns JSON
        return json_decode($data, true);
    }
}
