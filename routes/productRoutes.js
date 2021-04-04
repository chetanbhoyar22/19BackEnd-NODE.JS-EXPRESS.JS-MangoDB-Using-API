const express = require('express');
const router = express.Router();

var multer  = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
      cb(null,file.originalname);
    }
  });
  var upload = multer({ storage: storage })

const {
        getProductbyId,
        createProduct,
        getProduct,
        getAllProduct,
        removeProduct,
        updateProduct
    } = require("../controller/productController");

router.param("productId", getProductbyId); //param : parameter
//router.post("/product/create/",createProduct);  //http://localhost:3100/api/product/create
router.post("/product/create",upload.single('productImage'),createProduct);
router.get("/productbyid/:productId", getProduct)  //http://localhost:3100/api/productbyid/
router.get("/product/getallproducts/",getAllProduct); //http://localhost:3100/api/product/getallproducts
router.delete("/removeproductbyid/:productId",removeProduct); //http://localhost:3100/api/removeproductbyid/
router.put("/updateproductbyid/:productId", updateProduct);  //http://localhost:3100/api/updateproductbyid/

module.exports = router;
