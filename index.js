var EventEmitter = require('events').EventEmitter;
var OSinfo = require('./modules/OSInfo.js');

var emitter = new EventEmitter();

emitter.on('beforeCommand', function(instruction) {
	console.log('You wrote: ' + instruction + ' trying to run command.');
});

emitter.on('afterCommand', function() {
	console.log('Finished command');
});

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function(){
	var input = process.stdin.read();
	if (input !== null) {
		var instruction = input.toString().trim();
		emitter.emit('beforeCommand', instruction);
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
		};
		emitter.emit('afterCommand');
	}
})



