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

// const newPost = (post, addedAt = Date()) => ({
//     ...post,
//     addedAt
// })

// const firstPost = {
//     id: 1,
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

// const fnWithError = () => {
//   throw new Error('some error')
// }

// try{
//   fnWithError()
// } catch(error){
//   console.log(error);
//   console.log(error.message);
// }

// console.log('dzsdds');

//(f)(s)(w)(c)

// const myArray = [1,2,3,4] 

// function filter(arr){
//     let newArr = []

//     for(let i = 0; i < arr.length; i++){
        
//         if(arr[i] % 2 === 0){
//             newArr.push(arr[i])
//         }
        
//     } 

//     return newArr
// }

// console.log(filter(myArray))

// myArray.forEach((el) => {
//     return el + 1
// })

// const filteredNumber3 = myArray.map((el) => {
//     return el + 5
// })

// console.log(filteredNumber3)

// const myArr = [1,2,3,4,5]
// console.log(myArr);

// myArr.pop();
// console.log(myArr);

// const removedEl = myArr.pop()
// console.log(myArr);
// console.log(removedEl);

// myArr.unshift(true)
// console.log(myArr);

// myArr.shift()
// console.log(myArr);

// const myArr = [1,2,3,4,10,3,5,1,5,88,56,43,3,76,3,5,856,3,4,5,66,54,3,345,77]
// console.log(myArr);

// const res = myArr.map((el, index, arr) => {
//    return el * 2
// })

// const filterednum = myArr.filter((el) => el < 5)
// console.log(myArr);
// console.log(res);
// console.log(filterednum);
// console.log(myArr);

// [
//     {
        // img: 'http?',
        // description: 'Ноутбук Acer Aspire 7 A715-43G-R92H',
    //     price: '32 999₴',
    //     status: 'заканчивается'
    // },
    // {
    //     img: 'http?',
    //     description: 'Ноутбук Acer Aspire 7 A715-43G-R92H',
    //     price: '32 999₴',
//         status: 'заканчивается'
//     },
//     {
//         img: 'http?',
//         description: 'Ноутбук Acer Aspire 7 A715-43G-R92H',
//         price: '32 999₴',
//         status: 'заканчивается'
//     },
//     {
//         img: 'http?',
//         description: 'Ноутбук Acer Aspire 7 A715-43G-R92H',
//         price: '32 999₴',
//         status: 'заканчивается'
//     },
//     {
//         img: 'http?',
//         description: 'Ноутбук Acer Aspire 7 A715-43G-R92H',
//         price: '32 999₴',
//         status: 'заканчивается'
//     },
//     {
//         img: 'http?',
//         description: 'Ноутбук Acer Aspire 7 A715-43G-R92H',
//         price: '32 999₴',
//         status: 'заканчивается'
//     },
   
// ]

// ориг массив не изменился

// console.log(myArr);
// const myArr = [1,2,3,4]
// console.log(myArr);

// const newArr = myArr.map(el => el * 3)

// console.log(newArr);
// console.log(myArr);

// const numbers = [1, 2, 3, 4];

// const doubledNumbers = numbers.map((num) =>{
//     return num * 2;
// });

// console.log(doubledNumbers);

// const words = ["apple", "banana", "cherry", "date"];
// console.log(words);

// words.forEach((word) => {
//     console.log(word.toUpperCase());
// });

// деструктуризация массивов

// const fruits = ['apple', 'banana']

// const [fruitOne, fruitTwo] = fruits

// console.log(fruitOne);
// console.log(fruitTwo);


// const userPro = {
//     name: 'vishnya',
//     comm: 6,
//     boo: true,
// }

// const userInfo = ({name, comm}) => {
//     if(!comm){
//         return `user ${name} has no comments`
//     }
//     return `user ${name} has ${comm} comments`
// }
// console.log(userInfo(userPro));

// условние инструкции

// let val = 10
// if (val > 5){
//     val += 20
// }
// console.log(val);

// const age = 5

// if(age > 18){
//     console.log('is adult')
// } else if (age >= 12){
//     console.log('is teenager')
// } else {
//     console.log('is child');
// }
// if(age >= 18){
//     console.log('is adult')
// }

// if(age >= 12 && age < 18){
//     console.log('is teenager')
// }

// if(age < 12){
//     console.log('is child');
// }

// const sumNum = (a,b) => {
//     if(typeof a !== 'number' || typeof b !== 'number'){
//         return 'one of the arr is not a number'
//     }
//     if(a <= 0 || b <= 0){
//         return 'numbers are not positive'
//     }
//     return a + b
// }
// console.log(sumNum('str',4));
// const month = 12

// switch (month) {
//     case 12:
//         console.log('декабрь');
//         break;
//     case 1:
//         console.log('январь');
//         break
//     case 2:
//         console.log('февраль');
//         break;
//     default:
//         console.log('это не зимний месяц');
// }

// тернарный оператор

// const value = '11'

// value === 11
// ? console.log('условие истино')
// : console.log('условие ложно')

// const value1 = 11
// const value2 = 22

// value1 && value2
// ? myFun1(value1, value2)
// : myFun2()

let value = 11
console.log(value >= 0 ? value : -value);

value = -5
const res = value >= 0 ? value : -value
console.log(res);

//  const myArr = ['one', 'two', 'three']
