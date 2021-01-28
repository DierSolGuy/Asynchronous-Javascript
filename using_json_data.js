console.log('using_json.js');

const getTodos = (callback) => {

    // Creating a Request a object
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () =>{
    // console.log(request, request.readyState);
    if(request.readyState === 4 && request.status === 200){
        const data = JSON.parse(request.responseText);
        callback(undefined, data);
    }
    else if(request.readyState === 4){
        callback('could not fetch data', undefined);
    }
    });

    //open('type of request we want to make', 'End point of the request we want to get the data from')
    //Sending a request to the browser
    request.open('GET', 'todos.json');
    request.send();

};

console.log(1);
console.log(2);

getTodos((err, data) => {
    console.log('Callback is fired');
    console.log(err, data);

    //another process
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});

console.log(3);
console.log(4);