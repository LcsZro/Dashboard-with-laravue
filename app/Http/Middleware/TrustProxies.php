<?php

namespace App\Http\Middleware;

use Illuminate\Http\Middleware\TrustProxies as Middleware;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Request as SymfonyRequest; 
use Illuminate\Contracts\Http\Kernel;

class TrustProxies extends Middleware
{
    /**
     * The trusted proxies for this application.
     *
     * @var string|array
     */
    protected $proxies  = '*';
    protected $headers = Request::HEADER_X_FORWARDED_ALL;
    

    /**
     * The headers that should be used to detect proxies.
     *
     * @var int
     */
}
