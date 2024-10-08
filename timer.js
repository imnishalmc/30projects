// const countDown=new Date("Dec 31, 2024 23:59:59").getTime();
// //date functon le total time lai milisecond ,ma convert garxa 
// const x = setInterval(function(){
//     const now = new Date().getTime();
// const distance=countDown-now; 
// console.log(distance)

// const Days =Math.floor(distance / (1000 *60 *60 *24));
// const Hours =Math.floor((distance % (1000 *60 *60 *24)) /(1000 *60 *60));
// const Minutes =Math.floor((distance %(1000 *60 *60 ))/ (1000*60));
// const seconds = Math.floor((distance % (1000 * 60)) / 1000);

// //document.getelementbyclass nam le collection of arrry lai return garxa but not the actual array. so individually access garna we have to use index 
// document.getElementById("day").innerHTML = Days;
// document.getElementById("hr").innerHTML = Hours;
// document.getElementById("min").innerHTML = Minutes;
// document.getElementById("sec").innerHTML = seconds;
// if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("time").innerHTML = "EXPIRED";
// }
// }, 1000);

const endDate ="21 October 2024 12:00 AM "//last date 
// 
// date object in js help to give the time stamp of the particular date and provide the time in milisecond


// const end =new Date() this gives the current time 



 const input =document.querySelectorAll("input");



const clock =()=>{
const end =new Date(endDate)
const now= new Date();
const diff= (end-now)/1000;
console.log(diff);
// console.log(diff/(24*60*3600))
//  input[0].value=Math.floor(diff/(3600*24));
//hr
 input[0].value=Math.floor(diff/3600/24);

//hr
//  input[1].value=Math.floor((diff%(3600*24)));
  input[1].value=Math.floor(diff/3600)%24;
  //min
// console.log(Math.floor(diff/3600)%24);
input[2].value =(Math.floor(diff/60)%60);
//sec
// console.log(Math.floor(diff%60));
input[3].value=Math.floor(diff)%60;

}
clock();

setInterval(()=>{
    clock(),1000
})