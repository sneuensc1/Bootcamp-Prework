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

    document.getElementById("blueButton").addEventListener("click", function(){
        box.style.backgroundColor = "blue";
});

   var opacity = 1;

   document.getElementById("fadeButton").addEventListener("click", function() {
        opacity = opacity - 0.1;
        box.style.opacity = opacity;
   });

   document.getElementById("resetButton").addEventListener("click", function() {
        x = 150;
        var y = x + "px";
        opacity = 1;
        box.style.height = y;
        box.style.width = y;
        box.style.opacity = opacity;
        box.style.backgroundColor = "orange";
   });

console.log(box.style)

   
  
})();
