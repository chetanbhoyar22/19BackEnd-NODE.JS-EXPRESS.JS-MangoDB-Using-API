const express = require('express')
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
router.get("/productbyid/:productId", getProduct)  //http://localhost:3100/api/productbyid/603fdd22c1bf973708279d9d
router.get("/product/getallproducts/",getAllProduct); //http://localhost:3100/api/product/getallproducts
router.delete("/removeproductbyid/:productId",removeProduct); //http://localhost:3100/api/removeproductbyid/603e52314cbcaa240c90f8a2
router.put("/updateproductbyid/:productId", updateProduct);  //http://localhost:3100/api/updateproductbyid/603e72bc4cbcaa240c90f8a3

module.exports = router;
