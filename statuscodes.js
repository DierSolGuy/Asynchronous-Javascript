console.log('statuscode.js');
// Creating a Request a object
const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () =>{
   // console.log(request, request.readyState);
   if(request.readyState === 4){
       console.log(request, request.responseText);
   }
});

//open('type of request we want to make', 'End point of the request we want to get the data from')
//Sending a request to the browser
 request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
 request.send();