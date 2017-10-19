export function GetPostsUsingPromise(){
    const baseUrl= `https://jsonplaceholder.typicode.com/posts`;
    httpPromiserequest(baseUrl)
    .then((post:any) => httpPromiserequest(`${baseUrl}/${JSON.parse(post)[0].id}/comments`))
    .catch((err:any) => `error: ${err}`)
    .then((comments: any) => console.log(comments));
}

function httpPromiserequest(url:string): Promise<any> {
 return new Promise((resolve, reject) => { var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status === 200) {
      resolve(this.responseText);
    }else if(this.readyState == 4 && this.status !== 200){
      reject(this.responseText);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
});
}