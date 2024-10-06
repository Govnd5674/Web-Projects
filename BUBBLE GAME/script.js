var timer = 6;
var score = 0;
var hitrn = 0;

function makebubble(){
    var clutter = '';
for(var i = 1 ; i<169 ; i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;

}
document.querySelector("#p-btm").innerHTML = clutter;
}
makebubble();


function runtimer(){
    var timerint = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            document.querySelector("#p-btm").innerHTML = "<h1>GAME OVER</h1>";
            clearInterval(timerint);
        }
    },1000)
}
runtimer();


function GetNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn
}
GetNewHit();


function incscore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}


document.querySelector("#p-btm").addEventListener("click",function(details){
    var clickno = Number(details.target.textContent);
    if(clickno === hitrn){
        incscore();
        makebubble();
        GetNewHit();
    }
})