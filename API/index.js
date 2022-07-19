
const  fs= require("fs");
const http = require("http");

const app = http.createServer((req,res)=>{
    const url = req.url;
    console.log(url);
    if (url === "/userdata") {
        fs.readFile(`${__dirname}/user_api/user.json`,"utf8",(err,data)=>{
            // console.log(data);
            let user_name;
            const data1 = JSON.parse(data);
            for(i =0; i< 100; i++){
                const user_email = data1[i].email;
                user_name = data1[i].name;
                const user_body = data1[i].body;
                   
                //    arr.push(user_email);
                   fs.appendFile("user_api/email.txt", (`${user_email}"\n"`).replace(/['"]+/g, ''),()=>{});
                   fs.appendFile("user_api/name.txt", (`${user_name}"\n"`).replace(/['"]+/g, ''),()=>{});
                   fs.appendFile("user_api/body.txt", (`${user_body}"\n"`).replace(/['"]+/g, ''),()=>{});
                //    fs.appendFile("user_api/arr.txt", `${arr}`,()=>{});
                // res.write(`<br>`);
               
            //        fs.appendFile("user_api/arr.txt",`${i}`,()=>{});
            } res.end(JSON.stringify(data1));
            
            
        });
        // res.writeHead(200, {"Content-Type":"text/html"})
        // res.write(`<center><h1 style='color:red'>Hello World</h1><center><p></p>`);
    }
    // res.writeHead(404, {"Content-Type":"text/html"});
    // 
    // res.end();
});

app.listen(2022);
