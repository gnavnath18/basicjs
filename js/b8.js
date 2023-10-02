// date and time

console.log(Date.now())  //current time in ms from 1970 js calender 

// we can store date as string object 
const currdate= new Date("2023-aug-26") ;
console.log(currdate);

// specifying year , month ,date,hors ,minute ,second 
console.log(2023,8,27,4,32,54)

const date = new Date(); // gives current iso date 
console.log(date)

/* get methods in js

getFullYear() -	Get year as a four digit number (yyyy)
getMonth()   -  Get month as a number (0-11)
getDate()	 -Get day as a number (1-31)
getDay()	 -Get weekday as a number (0-6)
getHours()	 -Get hour (0-23)
getMinutes()	-Get minute (0-59)
getSeconds()	-Get second (0-59)
getMilliseconds()	-Get millisecond (0-999)
getTime()	-Get time (milliseconds since January 1, 1970)
*/

console.log(currdate.getMonth()+1) ;
console.log(currdate.getFullYear()) ;
console.log(currdate.getDay()+1) ;
console.log(currdate.getHours()) ;
console.log(currdate.getSeconds()) ;
console.log(currdate.getDay()) ;
console.log(currdate.getMilliseconds()) ;

/* set methods in js 
setDate()	       Set the day as a number (1-31)
setFullYear()	   Set the year (optionally month and day)
setHours()	        Set the hour (0-23)
setMilliseconds()	Set the milliseconds (0-999)
setMinutes()	   Set the minutes (0-59)
setMonth()	      Set the month (0-11)
setSeconds()	 Set the seconds (0-59)
setTime()	      Set the time (milliseconds since January 1, 1970)


*/




