const games = {

/* ===== 3月 ===== */
"2026-03-27":"vs ",
"2026-03-28":"vs ",
"2026-03-29":"vs ",
"2026-03-31":"vs ",

/* ===== 4月 ===== */
"2026-04-01":"vs ",
"2026-04-02":"vs ",
"2026-04-03":"vs ",
"2026-04-04":"vs ",
"2026-04-05":"vs ",
"2026-04-07":"vs ",
"2026-04-08":"vs ",
"2026-04-09":"vs ",
"2026-04-10":"vs ",
"2026-04-11":"vs ",
"2026-04-12":"vs ",

/* ===== 5月 ===== */
"2026-05-01":"vs ",
"2026-05-02":"vs ",
"2026-05-03":"vs ",
"2026-05-04":"vs ",
"2026-05-05":"vs ",
"2026-05-06":"vs ",

/* ===== 6月 ===== */
"2026-06-01":"vs ",
"2026-06-02":"vs ",
"2026-06-03":"vs ",
"2026-06-04":"vs ",
"2026-06-05":"vs ",
"2026-06-06":"vs ",

/* ===== 7月 ===== */
"2026-07-01":"vs ",
"2026-07-02":"vs ",
"2026-07-03":"vs ",
"2026-07-04":"vs ",
"2026-07-05":"vs ",

/* ===== 8月 ===== */
"2026-08-01":"vs ",
"2026-08-02":"vs ",
"2026-08-03":"vs ",
"2026-08-04":"vs ",
"2026-08-05":"vs ",

/* ===== 9月 ===== */
"2026-09-01":"vs ",
"2026-09-02":"vs ",
"2026-09-03":"vs ",
"2026-09-04":"vs ",
"2026-09-05":"vs ",

};

const ctx = document.getElementById('statsChart');

new Chart(ctx, {

type:'line',

data:{

labels:['4月','5月','6月','7月','8月'],

datasets:[{

label:'チーム勝利数',

data:[10,18,25,35,42],

borderWidth:3

}]

},

options:{
responsive:true
}

});



function openTakahashi(){

document.getElementById("takahashiModal").style.display="block";

}

function closeTakahashi(){

document.getElementById("takahashiModal").style.display="none";

}

const games = {
  "2026-03-01":"vs巨人",
  "2026-03-02":"vs巨人",
  "2026-03-03":"vs阪神",
  "2026-03-04":"vs阪神",
  "2026-03-05":"vs阪神",
  "2026-03-07":"vs広島",
  "2026-03-08":"vs広島",
  "2026-03-09":"vs広島",
  "2026-03-10":"vsヤクルト",
  "2026-03-11":"vsヤクルト"
};

let currentMonth = 2; 
let currentYear = 2026;

function renderCalendar(){

  const firstDay = new Date(currentYear,currentMonth,1).getDay();
  const lastDate = new Date(currentYear,currentMonth+1,0).getDate();

  const calendarBody = document.getElementById("calendarBody");
  calendarBody.innerHTML="";

  document.getElementById("monthTitle").innerText =
  `${currentYear}年 ${currentMonth+1}月`;

  let date=1;

  for(let i=0;i<6;i++){

    const row=document.createElement("tr");

    for(let j=0;j<7;j++){

      const cell=document.createElement("td");

      if(i===0 && j<firstDay){
        cell.innerHTML="";
      }else if(date>lastDate){
        break;
      }else{

        const fullDate =
        `${currentYear}-${String(currentMonth+1).padStart(2,'0')}-${String(date).padStart(2,'0')}`;

        cell.innerHTML=`<strong>${date}</strong>`;

        if(games[fullDate]){
          cell.innerHTML+=`<div class="game">${games[fullDate]}</div>`;
        }

        date++;
      }

      row.appendChild(cell);
    }

    calendarBody.appendChild(row);
  }
}

document.getElementById("prevMonth").onclick=function(){

  currentMonth--;

  if(currentMonth<0){
    currentMonth=8;
  }

  renderCalendar();
};

document.getElementById("nextMonth").onclick=function(){

  currentMonth++;

  if(currentMonth>8){
    currentMonth=0;
  }

  renderCalendar();
};

renderCalendar();

const games = {

"2026-03-27":"vs ヤクルト",
"2026-03-28":"vs ヤクルト",
"2026-03-29":"vs ヤクルト",

"2026-03-31":"vs 巨人",

"2026-04-01":"vs 巨人",
"2026-04-02":"vs 巨人",

};


let currentMonth = 2;
let currentYear = 2026;


