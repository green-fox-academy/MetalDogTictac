window.onload = function() {

    //VANILLAJS METHOD
    var http = new XMLHttpRequest();

    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            console.log(JSON.parse(http.response)); //json.parse passes the string and returns it as a js object folder
        }
    }; //gonna fire every time the ready state changes

    //open method sets up the type of request, where we want to get the data from, and if its asynchronous or not (boolean)
    http.open('GET', 'data/tweets.json', true); //keep this true - asynchronous
    http.send();
    
    //JQUERY METHOD
    $.get('data/tweets.json', function(data){
        console.log(data);
    })
    console.log('test');
    

}

// READY STATES
//0 - request not initialized
//1 - request has been set up
//2 - request has been sent
//3 - request is in process
//4 - request is complete

//Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience