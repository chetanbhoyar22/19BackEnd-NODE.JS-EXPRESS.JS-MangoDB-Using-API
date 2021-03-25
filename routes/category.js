const express = require('express')

const router = express.Router();

const {getCategorybyId} = require("../controller/category.js");
const {createCategory} = require("../controller/category.js");
const {getCategory} = require("../controller/category.js");
const {getAllCategory} = require("../controller/category.js");
const {removeCategory} = require("../controller/category.js");
const {updateCategory} = require("../controller/category.js")

router.param("categoryId", getCategorybyId); //param : parameter
router.post("/category/create/",createCategory);  //http://localhost:3100/api/category/create
router.get("/categorybyid/:categoryId", getCategory)  //http://localhost:3100/api/categorybyid/6036b25d47f35143481240f1
router.get("/category/getallcategories/",getAllCategory); //http://localhost:3100/api/category/getallcategories
router.delete("/removecategorybyid/:categoryId",removeCategory); //http://localhost:3100/api/removecategorybyid/6036a31f47f35143481240f3
router.put("/updatecategorybyid/:categoryId", updateCategory);  //http://localhost:3100/api/updatecategorybyid/6037e860a6227544a0211a96

module.exports = router;
