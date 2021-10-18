(function() {
    //
    
    var box = document.getElementById('box');

    var x = "150px";

    x= x + "100px";

   
    document.getElementById("growButton").addEventListener("click", function(){
       box.style.height = x;
       box.style.width = x;
   });

   
   
   
  
})();
