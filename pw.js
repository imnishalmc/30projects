const passwordBox= document.getElementById("password");
let length=10;
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const number ="1234567890";
const symbol ="!@#$%^&*()_+=-{}[]\|:;'<>,./? ";

const allChars=upperCase+lowerCase+number+symbol;

function createpw(){
    let password="";
    password+=upperCase[Math.floor(Math.random()* upperCase.length)];
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=number[Math.floor(Math.random()* number.length)];
    password+=symbol[Math.floor(Math.random()* symbol.length)];
    while(length>password.length){
        password+=allChars[Math.floor(Math.random()* allChars.length)];
    }
    passwordBox.value =password;
}
//math.floor will round off the floating number ot the nearest decimal num
//math.random le random num generate garxa from 0 to 1 where 0 is inclusive and 1 is excluisve 
// function copyText(){
//  var copyText =document.getElementById("password");
//  copyText.select();

//  navigator.clipboard.writeText(copyText.value).then(function(){
//     alert("text is copied, okay!"+ copyText.value);
//  }).catch(function(error){
//     console.error("Error copying text: ", error);
//  });
// }

//to copy the generated password 
function copyPassword()
{
    passwordBox.select();
    document.execCommand("copy");
}




