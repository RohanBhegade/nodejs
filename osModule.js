const http = require('http');
const os = require('os');
const server = http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type':'text/html'});
    response.write("Welcome to my server");
    response.write("<br>Host name is :"+os.hostname());
    response.write("<br>Platform is :"+os.platform());
    response.write("<br>Architecture is :"+os.arch());
    response.write("<br>Free Memory is :"+os.freemem());
    response.write("<br>Total memory  is :"+os.totalmem());
    response.write("<br>Uptime is :"+os.uptime());
    response.write("<br>CPU is :"+os.version());
    response.write("<br>User name is :"+os.userInfo().username);
    response.end();
});
server.listen(12000,()=>{
    console.log("Server running at http://localhost:12000");
})