export function GetPostsUsingPromise(){
    const baseUrl= `https://jsonplaceholder.typicode.com/posts`;
    httpPromiserequest(baseUrl)
    .then(JSON.parse)
    .then((post:any) => httpPromiserequest(`${baseUrl}/${post[0].id}/comments`))
    .catch((err:any) => `error: ${err}`)
    .then((comments: any) => console.log(comments));
}

function httpPromiserequest(url:string): Promise<any> {
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function() {
      if (req.status == 200) {
        resolve(req.response);
      }
      else {
        reject(Error(req.statusText));
      }
    };
    req.onerror = function() {
      reject(Error("Network Error"));
    };
    req.send();
  });
}