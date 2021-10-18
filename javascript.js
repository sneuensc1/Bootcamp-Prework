(function() {
    //
    
    var box = document.getElementById('box');

    var x = 150;
   
    document.getElementById("growButton").addEventListener("click", function(){
       x = x + 50;
       var y = x + "px";
       box.style.height = y;
       box.style.width = y;
   });

a = 1;

   document.getElementById("fadeButton").addEventListener("click", function() {
        a = 1 - 0.1;
        box.style.opacity = a;
   });





   
  
})();
