const { readFileSync, writeFileSync } = require('fs');
// const fs = require('fs');
// fs.writeFileSync
console.log('start')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

//console.log(first, second)

writeFileSync('./content/resultSync.txt', `Here is the results: ${first}, ${second}`,
    {flag: 'a'} //append same file
)

console.log('done with this task')
console.log('starting the next one')



