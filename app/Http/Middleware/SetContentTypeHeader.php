<?php

namespace App\Http\Middleware;

use Closure;

class SetContentTypeHeader
{
    public function handle($request, Closure $next)
    {
        $response = $next($request);

        // Verifique a extensão do arquivo e defina o Content-Type apropriado
        if (str_ends_with($request->path(), '.css')) {
            $response->header('Content-Type', 'text/css');
        } elseif (str_ends_with($request->path(), '.js')) {
            $response->header('Content-Type', 'application/javascript');
        }

        return $response;
    }
}
