<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProductUserFavorite extends Model
{
    use HasFactory;
    protected $fillable = ['product_id', 'customer_id'];

    public function product(){
        return $this->belongsTo(Products::class);
    }

}
