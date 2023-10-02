// stack (primitive) gives acess of copy only 
let one="mayank";
let two = one ;
two="harshbhai"
 console.log(one);
console.log(two );



// heap (function , object , array )  direct acess 

let userone
{
    name: "navnath"  
}
let usertwo;
usertwo=userone ;
console.log(userone.name);
console.log(usertwo.name);