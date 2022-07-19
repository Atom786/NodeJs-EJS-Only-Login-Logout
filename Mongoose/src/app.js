const mongoose = require("mongoose");
const { async } = require
("regenerator-runtime");
const fs = require("fs");
const { stringify } = require("querystring");

mongoose.connect("mongodb://localhost:27017/mongoosedb").then().catch(err=>{console.error(err);});


//create Schema 
const play = new mongoose.Schema({
    name: {
        type:String,
    required:true,
    uppercase:true,
    trim:true,
},
    price:{
       type: Number,
       validate(value){
       }
    },
    description:String,
    date:{
        type:Date,
        default:Date.now
    }
});

// Create Collection in db
const Playlist = new mongoose.model("Playlist1", play);
//Create Document
const CreateDocument= async ()=>
{
try {     
    const l1 = new Playlist({
    name:"Lenovo",
    price:54000,
    description:"Ok Ok Done Sucess"
})
    const l2 = new Playlist({
    name:"HP",
    price:560000,
    description:"Ok Ok Done Sucess"
})
    const l3 = new Playlist({
    name:"Acer",
    price:65000,
    description:"Ok Ok Done Sucess"
})

const result = await Playlist.insertMany([l1,l2,l3]);
console.log(`Working Correct: ${result}`);

}catch (error) {
    console.log(`Error generate: ${error}`);
}
}

// CreateDocument();

// get data

const getdoc = async()=>{
    const data = await Playlist.find({price:{$gt:54000}}).select({name:1});
     getId = data[0]._id;
    const data2 = await Playlist.findById({_id:getId})
    console.log(data);
    console.log(getId);
    console.log(data2);

   const getAllData = await Playlist.find().select({name:1}).sort({name : 1});
//    .count();
   const getData = JSON.stringify(getAllData);
   fs.writeFileSync("Detail.txt", `${getData}`);
}

getdoc();


// console.log(chalk.blue("okoko"));