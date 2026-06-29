const http = require("http");

const server = http.createServer((req, res) => {
    const now = new Date();

    const hour = now.getHours();
    const currentTime = now.toLocaleTimeString();

    let wish;

    if (hour < 12) {
        wish = "Good Morning Mam";
    } else if (hour < 17) {
        wish = "Good Afternoon Mam";
    } else if (hour < 21) {
        wish = "Good Evening Mam";
    } else {
        wish = "Good Night Mam";
    }

    res.writeHead(200, { "Content-Type": "text/html" });

    res.write(`<h2>Current Time: ${currentTime}</h2>`);
    res.write(`<h1>${wish}</h1>`);

    // Call res.end() only once
    res.end();
});

server.listen(11000, () => {
    console.log("Server running at http://localhost:11000");
});