const images=[

"./stadium.jpg"

]

let current=0

const slide=document.getElementById("slide")

function changeSlide(){

slide.src=images[current]

}

changeSlide()
