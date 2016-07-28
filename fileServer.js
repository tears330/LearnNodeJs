var fs = require("fs"),
	url = require("url"),
	path = require("path"),
	http = require("http");

// 从命令行参数获得Root目录
var root = path.resolve(process.argv[2] || '.');

console.log("Root dir:" + root);

// 创建服务器
var server = http.createServer(function(request, response) {
	// 获得URL的path
	var pathname = url.parse(request.url).pathname;
	// 获得对应的本地文件路径
	var filepath = path.join(root, pathname);
	// 获取文件状态
	fs.stat(filepath, function(err, stats) {
		if (!err && stats.isFile()) {
			console.log("200" + request.url);
			// 返回200
			response.writeHead(200);
			// 将文件流导向response
			fs.createReadStream(filepath).pipe(response);
		} else {
			console.log("404" + request.url);
			// 发送404响应
			response.writeHead(404);
			response.end("404 Not Found");
		}
	})
});

server.listen(8080);

console.log("Server is running at 8080 port.");