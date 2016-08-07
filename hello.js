var http = require("http");

// 创建http server，并传入callback
var server = http.createServer(function(request, response) {
	console.log(request.method + ":" + request.url);
	// 写入http头
	response.writeHead(200, {
		"Content-Type": "text/html"
	});
	response.end("<div>最稀罕我大闺女！</div>");
});

// 监听8080端口
server.listen(8080);

console.log("server is running at 8080 port.");