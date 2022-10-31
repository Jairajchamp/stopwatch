// targetting the button types
var start = document.querySelector(".start");
var stop = document.querySelector(".stop");
var reset = document.querySelector(".reset");
// targetting the class types
hrs = document.querySelector(".hours");
sec = document.querySelector(".second");
min = document.querySelector(".minute");
ms = document.querySelector(".ms");
// to make the value 0 because to add ++ so that
var hours=minute=second=micro=0,startinterval;
// function is running when the button its clicked


start.addEventListener("click",function(){
   document.querySelector("body").style.backgroundColor="black";
   document.querySelector(".box").style.backgroundColor="grey";
   startinterval = setInterval(function(){
   micro++;
   ms.innerText=micro;
   if (micro==100){
     micro=0
     second++;
     sec.innerText=second;
     if (second==60){
       second = 0;
       minute++;
       min.innerText = minute;
       if (minute==60){
         minute =0;
         hours++;
       }
     }
   }
},10);
});

// to stop the timer when its touch
stop.addEventListener("click",function(){
   document.querySelector("body").style.backgroundColor="black";
  clearInterval(startinterval);
})
// reset the value of the timer
reset.addEventListener("click",function(){
   document.querySelector("body").style.backgroundColor="black";
var hours=minute=second=micro=0;
  phrs = hours<10?"0"+hours:hours;
    hrs.innerText=phrs;
    sec.innerText= phrs ;
    min.innerText = phrs;
    ms.innerText = phrs;
});
