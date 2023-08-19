const os = require('os')
console.log('free Memory',os.freemem());//RAM normally it will show in bytes
console.log('Total Memory',os.totalmem());//RAM normally it will show in bytes
//1kb = 1024 bytes => 1mb = 1024 kb => 1gb = 1024 mb
console.log('free Memory',os.freemem()/1024/1024/1024);//RAM in Gb 
console.log('Total Memory',os.totalmem()/1024/1024/1024);// RAM in Gb
console.log('OS Version', os.version());
console.log('CPUs', os.cpus());
console.log('Platform', os.platform());
console.log('Archtecture', os.arch());
console.log('Up Time', os.uptime());
console.log('User Info', os.userInfo());