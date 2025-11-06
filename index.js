const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pwd1 = document.querySelector("#pwd1");
let pwd2 = document.querySelector("#pwd2");
let generateBtn = document.querySelector("#generateBtn");

generateBtn.addEventListener('click', () =>
    getRandomPwd(characters));

function getRandomPwd(array) {
    let charArray1 = [];
    let charArray2 = [];
    for (let i = 0; i < 9; i++) {
        const j = Math.floor(Math.random() * array.length);
        const x = Math.floor(Math.random() * array.length);
        charArray1.push(array[j]);
        charArray2.push(array[x]);
    };
    pwd1.textContent = charArray1.join("");
    pwd2.textContent = charArray2.join("");
}





