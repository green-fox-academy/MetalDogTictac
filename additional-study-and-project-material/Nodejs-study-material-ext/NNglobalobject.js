//setting interval

var time = 0;

setInterval(function(){

    time += 2;
    console.log(time + ' seconds have passed')
}, 2000);

//set timeout
setTimeout(function(){

    console.log(time + '2 seconds have passed')
}, 2000);

//set interval and then clear it
var time = 0;

var timer = setInterval(function() {
    time += 2;
    console.log(time + ' seconds have passed');
    if (time > 5) {
        clearInterval(timer);
    }
}, 2000);

//node telling us where I am located, directory and file
console.log(__dirname);
console.log(__filename);