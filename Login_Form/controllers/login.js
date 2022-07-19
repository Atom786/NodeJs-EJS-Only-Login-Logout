const { render } = require("ejs");
const modelLogin = require("../model/login");
const cookie = require("cookie-parser");

const getDb = require("../util/database");

exports.getLogin =(req,res,next)=>{
    // console.log(req);
    res.render('login');

    // console.log(req);
    // console.log(req);
   
    // // res.send("<h1>Login Page</h1>");
    // res.end();
}

exports.postlogin = (req,res,next)=>{
   
     const loginEmail = req.body.email;
    const loginPass = req.body.password;
    // console.log(loginEmail, loginPass);
    res.cookie("userData", loginEmail);
 modelLogin.findByEmail(loginEmail,loginPass).then((value) => {
    //  console.log(value);
    db = getDb.updateOne({_id: Object(value._id)},{$set:{pass:"rj@786"}});
    console.log(db);
    // console.log(data.userid);
    if(!value) {
      console.log("invalid User");
        res.redirect('/gotologin');
    }
    else{
       
        res.render('dash', {data:value, Cookie:req.get("Cookie")});
    //   res.redirect("/dashboard");
    }
})
}

exports.Dashboard =(req,res,next)=>{
    
    res.render('dash');
}

exports.gotologin =(req,res,next)=>{
    res.render('gotologin')
}
