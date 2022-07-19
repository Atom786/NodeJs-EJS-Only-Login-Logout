const validator = require("validator")

// console.log(validator.isEmail("okok@gmlco.lllm"));

// console.log(validator.isCreditCard("1445 4867 3259 1548"));

// console.log(validator.isCurrency("$45",{}));

// console.log(validator.isCurrency());

const nodemailer = require("nodemailer");
const { async } = require("regenerator-runtime");

async function main () {

    let testAcc = await nodemailer.createTestAccount();
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    // port:587,
    // secure: false,
    auth:{
        user: "atomrj786@gmail.com",
        pass: "At0m@703666",
    }
});

let info = await transporter.sendMail({
    from:"'from message' <atomrj786@gmail.com>",
    to: "durgeshsingh18101999@gmail.com",
    subject: "Verification",
    text:"This email is sended to you for verification OTP - 234543"
});
    console.log("Message sent: %s", info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    // info.sendMail();
}

main().catch(err=>{console.log(err);})

