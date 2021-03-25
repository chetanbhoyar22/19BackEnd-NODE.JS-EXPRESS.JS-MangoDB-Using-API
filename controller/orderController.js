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

 //to find order
  exports.getOrderbyId = (req, res, next, id) => 
   {
      Order.findById(id) 
      .exec((err, orderData) => 
          {
              if (err) {
              return res.status(400).json({
              error: "Order not found"
          });
    }

    req.order = orderData;  //global variable 

    next();
  
  });
};

//to find order byId
exports.getOrder = (req, res) => 
{
  return res.json(req.order);

};


// to remove order byuserId
   exports.removeOrder = (req, res) =>
    {
      const order = req.order;

       order.remove((err, order) => {
   if (err) {
     return res.status(400).json({
       error: "Failed to delete this order"
     });
   }
   res.json({
     message: "Successfull deleted"
   
   });
 });
};


