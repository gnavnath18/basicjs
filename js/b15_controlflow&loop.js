// execute when condition is true 
// if (condition )
// if(condition ) else  
// switch case 
// falsy values in conditional : false,0,-0,BigInt 0n,"",null,undefined ,NaN

// type checking ===



let userloggedIn=true 
let userloggedwithMail=false
let userloggedwithGoogle=true
if(userloggedIn|| userloggedwithMail || userloggedwithGoogle){
    console.log("welcome to website")
}
// switch case with break and continioue
let month =4 
switch(month){
    case 1:
        console.log("jan")
        break
        
    case 2:
        console.log("feb")
        break
    case 3 :
        console.log("march")
        break    
    case 4:
        console.log("april")
        break       
    default:
        console.log("enter correct choice ")
        
}


//====================== loops ====================================================
// for()
// for (let index = 0; index <10; index++) {
//     const element = index ;
//     console.log(element )
// }

// while(condition){}
//let index=0
//while(index<=20){
    //console.log(index)
   // index=index+3

//}

// do{statement} while(condition);
// do {
//     //console.log(index)
    
// } while (index<10);



//++++++++++++++++++++++++++++++++++++++++++++++++ loops for array++++++++++++++++++++++++++++++++++++++++++++++

// for of 
// let arr=[1,2,3,4,5,6,7,8,9,10]
// for (const num of arr){
//     console.log(num)
    
// }

// for in 
// let scores=[10,20,30,40,50,60,70,80,90,100]
// for(const marks in scores){
//     if(scores[marks<=40]){
//         console.log( `failed ${scores[marks]}`)
//     }
//     else{
//         console.log(`pass ${marks}`)
//     }
//     console.log(marks)
//     console.log(scores[marks])
// }
// foreach : executes function for each ele of array
// known as callback function but doesnt return anything 

/*let  score 
scores.forEach((score) => console.log(score))
*/


//+++++++++++++++++++++++++++++ for map and object +++++++++++++++++++++++++++++++
// for in loop is to iterate object (for of is not working )
// map can be iterate using for of or for in 



