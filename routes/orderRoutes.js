const express = require("express");
const router = express.Router();

const {
//   getOrderById,
     createOrder,
     getAllOrder,
//   getOrderStatus,
//   updateStatus
} = require("../controller/orderController");

//Create Order
router.post("/order/create",createOrder);  //http://localhost:3100/api/order/create
//GetAllOrder
router.get("/user/getallorders/",getAllOrder); //http://localhost:3100/api/user/getallorders


module.exports = router;
