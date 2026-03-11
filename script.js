function toggleOchiai(){

var detail = document.getElementById("ochiai-detail");

if(detail.style.display === "none"){
detail.style.display = "block";
}else{
detail.style.display = "none";
}

}


/* 順位グラフ */

const ctx = document.getElementById('rankChart');

new Chart(ctx, {
type: 'line',
data: {
labels: ['2017','2018','2019','2020','2021','2022','2023'],
datasets: [{
label: '中日ドラゴンズ順位',
data: [5,5,6,3,5,6,6],
borderWidth: 3
}]
},
options: {
scales: {
y: {
reverse: true,
min: 1,
max: 6
}
}
}
});
