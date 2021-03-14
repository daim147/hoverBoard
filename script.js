const contain = document.getElementById("container")

const colors = ["red", "blue", "green", "white", "gray", "purple", "yellow", "orange", "wheat"]

const SQAUARES = 500

let active = false
window.addEventListener("mousedown", ()=>{
    active = true
    console.log(active)
})
window.addEventListener("mouseup", ()=>{
    active = false
    console.log(active,"two")
})

for(let i = 0; i < SQAUARES; i++){
    const squares = document.createElement("div")
    squares.classList.add("square")

  

    squares.addEventListener("mouseover", ()=>{
        if(active){
            console.log(active,"three")
            setColor(squares)
        }
    })

    squares.addEventListener("mouseout", ()=>{
        removeColor(squares)
    })


    contain.appendChild(squares)
}

function setColor(square){
    const color = getRandomColor()
    square.style.background = color
    square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`

}
function removeColor(square){
    square.style.background = `#1d1d1d`
    square.style.boxShadow = `0 0 2px #000`
}


function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}
