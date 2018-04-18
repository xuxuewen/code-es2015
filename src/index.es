import {run as arrowRun} from './arrow.function.es';

arrowRun()
// const a = (test)=>test+1;
//
//
// console.log(a(1));
//
//
// // arrow function 使用方式
// // 1. 表达式和语句的方式 2.与包裹的代码共享this 3. 共享arguments 对象
//
// const obj = {
//   getSelf:function(){
//     return ()=>this
//   }
// }
//
// console.log(obj.getSelf()() === obj) // true
//
//
// // 1. 表达式写法
// let b = ()=>'test'
//
// // 等价于 语句写法
// let b1 = ()=>{return 'test'}
//
//
// // 经典使用
// function square(){
//   let temp = ()=>{
//     let numbers = [];
//     for (let num of arguments){
//       numbers.push(num * num )
//     }
//     return numbers
//   }
//   return temp()
// }
//
// let res = square(2)
// console.log(res)
