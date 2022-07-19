const { ObjectId } = require("mongodb");
const getDb = require("../util/database");
let db;

    const fetchAll = ()=>{
     db = getDb.find().then((data=>{
        //  console.log(data);
        return data;
     }));
    }
// fetchAll();

const fetchById = (loginId)=>{
    db = getDb.findOne({_id: ObjectId(loginId)}).then(data=>{
        // console.log(data);
        return data;
    }).catch((err) => {
      console.log(err);  
    })
}

const findByEmail = (loginEmail,loginPass)=>{
   return db= getDb.findOne({$and:[{userid : loginEmail},{pass:loginPass}]})
    
}

// fetchById("6229ea9b1bcb9050f16fef7d");

exports.fetchAll = fetchAll;
exports.fetchById = fetchById;
exports.findByEmail = findByEmail;