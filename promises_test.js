console.log('promises.js');

const getTodos = (resource, callback) => {

    //Network request
    // Creating a Request a object

    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () =>{
    // console.log(request, request.readyState);
    if(request.readyState === 4 && request.status === 200){
        const data=JSON.parse(request.responseText);
        
        callback(undefined, data);
    }
    else if(request.readyState === 4) {
        callback('could not fetch data', undefined);
    }
    });

    //open('type of request we want to make', 'End point of the request we want to get the data from')
    //Sending a request to the browser
    request.open('GET', resource);
    request.send();

};

// Promise Example

const getSomething = () => {
    // Inside Promise Function we either resolve the data when we get the success or
    // we reject it when we get some kind of error
    //resolve and reject are the two in-built parameter
    return new Promise((resolve, reject) => {
        // Fetch something
        resolve('Some data');
        reject('Some Error are triggered');
    });
};


// Callback function
// Two arguments are passing through the then()
// getSomething().then(() =>{}, () =>{});

getSomething()
    .then(data => console.log(data), err => console.log(err));
    
// 2nd Method of using callback function

getSomething()
    .then(data => console.log(data))
    .catch(err => console.log(err));