var fs = require("fs");

// 打开一个流
var rs = fs.createReadStream("sample.txt", "utf-8");

rs.on("data", function(chunk) {
	console.log("data:");
	console.log(chunk);
});

rs.on("end", function() {
	console.log("END");
});

rs.on("error", function(err) {
	console.log("Error" + err);
});

// 写入流
var ws = fs.createWriteStream("output1.txt", "utf-8");
ws.write("使用stream写入文件\n");
ws.write("END");
ws.end();

// 使用pipe()串联流
var ws1 = fs.createWriteStream("copy.txt");
rs.pipe(ws1);