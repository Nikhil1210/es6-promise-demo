const url = `https://jsonplaceholder.typicode.com/posts`;
export function FetchExampleGET() {
    fetch(url)
       .then()
        .then((res:any) => res.json())
        .then((data) => console.log('Request succeeded with JSON response', data))
        .catch((err) => console.log('Request failed', err));
}

export function FetchExamplePOST(){
    const url = 'https://jsonplaceholder.typicode.com/posts';
// The data we are going to send in our request
let data = {
    name: 'john doe'
}
// Create our request constructor with all the parameters we need
var request = new Request(url, {
    method: 'POST', 
    body: data, 
    headers: new Headers()
});

fetch(request)
.then(function() {
    // Handle response we get from the API
})
}