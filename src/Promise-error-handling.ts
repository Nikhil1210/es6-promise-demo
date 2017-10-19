export function ErrorPromise(){
    return new Promise((resolve, reject) =>{
        reject("Error inside promise");
    });
}