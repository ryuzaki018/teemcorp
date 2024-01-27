<?php

namespace App\Contracts;

interface ApiServiceInterface
{
    /**
     * Make a GET request to the API.
     *
     * @param string $endpoint The API endpoint to request.
     * @return array The decoded JSON response.
     */
    public function get($endpoint);
}
