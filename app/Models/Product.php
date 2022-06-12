<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Product;

class Product extends Model
{
    use HasFactory;
    public function favorite()
    {
        return $this->belongsTo(ProductUserFavorite::class, 'id', 'product_id');
    }
}
