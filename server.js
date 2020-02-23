var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);


io.on('connection',(socket)=>{
    console.log("Connect user!");

    socket.on("bodychange",()=>{
        console.log("Kullanıcı socket tetikledi!!");
        io.emit("clientchange");
    })
});


http.listen(3000)