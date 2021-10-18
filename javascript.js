(function() {
    //
    
    var box = document.getElementById('box');

    var x = 150

    x = x + 100

    var y = x + "px"

   
    document.getElementById("growButton").addEventListener("click", function(){
       box.style.height(y)
   });
   document.getElementById("growButton").addEventListener("click", fucntion(){
       box.style.width(y)
   });
   
   
   
   
  
})();
