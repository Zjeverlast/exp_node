const fs = require('fs')

fs.readFile('first.txt', 'utf8', function(err, data){
    console.log(data)
})

fs.readFile('second.txt', 'utf8', function(err, data){
    console.log(data)
})
