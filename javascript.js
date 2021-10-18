(function() {
    //
    
    var box = document.getElementById('box');

    var x = 150

    x = x + 100

    var y = x + "px"

   
    document.getElementById("growButton").addEventListener("click", function(){
       box.style.height(y);
       box.style.width(y);
   });

   
   
   
  
})();
