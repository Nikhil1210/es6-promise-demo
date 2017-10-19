import {SyncSquare, AsyncSquare, AsyncErrorSquare} from "./src/simplePromise";
import {GetPostsUsingCallback, Postcallback} from "./src/callbackhell";
import {GetPostsUsingPromise} from "./src/promise-against-callback";
import {ErrorPromise} from "./src/Promise-error-handling";
import { FetchExampleGET, FetchExamplePOST} from "./src/fetch-example";
/**
 * Introduction to call back hell
 */
//  GetPostsUsingCallback(Postcallback);
//  GetPostsUsingPromise();

/**
 * Siple promise example
 */
// Synchronous call
// const syncSquare = SyncSquare(5);
//     console.log(`sync call: ${syncSquare}`);
// // Async call success
// const promise = AsyncSquare(6)
//     .then((res:number) => console.log(`async call: ${res}`)) ;
// console.log(promise);
// // Async call reject
// const promiseReject = AsyncErrorSquare(6)
//     .then((res:number) => {console.log(`async call: ${res}`)}).catch((err:any) => console.error(`Inside catch: ${err}`)) ;

// Error handling in promise
// ErrorPromise()
// .then((res: any) => console.log("then for ErrorPromise()"))
// .catch((err:any) => console.log(`catch for ErrorPromise(): ${err}`))
// .then(((res:any) => AsyncSquare(3)))
// .catch((err:any) => console.log(`error inside second promise: ${err}`))
// .then((res:any) => console.log('then for AsyncSquare()'))
// .catch((err:any) => console.log(`catch for AsyncSquare(): ${err}`));
/**
 * Fetch api example
 */
//FetchExampleGET();
FetchExamplePOST();