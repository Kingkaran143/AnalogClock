const hr = document.getElementById('hr');
const mn = document.getElementById('mn');
const sc = document.getElementById('sc');


setInterval(() =>{
const d = new Date();
const hh = d.getHours() * 30;
const mm = d.getMinutes() * 6;
const ss = d.getSeconds() * 6;

hr.style.transform = `rotateZ(${hh + (mm/12)}deg)`;

mn.style.transform = `rotateZ(${mm}deg)`;

sc.style.transform = `rotateZ(${ss}deg)`;


// digital clock //

const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
const amp = document.querySelector('.amp');

let h = new Date().getHours() ;
let m = new Date().getMinutes();
let s = new Date().getSeconds();

const a = (h >= 12) ? "PM" : "AM";

h = (h < 10) ? "0" + h : h;
m = (m < 10) ? "0" + m : m;
s = (s < 10) ? "0" + s : s;
hour.innerHTML = h;
min.innerHTML = m;
sec.innerHTML = s;
amp .innerHTML = a;
})

console.log(event)
