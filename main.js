//   1 - task  //////////////////////////////////////////////

// let n = 75;
// for (let i = 65; i <= n; i++) {
//   console.log(String.fromCharCode(i));
// }

//   2 - task  //////////////////////////////////////////////

// let m = 122;

let n = +prompt("Son kriting: ");

function acki(n) {
  if (n >= 0) {
    if (n >= 48 && n <= 57) {
      if (65 <= 90 || 97 <= 122) {
        for (let i = 65; i <= 90; i++) {
          console.log("lotin");
        }
        for (let i = 97; i <= 122; i++) {
          console.log("lotin");
        }
      }
    }
    if (48 <= 57) {
      for (let d = 48; d <= 57; d++) {
        console.log("digit");
      }
    }
    
    else {
      console.log("0");
    }
  }
}
acki(n);
// const son = acki(n);
// console.log(son);
//  let n = 90;
// for (let i = 65; i <= n; i++) {
//   if (n >= i) {
//     console.log("lotin");
//   }
// }
// console.log(String.fromCharCode(i));
