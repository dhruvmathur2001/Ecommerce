const { imageUploadUtil } = require("../../helpers/cloudinary");
const Product = require("../../models/Product");

const handleImageUpload = async (req, res) => {
  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    const url = "data:" + req.file.mimetype + ";base64," + b64;
    const result = await imageUploadUtil(url);

    res.json({
      success: true,
      result,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error occured",
    });
  }
};

//add a new product
const addProduct = async (req,res) => {
  try {
    const {image,
      title,
      description,
      category,
      brand,
      price,
      salePrice,
      totalStock,
      averageReview,} = req.body;
    const newProduct = new Product({image,
      title,
      description,
      category,
      brand,
      price,
      salePrice,
      totalStock,
      averageReview,})
    await newProduct.save();
    res.status(201).json({
      success : true,
      data : newProduct
    })
     
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success : false,
      message : 'Error occurred'
    })
  }  
}

//fetch all products
const fetchAllProduct = async (req,res) => {
  try {
    const listOfProducts = await Product.find({})
    res.status(200).json({
      success : true,
      data : listOfProducts
    })
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success : false,
      message : 'Error occurred'
    })
  }  
}

//edit a product

const editProduct = async (req,res) => {
  try {
    const {id} = req.params;
    const {image,
      title,
      description,
      category,
      brand,
      price,
      salePrice,
      totalStock,
      averageReview,} = req.body;
    let findProduct = await Product.findById(id)
    if(!findProduct) return res.status(404).json({
      success : false,
      message : 'Product not found', 
    })

    findProduct.title = title || findProduct.title;
    findProduct.description = description || findProduct.description;
    findProduct.category = category || findProduct.category;
    findProduct.brand = brand || findProduct.brand;
    findProduct.price = price === "" ? 0 : price || findProduct.price;
    findProduct.salePrice = salePrice === "" ? 0 : salePrice || findProduct.salePrice;
    findProduct.totalStock = totalStock || findProduct.totalStock;
    findProduct.image = image || findProduct.image;
    findProduct.averageReview = averageReview || findProduct.averageReview;

    await findProduct.save();

    return res.status(200).json({
      success : true,
      data : findProduct, 
    })

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success : false,
      message : 'Error occurred'
    })
  }  
}
//delete a product
const deleteProduct = async (req,res) => {
  try {
    const {id} = req.params;
    const findProduct = await Product.findByIdAndDelete(id)
    if(!findProduct) return res.status(404).json({
      success : false,
      message : 'Product not found', 
    })

    return res.status(200).json({
      success : true,
      message : 'Product deleted successfully', 
    })
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success : false,
      message : 'Error occurred'
    })
  }  
}

module.exports = { handleImageUpload, addProduct, fetchAllProduct, editProduct, deleteProduct };