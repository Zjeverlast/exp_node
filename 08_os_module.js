//OS MODULE
const os = require('os')

//info about currnt user
const user = os.userInfo()
//console.log(user);

//returns the system uptime in secs
//console.log(`The system uptime is: ${os.uptime()} seconds`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOs);
