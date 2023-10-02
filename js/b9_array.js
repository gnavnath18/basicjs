// array craetion and metods 
// length , push (add element ) , pop(delete last element ), 
// slice- doesn't manipulate array and gives sliced portion & splice- cuts the array parth of range included
// join - joins element to other array but as STRING
// unshift - insert the element in the 0th index & shift- removes 0th element 

// include - gives boolean 
// indexof - gives index of element

let arr=[1,3,5,67,44,56,345]
let arr1=[3,66,55,980]

let arr3= arr1.push(arr)
console.log(arr3)
let arr4= arr1.concat(arr) // syntax to concate two arrays
console.log(arr4);

let arr5=arr.slice(1,3)  // syntax slice and splice 
console.log(arr5)
console.log(arr)

let arr6=arr.splice(1,3) // include the range i.e. bound and remove from original array
console.log(arr6)
console.log(arr)

let a=[1,2,4,8,[9,90,900,[340,440,540]]]
console.log(a.flat(3))






// pushing- array into array 
// concate - aads element of array to given
// spread- (...arr1,...arr2) : spreads all arrays into single array  let newarr= (...arr2,arr2)
//flat- used to handle nested arrays to convert in single array [syntsx:let newarr= oldarr.flat(depth)]
// array - syntax: [newarr= Array.from()]


