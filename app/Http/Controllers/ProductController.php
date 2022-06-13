<?php

namespace App\Http\Controllers;

use Auth;
use App\Models\Product;
use App\Models\ProductUserFavorite;
use App\Models\User;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function addProduct(Request $request)
    {
        $product = new Product;
        $product->name = $request->name;
        $product->description = $request->description;
        $product->price = $request->price;
        $product->category = $request->category;
        $product->save();
        return response()->json([
            "status" => "Success",
            "message" => "product added"
        ]);
    }

    public function getProducts() {
        $products = Product::all();
        return response()->json([
            "status" => "Success",
            "products" => $products
        ]);
    }

    public function favoriteThis(Request $request)
    {   
        $user = auth()->user();
        $user_id = $user->id;
        $product_id = $request->product_id;
        $favorite = new ProductUserFavorite;
        $favorite->product_id = $product_id;
        $favorite->user_id = $user_id;
        $favorite->save();
        return response()->json([
            'status'=> 'favorite added',
            'user' => $user_id,
            'product' => $product_id,
        ]);
    }

    public function myFavorites(){
        $user = auth()->user();
        $user_id = $user->id;
        $favorites = ProductUserFavorite::where('user_id', $user_id)->get();
            return response()->json([
                "status" => "Success",
                "favorites" => $favorites
            ]);
            return response()->json([
                "status" => "Failed",
                "message" => "User not logged in"
            ]);
    }
}
