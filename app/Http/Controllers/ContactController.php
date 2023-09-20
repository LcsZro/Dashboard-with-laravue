<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;
use App\Mail\ContactMail;

class ContactController extends Controller
{
    public function __invoke(ContactRequest $request)
    {   
        Mail::to('lucascerqueira.git@gmail.com')->send(new ContactMail($request->name, $request->email, $request->body));

        return redirect()->back();
    }
}
