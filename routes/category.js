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
router.get("/categorybyid/:categoryId", getCategory)  //http://localhost:3100/api/categorybyid/
router.get("/category/getallcategories/",getAllCategory); //http://localhost:3100/api/category/getallcategories
router.delete("/removecategorybyid/:categoryId",removeCategory); //http://localhost:3100/api/removecategorybyid/
router.put("/updatecategorybyid/:categoryId", updateCategory);  //http://localhost:3100/api/updatecategorybyid/

module.exports = router;
