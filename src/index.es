const a = (test)=>test+1;


console.log(a(1));


// arrow function 使用方式

const obj = {
  getSelf:function(){
    return ()=>this
  }
}

console.log(obj.getSelf()() === obj)
