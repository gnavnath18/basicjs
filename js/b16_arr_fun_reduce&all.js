//filter, map and reduce 

// filter is callback function  method return the array after conditional check
// map give acess to all operation with conditional and return an array

let num=[1,2,3,4,5,6,7,8,9,10]
let newnum=num.filter((num)=> (num>4) )
console.log(newnum)

const a=num.map((key)=>(key*2+5))
console.log(a)


// reduce used in shopping filter card etc 
//reduce is callback function : .reduce(accumalator,currentvalue(arr)=> (accumalator+currentvalue,initalvalue))

const arr1=[10,20,30,40,50,60,70,80,90,100]
let mylist=arr1.reduce( (acc,curr) =>acc+curr,10)
console.log(mylist)

// chaining 