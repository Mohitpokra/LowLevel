function throttle(mainFun, delay) {
    let timeoutId = null;
    let lastArgs = null;
    let lasthis = null
 
    return function(...args) {
      let context = this;
      if(!timeoutId) {
         mainFun.apply(context, args);
         lasthis = context;
         lastArgs = args;
 
         timeoutId = setTimeout(() => {
             timeoutId = null;
             if(lastArgs) {
                 mainFun.apply(context, args);
                 lasthis = context;
                 lastArgs = args;
             }
         }, delay)
 
      } else {
         lastArgs = args;
         lasthis = context;
      }
    }
 }
 
 function printName() {
     console.log('this is my name', this.name);
 }
 
 const abc = throttle(printName, 5000)
 
 let obj = {
     name: "mohit"
 }
 
 console.log(abc.apply(obj));