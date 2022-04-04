$(document).ready(function() {
    
    $("#submit").click(function(){        
  

 const formName = $( "#name").val();
 const formEmail = $("#email").val();
 const formNum= $("#phone").val();
 const formMesg = $( "#message").val();

 const required = [formName, formEmail, formNum]
 
 for ( index = 0; index < required.length; index++) {
   
    if (required[index] == "" ){
    
     $("p").html ("Please Fill Out Required Fields")
     $("p:first").addClass("warning"); 
  
      $("label").addClass("warning")
      $( "label").css( "color","red")}

      else {
                $("p").removeClass("warning")
                $("label").removeClass("warning")
                $("p").html(" ")

      }

    }
     
   const label = $("label")

    if (!$(label).hasClass("warning")) {

        $("form").remove();
     
        $("h2").html("Thanks for your feedback!")
         
    
        
    }

})

})


