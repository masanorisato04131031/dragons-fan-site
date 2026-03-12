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
