let ok = true;
function createLines(){
    if(!ok) return;
    let line= document.createElement("div");
    line.setAttribute("class", "line") // setAttribute(属性の追加前、新しい属性追加)
    document.body.appendChild(line)
    line.style.left = Math.random()*innerWidth + "px";
    line.style.bottom = Math.random()*innerWidth + "px";
    line.style.animationDuration =12 + Math.random()*12 + "s";
    line.style.animationPlayState = "running";
    setTimeout(() => {
        document.body.removeChild(line)
    }, 11000);
}
setInterval(
    function(){
        if(ok){
            createLines();
        }
}, 400)

document.addEventListener("DOMContentLoaded", function() {
const slider = document.querySelector(".slider")
const button = document.querySelector(".button")
const h2 = document.querySelector("h2")
let isAnimating = true;
button.addEventListener("click", function(){
    ok = !ok;
    if(isAnimating){
    slider.style.animationPlayState = "paused"
    const lines = document.querySelectorAll(".line")
    lines.forEach(line=>{
        line.style.animationPlayState = "paused"
    });
    h2.textContent = "Restart"
    }else{
    slider.style.animationPlayState = "running";
    const lines = document.querySelectorAll(".line")
    lines.forEach(line=>{
        line.style.animationPlayState = "running"
    })
    h2.textContent = "Stop"
    }
    isAnimating =! isAnimating;// 状態を反転// 論理否定演算子である!を用いることでここで一旦isAnimatingをfalse(またはtrue)にしている
})
})


