
export function SyncSquare(input: number): number{
    return input* input;
}

export function AsyncSquare(input: number): Promise<number>{
    return new Promise((resolve, reject) =>{
        resolve(input * input);
    });
}

export function AsyncErrorSquare(input: number): Promise<number>{
    return new Promise((resolve, reject) =>{
        reject("Error inside promise");
    });
}
