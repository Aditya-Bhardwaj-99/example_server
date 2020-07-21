const express = require('express');
const app = express(); //app is now a server
const bodyparser=require('body-parser'); //parse the data we get from a get or post request
const path = require('path'); //path is used for easier managing of paths of os
const ejs=require('ejs'); //view engine

app.use(bodyparser.json());// post request -> parse
app.use(bodyparser.urlencoded({ extended : true }));// get requests ->parse
app.use('/',express.static(path.join(__dirname+'/public')));//static folder

app.set('view engine','ejs');// server now knows that files will be ejs

app.get('/',(req,res)=>{
    res.render('login.ejs');
});

app.get('/second',(req,res)=>{
    console.log(req.query.myVar);
    res.render('hello.ejs',{title:req.query.myVar});
    res.end('response submitted');
});

app.post('/login',(req,res)=>{
    console.log(req);
    var user=req.body.Username;
    var pass=req.body.Password;
    if(user==='Aditya' && pass==='xyz'){
        res.end('hi there your user and password was correct');
    } else {
        res.end('wrong Username or Password');
    }
})

app.listen(3000);