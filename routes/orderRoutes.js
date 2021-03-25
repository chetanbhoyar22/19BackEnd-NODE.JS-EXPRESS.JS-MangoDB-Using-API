const express = require("express");
const router = express.Router();



const {
//   getOrderById,
     createOrder,
//   getAllOrders,
//   getOrderStatus,
//   updateStatus
} = require("../controller/orderController");


router.post(
  "/order/create",

  createOrder
);


module.exports = router;
