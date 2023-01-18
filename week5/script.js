// console.log("connected");
let d = new Date();
let btn=document.getElementById("start")
btn.addEventListener("click",()=>{
    d = new Date();
    console.log(d)     
    setInterval(timer,1000)
})
function timer(){
    gethour()
    getminute()
    getsecond()
}

function gethour(){
    let n = d.getHours();
    document.getElementById("hour").innerText = n;
}
function getminute(){
    let m = d.getMinutes();
    document.getElementById("minute").innerText =  m;   
}
function getsecond(){
    let o = d.getSeconds();
    document.getElementById("second").innerText =  o;   
}