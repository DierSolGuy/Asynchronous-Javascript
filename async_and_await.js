// Async and Await
// Async and Await are not supported in older browser but do supported in modern browser.
// using Async and Await, we can put all of our section of asynchronous code into a single function and asynchronous function.
// and then use the await function to chain promises togather in a much more logical and readable way.
// async() function always returns a promise.
// async() is non-blocking function.
// JSON Method is asynchronous itself. So it returns a promise in it itself.

const getTodos = async () => {

    // Chaining of Promises
    const response = await fetch('todos/mario.json'); // Here, fetch() returns a Promise
                                                     // await keyword installs a Javascript and stops assigning the value to response variable until the promise is resolved.
                                                     // Once the Promise is resolved, then we can take the value from resolve() and assign it to response object.
    if (response.status !== 200){
        throw new Error('Cannot fetch the data');
    }
    //console.log(response);
    // Now to fetch the data, we have to use response.json(), which returns a promise itself.
    var data = await response.json();
    console.log(data);  
    return data;

}

console.log(1);
console.log(2);
getTodos()  // this section of code is non-blocking
    .then(data => console.log('Resolved Promise', data))
    .catch(err => console.log('Error Caught but data is fetched', err.message));

console.log(3);
console.log(4);


//const test = getTodos(); // As async() always returns a Promise, So test will a promise.
//console.log(test);

// fetch('todos/mario.json')
//     .then((response) => {
//         console.log('Resolved 1', response);
//         //console.log(response.json());
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log('Rejected 1', err);
//     });