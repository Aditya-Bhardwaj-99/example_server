const http = require('http');
const fs = require('fs');

http.createServer(function(req,res){
    console.log(req.url);
    fs.readFile('./html'+req.url,(err,data)=>{//./html/hello.html
        if(err){res.write(err);}
        var datasend=data.toString();
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(datasend);
        res.end();
    })
}).listen(8000 || process.env.PORT);

/*
    [network]<-{queue,..........}
    [
        network.80<-{}
        90,
        100,

    ]
    404:- file doesn't exist/ file not found
    200:- file found
*/