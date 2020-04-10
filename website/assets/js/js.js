/***************************** Tab shifting in portfolio *********************************** */

$(document).ready(function(){
    $(".tabs-list th a").click(function(e){
       e.preventDefault();
    });
    $(".tabs-list th").click(function(){
       var tabid = $(this).find("a").attr("href");
       $(".tabs-list th,.tabs div.tab").removeClass("actives"); 
       $(".tab").hide();
       $(tabid).show(); 
       $(this).addClass("actives");
    });
  });
  
  