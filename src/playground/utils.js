console.log("utils.js running");

const sqr = (x)=>{
    return x*x;
}

const add = (a,b)=>{
    return a+b;
}

const subtract = (a,b)=>{
    return a-b;
}

// export const add = (a,b)=>{
//     return a+b;
// }

// 1st way
// this is not an object
// we provide the exports here
// named exports
// export{sqr,add}

// 2nd way
// providing utils namespace to the exported things
// named exports
// module.exports.utils = {
//     sqr,
//     add
// }

// 3rd way
// default exports
// we cam have only one default export
export {sqr as sqr, add as add, subtract as default }