// ----------Function to type Title one by one---------------------------------------------
const title =  "Fullstack Web Developer | <br>Certified Practising Accountant "
let string = "";
let j = 0;
lenTitle = title.length;
const titleElm = document.getElementById("title");
let audio = new Audio('typingSound.mp3');

const typeTitle = () => {
    string += title.charAt(j)
    titleElm.innerHTML = string;
    j++;
    tt = setTimeout(typeTitle,80);
    if (j===lenTitle){
        titleElm.style.backgroundColor ="rgb(230, 23, 26)";
        titleElm.style.color ="white";
        titleElm.style.padding = "10px";
        tt = setTimeout(clear,3000);
    }
}

// -----Invoke function to tyle Title one by one as soon as page loaded

const clear = () => {
    titleElm.style.backgroundColor ="transparent";
    titleElm.style.color ="black";
    j = 0 ;
    string ="";
    clearTimeout(tt);
    typeTitle();
}

document.addEventListener("DOMContentLoaded",typeTitle)

// Function to type about me paragraph one by one ------------------------------

let str ="<p>I'm a professional, driven, with a unique blend of experience in accounting , finance , customer services and programming who love problem solving and being creative.</p>";

const text =  "<p>I'm constantly evolving, learning, and growing so you can expect that working with me is going to be fun.<br>I'm also a people person who can't let a day go by without having a cup of coffee.</p><p>Whether you require my freelancing services or hiring me as a fulltime employee, please feel free to contact me anytime.</p><br><p>Cheers,</p><p><span>Phary Phal</span></p>" ;

const len = text.length;
let i = 0;
let t;
let called = false;

document.addEventListener('scroll', e =>{
    if(document.documentElement.scrollTop >= 4000){
        if (called)return;
        called = true;
        type();
    }
})

const type = () => {
    str += text.charAt(i);
    document.getElementById("aboutmeContent").innerHTML = str;
    i++;
    t = setTimeout(type,40);
    if (i===len){
        t = setTimeout(clearType,3000);
    }
}


const clearType = () => {
    i = 0;
    called = false;
    str =  "<p>I'm a professional, driven, with a unique blend of experience in accounting , finance , customer services and programming who love problem solving and being creative.</p>" ;
    clearTimeout(t);
    type();
    
}


