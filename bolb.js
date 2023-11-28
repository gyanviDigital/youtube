function on() {
    var name=document.getElementById('on').innerText;
       if(name=='On'){
       document.getElementById('on').innerText='Off';
       var on=document.getElementById('ofbolb');
on.src='onBolb.png';
   }
   else{
     document.getElementById('on').innerText='On';
       var on=document.getElementById('ofbolb');
on.src='ofBolb.png';
   }
} 