const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title : String,
    image : String,
    description: String,
    category: String,
    brand: String,
    price: Number,
    totalStock: Number,
    salePrice: Number,
    totalStock: Number,
    averageReview: Number,
},{timestamps:true})

module.exports = mongoose.model('Product',ProductSchema) 