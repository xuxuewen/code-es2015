// arrow function 实践
/**
 * 1. 支持表达式和语句2钟书写方式
 * 2. 与包裹代码共享this 同时也共享 arguments 对象
 */

let a = ()=>'test';
let b = ()=>{return 'test'};
let c = params => params;
let d = params => {return params};
let e = (a,b)=>a+b;
let f = (a,b)=>{return a+b};
let g = (a=1,b=3)=>a+b;

let persion = {
  getSelf:function(){
    return ()=>this
  },
  getSelfTwo:function(){
    return this
  }
}

function sum(){
  let sumFun = ()=>{
    let sums = 0;
    for (let num of arguments){
      sums += num;
    }
    return sums
  }
  return sumFun();
}


export function run(){

  console.log('a() === b()',a() === b())
  console.log('c(1) === d(1)',c(1) === d(1))
  console.log('c(1) === d(2)',c(1) === d(2))
  console.log('e(1,2) === f(1,2)',e(1,2) === f(1,2))
  console.log('e(3,2) === f(1,2)',e(3,2) === f(1,2))
  console.log('g() === g(1,3)',g() === g(1,3))

  console.log(persion.getSelf()() === persion)
  console.log(persion.getSelfTwo() === persion)
  console.log(sum(1,2,3,4,5,6,7))
}