function renderCalendar(){

const firstDay = new Date(currentYear,currentMonth,1).getDay();
const lastDate = new Date(currentYear,currentMonth+1,0).getDate();

const calendarBody=document.getElementById("calendarBody");

calendarBody.innerHTML="";

document.getElementById("monthTitle").innerText=
currentYear+"年 "+(currentMonth+1)+"月";

let date=1;

for(let i=0;i<6;i++){

const row=document.createElement("tr");

for(let j=0;j<7;j++){

const cell=document.createElement("td");

if(i===0 && j<firstDay){

cell.innerHTML="";

}else if(date>lastDate){

break;

}else{

const fullDate=
currentYear+"-"+String(currentMonth+1).padStart(2,'0')+"-"+String(date).padStart(2,'0');

cell.innerHTML="<strong>"+date+"</strong>";

if(games[fullDate]){

cell.innerHTML+="<div class='game'>"+games[fullDate]+"</div>";

}

date++;

}

row.appendChild(cell);

}

calendarBody.appendChild(row);

}

}


document.getElementById("prevMonth").onclick=function(){

currentMonth--;

if(currentMonth<0){
currentMonth=8;
}

renderCalendar();

};


document.getElementById("nextMonth").onclick=function(){

currentMonth++;

if(currentMonth>8){
currentMonth=0;
}

renderCalendar();

};


window.onload = function(){
  renderCalendar();
};

const games = {

/* ===== 3月 ===== */
"2026-03-27":"vs ",
"2026-03-28":"vs ",
"2026-03-29":"vs ",
"2026-03-31":"vs ",

/* ===== 4月 ===== */
"2026-04-01":"vs ",
"2026-04-02":"vs ",
"2026-04-03":"vs ",
"2026-04-04":"vs ",
"2026-04-05":"vs ",
"2026-04-07":"vs ",
"2026-04-08":"vs ",
"2026-04-09":"vs ",
"2026-04-10":"vs ",
"2026-04-11":"vs ",
"2026-04-12":"vs ",

/* ===== 5月 ===== */
"2026-05-01":"vs ",
"2026-05-02":"vs ",
"2026-05-03":"vs ",
"2026-05-04":"vs ",
"2026-05-05":"vs ",
"2026-05-06":"vs ",

/* ===== 6月 ===== */
"2026-06-01":"vs ",
"2026-06-02":"vs ",
"2026-06-03":"vs ",
"2026-06-04":"vs ",
"2026-06-05":"vs ",
"2026-06-06":"vs ",

/* ===== 7月 ===== */
"2026-07-01":"vs ",
"2026-07-02":"vs ",
"2026-07-03":"vs ",
"2026-07-04":"vs ",
"2026-07-05":"vs ",

/* ===== 8月 ===== */
"2026-08-01":"vs ",
"2026-08-02":"vs ",
"2026-08-03":"vs ",
"2026-08-04":"vs ",
"2026-08-05":"vs ",

/* ===== 9月 ===== */
"2026-09-01":"vs ",
"2026-09-02":"vs ",
"2026-09-03":"vs ",
"2026-09-04":"vs ",
"2026-09-05":"vs ",

};

/* =========================
  カレンダー（追加）
========================= */

const games = {
  "2026-03-27":"vs ヤクルト",
  "2026-03-28":"vs ヤクルト",
  "2026-03-29":"vs ヤクルト"
};

let currentMonth = 2;
let currentYear = 2026;

function renderCalendar(){
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();

  const calendarBody = document.getElementById("calendarBody");
  if(!calendarBody) return; // ← これ重要（他機能を壊さない）

  calendarBody.innerHTML = "";

  document.getElementById("monthTitle").innerText =
    currentYear + "年 " + (currentMonth + 1) + "月";

  let date = 1;

  for(let i=0;i<6;i++){
    const row = document.createElement("tr");

    for(let j=0;j<7;j++){
      const cell = document.createElement("td");

      if(i===0 && j<firstDay){
        cell.innerHTML="";
      }else if(date>lastDate){
        break;
      }else{

        const fullDate =
          currentYear + "-" +
          String(currentMonth+1).padStart(2,'0') + "-" +
          String(date).padStart(2,'0');

        cell.innerHTML = "<strong>" + date + "</strong>";

        if(games[fullDate]){
          cell.innerHTML += "<div class='game'>" + games[fullDate] + "</div>";
        }

        date++;
      }

      row.appendChild(cell);
    }

    calendarBody.appendChild(row);
  }
}

document.addEventListener("DOMContentLoaded", function(){

  if(document.getElementById("prevMonth")){
    document.getElementById("prevMonth").onclick = function(){
      currentMonth--;
      renderCalendar();
    };
  }

  if(document.getElementById("nextMonth")){
    document.getElementById("nextMonth").onclick = function(){
      currentMonth++;
      renderCalendar();
    };
  }

  renderCalendar();
});

document.addEventListener("DOMContentLoaded", function(){
  renderCalendar();
});
