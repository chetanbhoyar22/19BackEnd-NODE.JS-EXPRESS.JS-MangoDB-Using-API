const express = require('express');
const router = express.Router();

const {
        getProductbyId,
        createProduct,
        getProduct,
        getAllProduct,
        removeProduct,
        updateProduct
    } = require("../controller/productController");

router.param("productId", getProductbyId); //param : parameter
router.post("/product/create/",createProduct);  //http://localhost:3100/api/product/create
router.get("/productbyid/:productId", getProduct)  //http://localhost:3100/api/productbyid/
router.get("/product/getallproducts/",getAllProduct); //http://localhost:3100/api/product/getallproducts
router.delete("/removeproductbyid/:productId",removeProduct); //http://localhost:3100/api/removeproductbyid/
router.put("/updateproductbyid/:productId", updateProduct);  //http://localhost:3100/api/updateproductbyid/

module.exports = router;
