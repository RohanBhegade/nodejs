const http = require('http');
const server = http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type':'text/html'});
    response.write("Welcome to my Server");

    var curDate = new Date();             //current date
    var bdate = new Date("2004-08-12");   //date of birth
    var year = curDate.getFullYear() - bdate.getFullYear();
    var month = curDate.getMonth() - bdate.getMonth();
    var day = curDate.getDate() - bdate.getDate();

    response.write("<br><h1>Age is "+year+"year "+month+" month "+day+" days </h1></br>");
    response.end();
});

server.listen(9000,()=>{
    console.log("Server is running on http://localhost:9000");
});


//display the current time and wish accordingly