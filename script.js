Enter// تأثير كتابة
const text = [
"مبرمج بايثون",
"مطور مواقع",
"مطور بوتات"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type(){
    current = text[i];
    
    if(!isDeleting){
        j++;
        if(j == current.length){
            isDeleting = true;
            setTimeout(type,1000);
            return;
        }
    }else{
        j--;
        if(j == 0){
            isDeleting = false;
            i = (i + 1) % text.length;
        }
    }

    document.querySelector("h1").innerText = current.substring(0,j);
    setTimeout(type, isDeleting ? 50 : 100);
}

type();
