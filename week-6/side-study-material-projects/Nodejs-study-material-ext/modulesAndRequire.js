var counter = require('./count');           //we have to require the count module from the other file in order to call counter in this file

console.log(counter(['shaun', 'crystal', 'lili']));

//from the other file copied here, we are adding module.exports so the module can be used in other files, too
var counter = function(arr) {
    return 'There are ' + arr.length + ' elements in this array';
};

module.exports = counter;