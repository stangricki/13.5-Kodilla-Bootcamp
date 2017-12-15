var os = require('os')
var colors = require('colors')

function getTime() {
	let uptime = Math.floor(os.uptime());
	let hours = Math.floor(uptime / 3600);
	let minutes = Math.floor((uptime - (hours * 3600)) / 60);
	uptime = uptime % 60;
	return hours + ' hours ' + minutes + ' minutes ' + uptime + ' seconds'
}

function getOSinfo() {
	var type = os.type();
	if(type === 'Darwin') {
	    type = 'OSX';
	} else if(type === 'Windows_NT') {
	    type = 'Windows';
	}

	var release = os.release();
	var cpu = os.cpus()[0].model;
	var timeInfo = getTime();
	var userInfo = os.userInfo();

	console.log(colors.grey('System:'), type);
	console.log(colors.red('Release:'), release);
	console.log(colors.magenta('CPU model:'), cpu);
	console.log(colors.green('Uptime: ~ '), getTime());
	console.log(colors.yellow('User name:'), userInfo.username);
	console.log(colors.cyan('Home dir:'), userInfo.homedir);
}

exports.print = getOSinfo;


