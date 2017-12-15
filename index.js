// Possible commands:
// 
// /exit - exits
// /ver - displays node version
// /lang - display language
// /sayhello - says hello! :)

var OSinfo = require('./modules/OSInfo.js');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function(){
	var input = process.stdin.read();
	if (input !== null) {
		var instruction = input.toString().trim();
		switch(instruction) {
			case '/exit':
				process.stdout.write('Quitting app!\n');
				process.exit();
				break;
			case '/lang':
				process.stdout.write(process.env.LANG + '\n');
				break;
			case '/ver':
				process.stdout.write(process.versions.node + '\n');
				break;
			case '/sayhello':
			    process.stdout.write('hello! :)\n');
			    break;
			case '/getOSinfo':
			    OSinfo.print();
			    break;
			default:
				process.stderr.write('Wrong instruction!\n');
		}
	}
})



