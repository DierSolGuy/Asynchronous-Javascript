// Using Native fetch API, which is already inside the language.
// fetch('todos/mario.json');  --> This returns a Promise
// The Way the fetch API works is that the promise is only rejected when we log into some kind of network error
// for example:  Network Error --> rough line or we can't reach the API for some reason
// This is the way to put network request for data
// If the resource or the path of the API doesnot exist, then also fetch() doesnot throws an error or reject the promise returned by.

fetch('todos/mario.json') // 1st Promise 
    .then((response) => {
        console.log('Resolved 1', response);
        //console.log(response.json());
        return response.json(); // 2nd Promise
        
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log('Rejected 1', err);
    });

    // Three Steps of Fetch API
    // 1. Fetch the data
    // 2. Take the Response and return response.json() that returns a promise
    // 3. Fire a Function inside so that we can have a access to the data.
    // 4. Lastly, we can the error at the end.