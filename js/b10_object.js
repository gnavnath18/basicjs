// to master js master array , object and DOM manipulation 

//++++++++++++++ object creation singleton +++++++++++++

//let biodata= Create();

let username= new Object();
username.name={fullname:{     
    firstname:"navnath", midname:"ishwar",lastname:"gite"    // nested objects works
}}
console.log(username.name);
console.log(username.name.fullname);
console.log(username.name.fullname.firstname);


// +++++++++++++ simple syntax of object creation (literal)++++++++++++++++++++++




const mykey=Symbol("key1");
let data={
    name:"navnath",surname:"gite" , age:21 , email:"gitenavnath109@gmail.com" ,[mykey]:"18"

}
// to acess data of object two ways obj.data_name and obj["data_name"]

console.table(data["name"])
console.log(data.name)
console.log(data["age"])  // another way to acess data of object 
console.log(data["email"])
console.log(data[mykey])    // to acess key in object we need syntax obj_name[key_name]

// adding new function to the object
data.add= function(){
    console.log("ho gaya bhai add");
}
// console.log(data.add());

// use of manipulation using ${this.data_name}
console.log(`new change hai bhai,${this.data.name}`);





// +++++++++++++++ object methods++++++++++++++++++++++++++++



let obj1 , obj2 ;
obj1={1:"a", 2:"b" }
obj2={3:"c", 4:"d"}
let obj3 ={...obj1,...obj2}     // spread method or operator 
let obj4=Object.assign({},obj1,obj2)  // assign method of object syntax[Object.assign(target, source)]
console.log(obj3);
console.log(obj4);
// acesing keys and values of object and store it into array 
console.log(Object.keys(username.name.fullname))
console.log(Object.values(username.name.fullname));






// ======================== object desturcturing =========================
// syntax datatype { }= obj

const course=new Object() ;
course.name="js mastery"
course.price= 999 
course.instructor="hitesh sir"

const {instructor: inst}= course
const {price}=course
const {name}=course
//console.log(instructor);
console.log(inst);
console.log(name);
console.log(price);









