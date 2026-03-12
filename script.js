const images = [

"https://picsum.photos/1200/400?1",
"https://picsum.photos/1200/400?2",
"https://picsum.photos/1200/400?3"

]

let current = 0

const slide = document.getElementById("slide")

function changeSlide(){

slide.src = images[current]

current++

if(current >= images.length){

current = 0

}

}

changeSlide()

setInterval(changeSlide,3000)
