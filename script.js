function toggleMenu(){

const menu=document.getElementById("menu")

if(menu.style.display==="block"){
menu.style.display="none"
}else{
menu.style.display="block"
}

}



const newsData=[

"ドラゴンズ開幕戦勝利！",
"高橋宏斗 完投勝利",
"岡林勇希 3安打活躍",
"新外国人選手加入"

]

const newsContainer=document.getElementById("news-container")

newsData.forEach(n=>{

const div=document.createElement("div")

div.className="news"

div.innerHTML="<p>"+n+"</p>"

newsContainer.appendChild(div)

})



new Chart(

document.getElementById("rankChart"),

{
type:"bar",

data:{

labels:["阪神","巨人","中日","広島","DeNA","ヤクルト"],

datasets:[{
label:"勝利数",
data:[70,65,60,55,50,45]
}]

}

})



new Chart(

document.getElementById("statsChart"),

{

type:"line",

data:{

labels:["4月","5月","6月","7月","8月"],

datasets:[{

label:"勝利数",
data:[10,18,28,40,55]

}]

}

})
