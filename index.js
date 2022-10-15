const nodemailer = require('nodemailer');
const body = require('body-parser');
const express = require('express');
const app = express()
app.use(bodyParser.urlencoded({ extended: true }));


const transport = nodemailer.createTransport({
    host:'127.0.0.1',
    port:'3000',
    secure: false,
    auth:{
        user:'rafael.zachesky@gmail.com',
        password:'divinooperario99',
    }
})

app.post('/example', (req, res) => {
    var mail = req.query.name;
    var message = req.query.text;
  });

transport.sendMail({})


var transporter = nodemailer.createTransport();


var mailoptions = {
    from:Username,
    to:'rafael.zachesky@gmail.com',
    subject:'Negócios',
    text:text
}

email_sent.addEventListener('click',()=>{
    transporter.sendMail(mailoptions,(err,info)=>{
        if (err) {
            console.log(err);
        }else{
            console.log("Enviado:"+info.response);
        }
    });
})

