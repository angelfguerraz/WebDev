function a_fun(name, callback) {
    setTimeout(function(){
        console.log('Async')
        callback(name);
    })
}

console.log('Start...')
a_fun("angel", function(name){
    return console.log("Hi " + name)
})