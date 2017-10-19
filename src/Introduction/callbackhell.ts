
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
     httprequest(`${baseUrl}`, (res: any, err: any) =>{
       if(err){
          callback(err);
       }else{
         // fetch comments for the first post where userId=3
        const post = JSON.parse(res).filter(x=> x.userId=3);
        httprequest(`${baseUrl}/${post[0].id}/comments`, (resComments: any, err: any) =>{
          if(err){
             callback(err);
          }else{
              callback(null, resComments);
            }
        });
     }});
  }
function httprequest(url:string, callback:any) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status === 200) {
      callback(this.responseText);
    }else if(this.readyState == 4 && this.status !== 200){
      callback(null,`url - ${url}`);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}