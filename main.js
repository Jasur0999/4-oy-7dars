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

// 5- task  /////////////////////////////

// let str = 'Salom';
// let arr = []
// for(let i = 0; i < str.toString().length; i ++){
//     arr.push(str[i]);
//     arr.reverse()
// }
// console.log(arr);

// 6- task   //////////////////////////////

// let str= '12345678986000632';
// function go(n){
// let str1=str.slice(-n)
// let son1 = str1.padEnd('*',n)
// console.log(son1);
// }
// go(8);

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

// 11- task  ////////////////////////////

// function getMinOfString(str) {
//     let words = str.split(' ');
//     let shortestWord = words[0];

//     for (let i = 1; i < words.length; i++) {
//       if (words[i].length < shortestWord.length) {
//         shortestWord = words[i];
//       }
//     }

//     return shortestWord;
//   }

//   let inputString = "Bu bir xurmatdorlik ifodasidir";
//   let minWord = getMinOfString(inputString);
//   console.log(minWord); // Output: "Bu"

// 12- task  ////////////////////////////

// let getInverseNumber=(n) =>+n.toString().split('').reverse().join('');
// console.log(getInverseNumber(12121));

// 13- task  /////////////////////////////

// function aniqlovchiIfodaQiymati(ifoda) {
//     let sonlar = ifoda.split(/[+-]/);
//     let amallar = ifoda.match(/[+-]/g);

//     let natija = parseInt(sonlar[0]);
//     for (let i = 0; i < amallar.length; i++) {
//       let amal = amallar[i];
//       let son = parseInt(sonlar[i + 1]);

//       if (amal === '+') {
//         natija += son;
//       } else {
//         natija -= son;
//       }
//     }

//     return natija;
//   }

//   let ifoda = "7+3-2";
//   console.log(aniqlovchiIfodaQiymati(ifoda));

//  14- task  ///////////////////////////

// function combineStrings(N1, N2, S1, S2) {
//     if (N1 <= 0 || N2 <= 0 || N1 > S1.length || N2 > S2.length) {
//       return "Invalid input";
//     }

//     let newString = S1.substring(0, N1) + S2.substring(S2.length - N2);
//     return newString;
//   }

//   // Test
//   console.log(combineStrings(3, 4, "JavaScript", "is fun"));

//  15- task  ////////////////////////////

