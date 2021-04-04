//const express = require('express') //variable created with loaded express lib
//const app = express() //store express function inside app variable
//const port = 3100 //use port from 3001 to 3100
//method=function
//app.get('/', (req, res) => res.send('Welcome To Node.js!')) // ('/' single slash: Base URL)
//app.get('/mypage', (req, res) => res.send('This is MyPage!'))
//app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`)) //console.log = To print statement inside terminal 

const mongoose = require('mongoose');
const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const port = 3100

mongoose.connect('mongodb+srv://Mdcab22:Mdcab22@cluster0.haop5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
 {useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex:true
}).then(()=> {
    console.log("DB CONNECTED")
})

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

const categoryRoutes = require("./routes/category"); //SHOP CATEGORY
const productRoutes = require("./routes/productRoutes"); //SHOP PRODUCT
const userRoutes = require("./routes/userRoutes"); //SHOP USER
const orderRoutes = require("./routes/orderRoutes"); //SHOP ORDER

app.use("/api", categoryRoutes); //SHOP CATEGORY
app.use("/api", productRoutes); //SHOP PRODUCT
app.use("/api", userRoutes);  //SHOP USER
app.use("/api", orderRoutes); //SHOP ORDER
app.use('/uploads', express.static('uploads'));

//app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
app.listen(process.env.PORT || 3000, () => console.log(`Example app listening at http://localhost:${port}`))


 