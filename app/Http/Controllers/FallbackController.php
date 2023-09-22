<?php
  
namespace App\Http\Controllers;
  
use Illuminate\Http\Request;
  
class FallbackController extends Controller
{   
    /**
     * Write code on Method
     *
     * @return response()
     */
    public function __invoke()
    {
        return view('fallback');
    }
}