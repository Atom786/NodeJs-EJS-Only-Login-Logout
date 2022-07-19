const mongoose = require("mongoose");
// const { async } = require("regenerator-runtime");
let _db;
const getConnect = mongoose.connect("mongodb://localhost:27017/Authentication")


const Login = mongoose.model("Login",{
    userid:{
        type:String,
         min:[4,"minimum length 4"],
         max:15
    },
    pass:{
        type:String,
    }
});
// const allLogin = async()=>{
//     try {
//         const login1 = new Login({
//             userid:"atom",
//             pass:"atom@786"
//         });
//         const login2 = new Login({
//             userid:"durgesh",
//             pass:"durgesh@786"
//         });
//         const login3 = new Login({
//             userid:"jayho",
//             pass:"jayho@786"
//         });
//         const login4 = new Login({
//             userid:"jhon",
//             pass:"jhon@786"
//         })
//         const result = await Login.insertMany([login1,login2,login3,login4]);
//     } catch (error) {
//         console.log(error);
//     }
// }allLogin();

module.exports = Login;