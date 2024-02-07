//   1- task  //////////////////////////////////////////////

// let n = 75;
// for (let i = 65; i <= n; i++) {
//   console.log(String.fromCharCode(i));
// }


// 2- task   /////////////////////////

// let n = +prompt("Son kiriting: ")
// function AsciiTask(n){
//   if(n > 0 && n !== NaN){
//     if(n >= 65 && n <= 90 || n >= 97 && n <= 122){
//       console.log("Lotin")
      
//     }else if(n >= 48 && n <= 57){
//       console.log("Digit")
//     }else{
//       console.log("0")
//     }
//   }else{
//     console.log("0 or NaN")
//   } 
// }

// AsciiTask(n)


//   3- task  /////////////////////////

// let str= `O'zbekiston buyuk davlat`;
// console.log(str.charCodeAt(0));
// console.log(str.charCodeAt(23));


// 4- task  ///////////////////////////////

// let n = +prompt('n sonini kiriting')
// let str = 'Javascript '
// let a = str.repeat(n)
// console.log(a);


// 6- task   //////////////////////////////

// let str= '12345678986000632';
// function go(n){
// let str1=str.slice(-n)
// let son1 = str1.padEnd('*',n)
// console.log(son1);
// }
// go(8);


// 5- task  /////////////////////////////

// let str = 'Salom';
// let arr = []
// for(let i = 0; i < str.toString().length; i ++){
//     arr.push(str[i]);
//     arr.reverse()
// }
// console.log(arr);


// 7- task   /////////////////////////////////

// let str = 'Salom Javascript';
// for(let i = 0; i < str.toString().length; i++){
//     console.log(str[i].charCodeAt(0,1,2,3,4));

// }


// 9- task   ////////////////////////////////
// let n ='SALOM JAVASCRIPT';
// let javob=n.toLocaleLowerCase();
// console.log(javob);


// 10- task  /////////////////////////////////

// let n ='SALOM JAVASCRIPT';
// let javob=n.toLocaleLowerCase();
// console.log(javob);
// let son= javob.toLocaleUpperCase();
// console.log(son);


// 12- task  ////////////////////////////
// let getInverseNumber=(n) =>+n.toString().split('').reverse().join('');
// console.log(getInverseNumber(12121));


// 17- task   ////////////////////////////
// let s1 = 'Salom';
// let s2 = 'Php';
// let javob= [...s1, ...s2];
// let javob1=[]
// for(let i = 0; i < javob.length;i++){
//     javob1.push(javob[i])
// }
// console.log(javob1.reverse());


// 20- task  ////////////////////////////////

// let s1 ='salom';
// let s2 = 'Php'
// let s3 = 'Sql'
// let javob=s1.slice(0,1);
// let javob1 =s3.concat(s2)
// let qushish =javob1+s1.slice(0,1);
// console.log(javob);
// console.log(qushish);

// 21- task  //////////////////////////////////


// let s1 ='salom';
// let s2 = 'Php'
// let s3 = 'Sql'
// let javob=s1.slice(-1);
// let javob1 =s3.concat(s2)
// let qushish =javob1+s1.slice(-1);
// console.log(javob);
// console.log(qushish);




// 28- task  //////////////////////////////
// let str ='D:/Qudrat_c++/books/My_book.exe';
// let javob = str.slice(20, -4)
// console.log(javob);
 
// 29- task   ////////////////////////////////////
// let str ='D:/Qudrat_c++/books/My_book.exe';
// let javob = str.slice(28)
// console.log(javob);