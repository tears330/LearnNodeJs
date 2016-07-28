// 异步读取文本文件
var fs = require("fs");
fs.readFile("sample.txt", "utf-8", function(err, data) {
	if (err) {
		console.log(err);
	} else {
		console.log(data);
	}
});

// 异步读取二进制文件
fs.readFile("sample.png", function(err, data) {
	if (err) {
		console.log(err);
	} else {
		console.log(data);
		console.log(data.length + 'bytes');
	}
});

// 同步读取文件
try {
	var data = fs.readFileSync("sample.txt", "utf-8");
	console.log(data);
} catch (err) {
	console.log(err);
}

// 写入文件
var str = "Hello node.js";
fs.writeFile("output.txt", str, function(err) {
	if (err) {
		console.log(err);
	} else {
		console.log("done!");
	}
});

// 同步写入文件
try {
	fs.writeFileSync("outputSync.txt", str);
} catch (err) {
	console.log(err);
} finally {
	console.log("done!");
}

// 获取文件信息
fs.stat("sample.txt", function(err, stat) {
	if (err) {
		console.log(err);
	} else {
		console.log("isFile:" + stat.isFile());
		console.log("isDirectory:" + stat.isDirectory());
		if (stat.isFile()) {
			console.log("size:" + stat.size);
			console.log("birth time:" + stat.birthtime);
			console.log("modified time:" + stat.mtime);
		}
	}
});