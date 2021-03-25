const { Order, ProductCart } = require("../model/orderModel");

exports.createOrder = (req, res) => 
{
const order = new Order(req.body);

  order.save((err, orderData) => 
  {
    if (err) 
    {
      return res.status(400).json({
        error: "Failed to save your order in DB"
      });
    }
    res.json(orderData);
  });

};

// to read all order
exports.getAllOrder = (req, res) => 
{
  Order.find().exec((err, orderData) => 
  {
    if (err) {
      return res.status(400).json({
        error: "No order found"
      });
    }
    res.json(orderData);
  });
};

