const express = require("express");
const path = require("path");
const ejs = require("ejs");
const LoginRoute = require("./controllers/login");

const app = express();
// app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set('view engine', 'ejs');
app.set('views','views');

// app.use("/",express.static(path.join(__dirname, 'public2')))

app.get('/login',LoginRoute.getLogin);
app.post("/login",LoginRoute.postlogin);
app.use('/gotologin',LoginRoute.gotologin);
app.use("/dashboard",LoginRoute.Dashboard);

app.listen(2022,()=>{
    console.log("http://localhost:2022");
});

