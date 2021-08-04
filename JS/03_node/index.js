let name = process.env.NAME || 'no given name';
let web = process.env.WEB || 'empty';

console.log('Hello ' + name)
console.log('Web ' + web)


var i = 0
setInterval(function()
{
    console.log(i)
    i++
}, 1000)