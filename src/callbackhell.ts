
  /**
     * callback function
  */
  export function Postcallback(err? :any, success?: any){
    if(err){
    console.log(`error while fetching comments: ${err}`);
    }else{
      console.log(JSON.parse(success)[0]);
    }
  }
  export function GetPostsUsingCallback(callback){
    const baseUrl= `https://jsonplaceholder.typicode.com/posts`;
    // fetch all posts
     httpCallbackRequest(`${baseUrl}`, (res: any, err: any) =>{
       if(err){
          callback(err);
       }else{
         // fetch comments for the first post where userId=3
        const post = JSON.parse(res).filter(x=> x.userId=3);
        httpCallbackRequest(`${baseUrl}/${post[0].id}/comments`, (resComments: any, err: any) =>{
          if(err){
             callback(err);
          }else{
              callback(null, resComments);
            }
        });
     }});
  }
function httpCallbackRequest(url:string, callback:any) {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", url);
  xhttp.onload = function() {
    // even called on failure or not found
    if (xhttp.status === 200) {
      callback(xhttp.response);
    }
  };
  // request error
  xhttp.onerror= function(){
     callback(null,`url - ${url}`);
  }
  xhttp.send();
}