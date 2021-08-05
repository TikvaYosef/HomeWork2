// משימה 1
// var num1 = Number(prompt("put a number"));
// var num2 = Number(prompt("put a number"));
//  console.log(num1,num2);
// var sum = num1+num2
//  if (sum>=13){
//      console.log("bar-mitzva")

//  } else{
//      if(sum>=12){
//          console.log("bat-mitzva")
//      }else{
//          console.log("kid")
//      }
//  }


// משימה 2

//  number1 = 0
// while (number1<100){
//     console.log("yes")
//     number1++
// }



// משימה 3

// var userInput = Number(prompt("enter number"))
// var num = 0
// while (num<userInput) {
//      console.log("no")
//     num++

// }


// משימה 4

// for (var i = 0; i < 1000; i++){
//     console.log(
//        "javascript is not JAVA"
//     )
// }


// משימה 5


// var Name = prompt("what is your name ?");
// var number = Number(prompt("put a number"));

// for (var i = 0; i < number; i++) {
//     console.log(Name)
// }


// משימה 6


// var Name = prompt("name ");
// var age = Number(prompt("age"));
// var email = prompt("email");


// var number = Number(prompt("number"))
//  for(var i = 0; i<number; i++ ){
//     if(age>18){
//         console.log(Name , age , email)
//     }
//  }



// משימה 7


// var number = Number(prompt(number));
// var myName = "Tikva"
// for (var i = 0; i<number; i++) {
//       Name = prompt("Name")
//     if(Name==myName){
//       console.log ("hi boss", myName)   
//     }else{
//         console.log("no entry")

//     }
// }



// משימה 8


// var num1 = Number(prompt("number"));
// var num2 = Number(prompt("number"));

// for (var i = 0; i < num1; i++) {
//     for (j = 0; j < num2; j++) {
//         console.log(i * j)
//     }
// }



// משימה 9


// var something = [8,80,58,25,9];
// console.log(something)



// משימה 10


// var something = ["eden","yafit","tikva","keren","yosef"];

// for(var i = 0; i<something.length; i++){
//     console.log(something[i])
// }


// משימה 11


// var some = [89, 13, 20, 70, 14, 56, 50, 90];
// // console.log(some)
// for (var i = 0; i < some.length; i++) {
//     if(some[i] % 2 == 0){
//     console.log(some[i])
// }
// }


// משימה 12

// var names = [];

// for (var i = 0; i < 5; i++){
//     names[i]= Name  = prompt("Name");
// } 
// console.log(names)



// משימה 13??????..


// var some = [];
// var i=0;

// while( i < 7 ) {
//     some[i] = Number(prompt("number"))

//     if (some[i] % 2 != 0) {

//         i++
//         console.log(some[i])
//     } 




// }  



// משימה 14


// var some = ["tikva", 25, "yosef", 13, "keren", 22]
// for (i = 0; i < some.length; i++) {
//     if (some[i] / 1 != some[i]) {
//         some[i] = "not_number"
//     }
// }console.log(some)



// משימה 15??????????.



// var some = [];
// // var i = 0
// // var num = Number(prompt("number"))

// for( i=0;i < 10;i++) {
//     num = Number(prompt("number"))
//     if (some[i] % 2 == 0) {
//         // some[i] =  num
//     } 
//     console.log(some)

// }



// תרגיל 16



// var higth = Number(prompt("higth"));
// var width = Number(prompt("width"));
// var shetach =higth* width
// var hekef = ((higth*2)+(width*2))
// console.log(shetach)
// console.log(hekef)

// var num1 = Number(prompt("number"));
// var num2 = Number(prompt("number"));
// var num3 = Number(prompt("number"));

//     if(num1<num2&&num2<num3){
//         console.log("סדר עולה")
//     }else{
//         if(num1>num2&&num2>num3){
//             console.log("סדר יורד")
//         }else{
//             console.log("אין סדר")
//         }
//     }


// אסצאלין




// var age = [18, 20, 25, 63, 3, 120, 4, 21];

// var min = age[0]
// for (var i = 1; i < age.length; i++) {
//     if (age[i] < min) {
//         min=age[i]
//     }

// }
// console.log(min)

// var max = age[0]
// for(var i = 1; i<age.length;i++){
//     if(age[i]>max){
//         max=age[i]
//     }
// }
// console.log(max)


// var sum = 0
// for (var i = 1; i < age.length; i++) {
//     sum = sum + age[i]
// }
// console.log(sum)


// var avrge = 0

// for (var i = 0; i < age.length; i++) {
//     avrge = sum / age.length


// }
// console.log(avrge)


// var pro = Number(prompt("guss the number"));
// for (var i = 0; i < age.length; i++) {
//     if (pro == age[i]) {
//         console.log("yesss!!")
//     }

// }




var sum = 0
var maarach = []
for (var i = 0; i < 5; i++) {
    var userInput = Number(prompt("number"))
    maarach[i] = userInput




}
console.log(maarach)


for (i = 0; i < maarach.length; i++) {
    sum = sum + maarach[i]

}
console.log(sum)




