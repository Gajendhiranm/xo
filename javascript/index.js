      let count = 1;
        var text = document.querySelector(".demo");
document.querySelectorAll(".box").forEach((box)=>{
    box.addEventListener("click",(e)=>{
        console.log(e);
        if((box.innerHTML === "x")||(box.innerHTML==="o")){
            alert("already clicked"); 
        }else{
            if(count%2 == 0){
            playAudio();
            text.innerHTML="X clicked";
            box.innerHTML="x";
            count++;
            console.log("x clicked "+count);
            check();
    }
    else if(count%2 != 0){
        playAudio();
        text.innerHTML="o clicked";
        box.innerHTML="o";
        count++;
        console.log("o clicked "+count);
         check();
    }
        }
    });
})
function playAudio(){
    var audio = document.getElementById("audio");
        audio.play();
  
}
function check(){
    validateO();
    validateX();   
    if(!(validateO() || validateX())&& count>=10){
        validateDraw();

    }
}
function validateX(){
    console.log("called at draw");
    if((document.getElementById("one").innerHTML==="x" && document.getElementById("two").innerHTML==="x" && document.getElementById("three").innerHTML==="x")||
    (document.getElementById("four").innerHTML==="x" && document.getElementById("five").innerHTML==="x" && document.getElementById("six").innerHTML==="x")||
    (document.getElementById("seven").innerHTML==="x" && document.getElementById("eight").innerHTML==="x" && document.getElementById("nine").innerHTML==="x")||
    (document.getElementById("one").innerHTML==="x" && document.getElementById("four").innerHTML==="x" && document.getElementById("seven").innerHTML==="x")||
    (document.getElementById("one").innerHTML==="x" && document.getElementById("five").innerHTML==="x" && document.getElementById("nine").innerHTML==="x")||
    (document.getElementById("seven").innerHTML==="x" && document.getElementById("five").innerHTML==="x" && document.getElementById("three").innerHTML==="x")||
    (document.getElementById("two").innerHTML==="x" && document.getElementById("five").innerHTML==="x" && document.getElementById("eight").innerHTML==="x")||
    (document.getElementById("nine").innerHTML==="x" && document.getElementById("six").innerHTML==="x" && document.getElementById("three").innerHTML==="x")
    ){
        alerting("x wins");
        return true;
    }
    return false;
}
function validateO(){
if((document.getElementById("one").innerHTML==="o" && document.getElementById("two").innerHTML==="o" && document.getElementById("three").innerHTML==="o")||
(document.getElementById("four").innerHTML==="o" && document.getElementById("five").innerHTML==="o" && document.getElementById("six").innerHTML==="o")||
(document.getElementById("seven").innerHTML==="o" && document.getElementById("eight").innerHTML==="o" && document.getElementById("nine").innerHTML==="o")||
(document.getElementById("one").innerHTML==="o" && document.getElementById("four").innerHTML==="o" && document.getElementById("seven").innerHTML==="o")||
(document.getElementById("one").innerHTML==="o" && document.getElementById("five").innerHTML==="o" && document.getElementById("nine").innerHTML==="o")||
(document.getElementById("seven").innerHTML==="o" && document.getElementById("five").innerHTML==="o" && document.getElementById("three").innerHTML==="o")||
(document.getElementById("two").innerHTML==="o" && document.getElementById("five").innerHTML==="o" && document.getElementById("eight").innerHTML==="o")||
(document.getElementById("nine").innerHTML==="o" && document.getElementById("six").innerHTML==="o" && document.getElementById("three").innerHTML==="o")
)
{
    alerting("O wins");
    return true;
}
return false;
}
function validateDraw(){
    alerting("draw");
}
function alerting(a){
    var audio = document.getElementById("audio_two");
    audio.play();
     var para = document.createElement("P");        
     para.innerText =`${a}  the match` ;               
     document.body.appendChild(para); 
     para.classList.add("info");
   setInterval(()=>{
        window.location.reload();
    },4000);     
}
