function togglePlayer(id){

var players = document.querySelectorAll(".player-detail");

players.forEach(function(p){

p.style.display="none";

});

var target = document.getElementById(id);

target.style.display="block";

}


/* スライドショー */

var images=[
"images/746428599603f01dcc228c.jpg",
"images/746428599603f01dcc228c.jpg",
"images/746428599603f01dcc228c.jpg"
];

var num=0;

function slideShow(){

num++;

if(num>=images.length){
num=0;
}

document.getElementById("slide").src=images[num];

}

setInterval(slideShow,3000);


/* 順位グラフ */

const ctx=document.getElementById('rankChart');

new Chart(ctx,{

type:'line',

data:{

labels:['2018','2019','2020','2021','2022','2023'],

datasets:[{

label:'中日ドラゴンズ順位',

data:[5,6,3,5,6,6],

borderWidth:3

}]

},

options:{

scales:{

y:{

reverse:true,

min:1,

max:6

}

}

}

});
