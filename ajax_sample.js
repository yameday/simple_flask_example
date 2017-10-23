$(document).ready(function() {

   var search_word ="konfu";
   var qurl="http://DESTINATION.com:5000";
   $.ajax({
            type: "POST",
            cache: false,
            data:{keyword:search_word},
            url: qurl,
            dataType: "json",
            success: function(data) { 
                console.log(data);                    
            },
            error: function(jqXHR) {
                alert("error: " + jqXHR.status);
                console.log(jqXHR);

            }
        })
});