// function duplicateChar(str, char) {
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === char) {
//         result += char + char;
//       } else {
//         result += str[i];
//       }
//     }
//     return result;
//   }

//   let S = "Bu bir örnek cümle";
//   let C = "c";
//   let duplicatedString = duplicateChar(S, C);
//   console.log(duplicatedString);

// 17- task   ////////////////////////////

// let s1 = 'Salom';
// let s2 = 'Php';
// let javob= [...s1, ...s2];
// let javob1=[]
// for(let i = 0; i < javob.length;i++){
//     javob1.push(javob[i])
// }
// console.log(javob1.reverse());

//   18- task  //////////////////////////////

// function addStringBeforeC(inputString, targetString) {
//     let result = "";
//     for (let i = 0; i < inputString.length; i++) {
//       if (inputString[i] === 'C') {
//         result += targetString;
//       }
//       result += inputString[i];
//     }
//     return result;
//   }

//   let S1 = "ABCDEF";
//   let S2 = "123";
//   console.log(addStringBeforeC(S1, S2));

// 19- task  ////////////////////////////////

// function removeSubstring(s1, s2) {
//     const index = s1.indexOf(s2);
//     if (index !== -1) {
//       return s1.slice(0, index) + s1.slice(index + s2.length);
//     } else {
//       return s1;
//     }
//   }

//   const s1 = "Hello world";
//   const s2 = "lo ";
//   console.log(removeSubstring(s1, s2));

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

//  22- task  /////////////////////////////

// function aniqlovchiHarflar(string) {
//     let words = string.split(' ');
//     let count = 0;
    
//     for (let i = 0; i < words.length; i++) {
//       let word = words[i];
//       if (word.length > 0) {
//         let firstChar = word.charAt(0).toLowerCase();
//         let lastChar = word.charAt(word.length - 1).toLowerCase();
//         if (firstChar === lastChar && (firstChar >= 'a' && firstChar <= 'z')) {
//           count++;
//         }
//       }
//     }
    
//     return count;
//   }
  
//   let testString = "Salom dunyo do'stlar";
//   console.log(aniqlovchiHarflar(testString)); 


//  23- task  /////////////////////////////

// let inputString = "Probel bilan ajratilgan va faqat katta harflar bilan terilgan o'zbekcha so'zlardan iborat string";
// let wordsArray = inputString.split(" ");
// let count = 0;

// for (let i = 0; i < wordsArray.length; i++) {
//   let word = wordsArray[i].toUpperCase();
//   let aCount = 0;
  
//   for (let j = 0; j < word.length; j++) {
//     if (word[j] === 'A') {
//       aCount++;
//     }
//   }
  
//   if (aCount === 2) {
//     count++;
//   }
// }

// console.log("2 ta 'A' harfi bor so'zlar soni: " + count);


//  24- task  /////////////////////////////

// function getMaxOfString(str) {
//     let words = str.split(' ');
//     let maxLength = 0;
//     let longestWord = '';
  
//     for (let i = 0; i < words.length; i++) {
//       if (words[i].length > maxLength) {
//         maxLength = words[i].length;
//         longestWord = words[i];
//       }
//     }
  
//     return longestWord;
//   }
  
//   let str = "Probel bilan ajratilgan o'zbekcha so'zlardan iborat str nomli string";
//   console.log(getMaxOfString(str)); 



// 25- task  //////////////////////////////

// let probelBilanAjratilganSozlar = "Probel bilan ajratilgan o'zbekcha so'zlardan iborat";
// let sozlar = probelBilanAjratilganSozlar.split(" ");
// let chiqaruvchiString = sozlar.join(".");
// console.log(chiqaruvchiString);


//  26- task  /////////////////////////////

// function kattalashtirish(probelBilanAjratilganString) {
//     let sozlar = probelBilanAjratilganString.split(' ');
//     let natija = '';
  
//     for (let i = 0; i < sozlar.length; i++) {
//       let kichikHarfliSoz = sozlar[i];
//       let kattaHarfliSoz = kichikHarfliSoz.charAt(0).toUpperCase() + kichikHarfliSoz.slice(1);
//       natija += kattaHarfliSoz + ' ';
//     }
  
//     return natija.trim();
//   }
  
//   let probelBilanAjratilganString = "probel bilan ajratilgan kichik harfli so'zlardan iborat string";
//   console.log(kattalashtirish(probelBilanAjratilganString));


//  27- task  ////////////////////////////

// function countPunctuationMarks(str) {
//     const marks = [".", ",", ";", ":", "?", "!", "-", "'", '"', "(", ")"];
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (marks.includes(str[i])) {
//         count++;
//       }
//     }
//     return count;
//   }
  
//   const inputString = "Bu bir test stringi! Unda nechta tinish belgilar bor? Nima uchun bu so'z?";
//   console.log(`Tinish belgilari soni: ${countPunctuationMarks(inputString)}`);


// 28- task  //////////////////////////////

// let str ='D:/Qudrat_c++/books/My_book.exe';
// let javob = str.slice(20, -4)
// console.log(javob);

// 29- task   ////////////////////////////////////

// let str ='D:/Qudrat_c++/books/My_book.exe';
// let javob = str.slice(28)
// console.log(javob);


//  30- task  ///////////////////////////////////

// var path = "C:\\Faylar\\Mavzular\\fayl.txt";
// var lastFolder = path.substring(0, path.lastIndexOf("\\"));
// console.log(lastFolder);
