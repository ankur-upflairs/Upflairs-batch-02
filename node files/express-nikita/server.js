const express = require("express");
const app = express();
const productRouter = require("./routes/product");
const mongoose = require("mongoose");
const session = require("express-session");
const adminRoutes = require("./routes/admin.js")

app.set("view engine", "ejs");
app.set("views", "./views");
// app.use((req,res,next)=>{
//     req.user='sunil'
//     next()
// })
app.use(
  session({
    secret: "mysecretkey",
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 2,
      path: "/",
      secure: false,
    },
  })
);

app.use("/image", express.static("uploads"));
app.use("/static", express.static("static"));
app.use(express.urlencoded({ extended: true }));

// app.get('/count',(req,res)=>{
//     if(req.session.count){
//         req.session.count++
//     }else{
//         req.session.count = 1
//     }
//     res.send('count is '+ req.session.count)
// })

app.use("/admin", adminRoutes);
app.use("/product", productRouter);

app.get("/", (req, res) => {
  res.send("Hello Nikita");
});
mongoose.connect("mongodb://127.0.0.1:27017/shop").then(() => {
  console.log("database connected");
  app.listen(3000, () => {
    console.log("Server listening on port 3000");
  });
}).catch((err) =>
    console.log(err)
);

// app.get('/product',(req,res)=>{
//     res.send('this is all product page')
// })
// app.post('/product',(req,res)=>{
//     res.send('this is to create product')
// })
// //dynamic routing =>
// app.get('/product/:id',(req,res)=>{
//     console.log(req.params.id)
//     res.send(req.params.id)
// })
// app.put('/product/:id',(req,res)=>{
//     console.log(req.params.id)
//     res.send('product with id '+ req.params.id + 'updated')
// })
// app.delete('/product/:id',(req,res)=>{
//     console.log(req.params)
//     res.send('product with id '+ req.params.id + 'deleted')
// })

// app.listen(3000, () => {
//     console.log('Server listening on port 3000')
// })
