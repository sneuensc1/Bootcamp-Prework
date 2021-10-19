(function() {
   
    var box = document.getElementById('box');
    var size = 150;
    
    document.getElementById("growButton").addEventListener("click", function(){
      size = size + 50;
      box.style.height = size + "px";
      box.style.width = size + "px";
   });
    
   document.getElementById("blueButton").addEventListener("click", function(){
      box.style.backgroundColor = "blue";
   });
  
   var opacity = 1;
   
   document.getElementById("fadeButton").addEventListener("click", function() {
      opacity = opacity - 0.1;
      box.style.opacity = opacity;
   });
   
   document.getElementById("resetButton").addEventListener("click", function() {
      size = 150;
      opacity = 1;
      box.style.height = size + "px";
      box.style.width = size + "px";
      box.style.opacity = opacity;
      box.style.backgroundColor = "orange";
   });
})();
