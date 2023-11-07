// setTimeout(function(){
//     console.log('hi');
// }, 5000)

// стрелочная функция
// (a,b) => {
//     let c
//     a = a + 1
//     c = a + b
//     return c
// }
// setTimeout(() => {
//     console.log('hi');
// }, 1000)

// function multByFactor(value, multiplier = 1){
//     return value * multiplier
// }

// multByFactor(10,3)
// multByFactor(8)

const newPost = (post, addedAt = Date()) => ({
    ...post,
    addedAt
})

const firstPost = {
    id: 1,
//     author: 'vishenka',
// }
// console.log(newPost(firstPost))

// const myFn = (arg1, arg2, obj1, obj2) => {
//     console.log(`Arguments: ${arg1}, ${arg2}`);
//     console.log(`names:`, obj1);
//     console.log(`age:`, obj2);
//   };

//   const names = {
//     key1: 'valentina',
//     key2: 'vasya',
//   };
  
//   const age = {
//     key3: 19,
//     key4: 43,
//   };

// myFn(0,0, names, age);


// const colors = ({a,b,c,d,e}) => {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);
//     console.log(e);
//     return {a,b,c,d,e};
// }

// const obj = {
//     a: 'white',
//     b: 'red',
//     c: 'orange',
//     d: 'green',
//     e: 'pink'
// }

// console.log(colors(obj));


// function one(two){
//     console.log('свинина');
//     two();
// }

// function two(){
//     console.log('свинина', ' ', 'розовенькая');
// }

// one(two);

// function one(two,three) {
//     console.log('свинина');
//     two();
//     three();
//   }
  
//   function two() {
//     console.log('свинина', ' ', 'розовенькая');
//   }

//   function three(){
//     console.log('баранина');
//   }
  
//   one(two,three);

// function multiply(a,b){
//     return a * b;
// }

// function add(num1,num2){
//     return num1 + num2;
// }

// function one(fn1,fn2,num1,num2){
//     const result1 = fn1(num1, num2);
//     const result2 = fn2(num1, num2);

//     console.log(result1);
//     console.log(result2);
// }

// one(multiply,add,2,5)




