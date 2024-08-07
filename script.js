// ----------Function to type Title one by one---------------------------------------------
const title = "Fullstack Web Developer | <br>Certified Practising Accountant ";
let string = "";
let j = 0;
lenTitle = title.length;
const titleElm = document.getElementById("title");
let audio = new Audio("typingSound.mp3");

const typeTitle = () => {
   string += title.charAt(j);
   titleElm.innerHTML = string;
   j++;
   tt = setTimeout(typeTitle, 80);
   if (j === lenTitle) {
      titleElm.style.backgroundColor = "rgb(230, 23, 26)";
      titleElm.style.color = "white";
      titleElm.style.padding = "10px";
      tt = setTimeout(clear, 3000);
   }
};

// -----Invoke function to tyle Title one by one as soon as page loaded

const clear = () => {
   titleElm.style.backgroundColor = "transparent";
   titleElm.style.color = "black";
   j = 0;
   string = "";
   clearTimeout(tt);
   typeTitle();
};

// document.addEventListener("DOMContentLoaded",typeTitle)

// Function to type about me paragraph one by one ------------------------------

let str = "";

const text = "Phary Phal";
const len = text.length;
let i = 0;
let t;
let called = false;

// document.addEventListener('scroll', e =>{
//     if(document.documentElement.scrollTop >= 4000){
//         if (called)
//         {
//             return;
//         }
//         called = true;

//         type();
//     }
// })

const type = () => {
   str += text.charAt(i);
   document.getElementById("signature").innerHTML = str;
   i++;
   t = setTimeout(type, 200);
   if (i === len) {
      t = setTimeout(clearType, 1500);
   }
};

const clearType = () => {
   clearTimeout(t);
   i = 0;
   called = true;
   str = "";
   type();
};
