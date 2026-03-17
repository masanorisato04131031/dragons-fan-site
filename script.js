/* =========================
  安全対策：JS読み込み確認
========================= */
console.log("script.js 読み込みOK");


/* =========================
  スライド（壊さない）
========================= */
document.addEventListener("DOMContentLoaded", function(){

  const slides = document.querySelectorAll(".slide");

  if(slides.length > 0){
    let slideIndex = 0;

    setInterval(() => {
      slides.forEach(s => s.classList.remove("active"));
      slideIndex++;
      if (slideIndex >= slides.length) slideIndex = 0;
      slides[slideIndex].classList.add("active");
    }, 4000);
  }

});


/* =========================
  グラフ（あっても無くてもOK）
========================= */
document.addEventListener("DOMContentLoaded", function(){

  const ctx = document.getElementById("teamChart");

  if (ctx && typeof Chart !== "undefined") {
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["2015","2016","2017","2018","2019","2020","2021","2022","2023","2024"],
        datasets: [
          {
            label: "勝利",
            data: [62,58,59,63,68,60,55,66,56,65]
          },
          {
            label: "敗戦",
            data: [80,82,79,78,73,76,84,69,82,73]
          }
        ]
      }
    });
  }

});


/* =========================
  選手名鑑（壊さない）
========================= */
function showPlayer(name){
  console.log(name + " がクリックされました");
  // 元のモーダル処理があればそのまま残してください
}


/* =========================
  試合ハイライト動画（壊さない）
========================= */
document.addEventListener("DOMContentLoaded", function(){

  const videos = document.querySelectorAll("video");

  if(videos.length > 0){
    videos.forEach(v => {
      v.addEventListener("click", () => {
        v.play();
      });
    });
  }

});


/* =========================
  カレンダー（追加）
========================= */
document.addEventListener("DOMContentLoaded", function(){

  const calendarBody = document.getElementById("calendarBody");
  const monthTitle = document.getElementById("monthTitle");
  const prevBtn = document.getElementById("prevMonth");
  const nextBtn = document.getElementById("nextMonth");

  // カレンダーが無いページは何もしない（超重要）
  if(!calendarBody || !monthTitle || !prevBtn || !nextBtn){
    console.log("カレンダー要素なし → スキップ");
    return;
  }

  const games = {
    "2026-03-27":"vs 広島",
    "2026-03-28":"vs 広島",
    "2026-03-29":"vs 広島",
    "2026-03-31":"vs 巨人",
    "2026-04-01":"vs 巨人",
    "2026-04-02":"vs 巨人",
    "2026-04-10":"vs 阪神",
    "2026-04-11":"vs 阪神",
    "2026-04-12":"vs 阪神"
  };

  let currentMonth = 2;
  let currentYear = 2026;

  function renderCalendar(){

    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();

    calendarBody.innerHTML = "";

    monthTitle.innerText =
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

  prevBtn.onclick = function(){
    currentMonth--;
    if(currentMonth < 0){
      currentMonth = 11;
      currentYear--;
    }
    renderCalendar();
  };

  nextBtn.onclick = function(){
    currentMonth++;
    if(currentMonth > 11){
      currentMonth = 0;
      currentYear++;
    }
    renderCalendar();
  };

  renderCalendar();

});
