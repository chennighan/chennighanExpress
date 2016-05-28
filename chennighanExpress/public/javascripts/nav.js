$(function() {
   if($(location).attr("pathname") == "/") {
      $(".homeTab").addClass("active");
      $(".aboutTab").removeClass("active");
   } else if($(location).attr("pathname") == "/about") {
      $(".aboutTab").addClass("active");
      $(".homeTab").removeClass("active");
   } else {
      console.log("bad conditional...");
   }
});