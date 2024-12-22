const outerFunction=()=>{
    const outerVar=16;
   const innerFunction=()=>{
        console.log(outerVar)
    }
    innerFunction()
}
outerFunction();

const createCounter=(count)=>{
    return othetfunc=()=>{
return count++;
    }
}
const counter=createCounter(0);
const counter2=createCounter(0);
console.log(counter());
console.log(counter2());


 (function() {
   const localvar=1;
   const otherIIFEfunc=()=>{
return localvar;
   } 
})();
// console.log(localvar)
const makeMultiplier=(x)=>{
return newfunc=(y)=>{
return x*y;
}
}
const algebra=makeMultiplier(9);
 console.log( algebra(6));
 console.log( algebra(4));

const createPerson=(name)=>{
return {
    greet:()=>{console.log(name)}
}
}
const person=createPerson("Ivan")
const person2=createPerson("Artem")
const person3=createPerson("Dima")
person.greet()
person2.greet()
person3.greet()