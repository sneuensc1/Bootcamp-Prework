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

   
   
   
  
})();
