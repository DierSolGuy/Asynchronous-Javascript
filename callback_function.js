console.log('callback_function.js');

const getTodos = (callback) => {

    // Creating a Request a object
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () =>{
    // console.log(request, request.readyState);
    if(request.readyState === 4 && request.status === 200){
        callback(undefined, request.responseText);
    }
    else if(request.readyState === 4){
        callback('could not fetch data', undefined);
    }
    });

    //open('type of request we want to make', 'End point of the request we want to get the data from')
    //Sending a request to the browser
    console.log(0);
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
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