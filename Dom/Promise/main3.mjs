import fetch from "node-fetch";

// async function foo(){
//     const a = await new Promise(resolve => setTimeout(() => resolve(1), 3000));
//     const b = await new Promise(resolve => setTimeout(() => resolve(2), 2000));
//     const c = await new Promise(resolve => setTimeout(() => resolve(3), 1000));

//     console.log([a,b,c]);
// }
 
async function foo(){
    const [a, b, c] = await Promise.all([
        new Promise(resolve => setTimeout(() => resolve(1), 3000)),
        new Promise(resolve => setTimeout(() => resolve(2), 2000)),
        new Promise(resolve => setTimeout(() => resolve(3), 1000))
    ]);

    console.log([a, b, c]);
}

foo();