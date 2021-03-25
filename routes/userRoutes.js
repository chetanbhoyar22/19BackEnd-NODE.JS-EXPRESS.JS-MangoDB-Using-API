var express = require("express");
var router = express.Router();
const { check } = require("express-validator");
const { register,getAllUser,getUserbyId,getUser,removeUser,updateUser,login } = require("../controller/userController");

//Register User
router.post("/registeruser",    //http://localhost:3100/api/registeruser
[
    check("name", "Name should be at least 3 char").isLength({ min: 3 }), // form validation
    check("email", "Your entered wrong email ").isEmail(),  // check  email validation
    check("password", "Password should be at least 3 char").isLength({ min: 3 }),  // check  password validation
    check("mobile", "Mobile should be 10 digit").isLength({ min: 10 }), // check  mobile validation
    check("address", "Address should be at least 5 char").isLength({ min: 5 }), // check  address validation
],
  register
);
//GetAllUser
router.get("/user/getallusers/",getAllUser); //http://localhost:3100/api/user/getallusers
router.param("userId", getUserbyId); //param : parameter
//Find UserById
router.get("/userbyid/:userId", getUser)  //http://localhost:3100/api/userbyid/604134cf8a203e171095b555
//Remove User
router.delete("/removeuserbyid/:userId",removeUser); //http://localhost:3100/api/removeuserbyid/604134cf8a203e171095b555
//Update User 
router.put("/updateuserbyid/:userId", updateUser); //http://localhost:3100/api/updateuserbyid/60525582c4ccdf47bc003749
//Login User
router.post("/login",         //http://localhost:3100/api/login
  [
    check("email", "Email is required").isEmail(),
    check("password", "Password is required").isLength({ min: 3 })
  ],
  login
);

module.exports = router;
