// this is a pointer and in node this is empty object {}
//we can use this in object and globally but cannot in arrow function 
// in standalone function this is undefined i.e. not working 
// this is reffer to the current contex
let user={
    name:"navnath",
    age:21 ,
    year:"te",
    welcome:function ()  {
        console.log(`${this.name},welcome to website`)
    
    }
       
}
user.welcome()
user.name="abhishek"
user.welcome()
console.log(this)


const one= function (){
    let name= "savkar"
    console.log(this.name)
}
one()








//======================arrow function ====================
//syntax of arrow fun :  () => {}
let addTwo = (a,b) =>{
    let c ;
    c=a+b;
    console.log( c) 
}
addTwo(2,3)

// when we use () for arrow fun no need to explicitly use retrn 
const subTwo = (a,b) => (a-b)
console.log(subTwo(4,5))
