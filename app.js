// const amount = 12;

// if(amount<10){
//     console.log('Smaller number');
// }
// else{
//     console.log('larger number');
// }

// console.log('hey, this is my first node file....');

// console.log('hhaahahhahaha');


const express = require(‘express’);

const app = express()

app.get(’/’, function (req, res) {

console.log(req.url)

res.send(‘Hello There!’);

})

app.listen(3333)