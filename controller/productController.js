const Product = require("../model/productModel");
// const formidable = require("formidable");
// const _ = require("lodash");
// const fs = require("fs");
   
  // to create product
  exports.createProduct = (req, res) => 
  {
    const product = new Product(req.body);
    product.photo = req.file.path; 
 
  product.save((err, product) => 
  {
    if (err) 
    {
      if(err.code === 11000 || err.code === 11001)
      {
        return res.status(400).json({
          error: "Duplicate value " +req.body.name +", product name must be unique",
         
        });
      }
      else
      {
        return res.status(400).json({
          error: "Not able to save product",
          message : err
         
        });
      }
      }
    res.json({product});
  });
};
  

  // to read all product
  exports.getAllProduct = (req, res) => 
  {
    
    Product.find().exec((err, productData) => 
    {
      if (err) {
        return res.status(400).json({
          error: "No products found"
        });
      }

      res.json(productData);
    });
  };

    //to read product
    exports.getProductbyId = (req, res, next, id) => 
     {
        Product.findById(id)
        .populate("category")   // get foregin key data 
        .exec((err, productData) => 
            {
                if (err) {
                return res.status(400).json({
                error: "Product not found"
            });
      }

      req.product = productData;  //global variable 
      next();
    
    });
  };

  //to read product byId
  exports.getProduct = (req, res) => 
{
    return res.json(req.product);
};

//to remove product byproductId
  exports.removeProduct = (req, res) =>
   {
    const product = req.product;
  
    product.remove((err, product) => {
      if (err) {
        return res.status(400).json({
          error: "Failed to delete this product"
        });
      }
      res.json({
        message: "Successfull deleted"
      
      });
    });
  };

  //to update product
 exports.updateProduct = (req, res) => 
 {
    const product = req.product;
    product.name = req.body.name;
    product.description = req.body.description;
    product.price = req.body.price;
    product.category = req.body.category;
    product.stock = req.body.stock;
    product.sold = req.body.sold;
    product.photo = req.body.photo;
 
       product.save((err, updatedProduct) => {
         if(err) {
           return res.status(400).json({
             error: "Failed to update product"
           });
         }
         res.json(updatedProduct);
       });
    };