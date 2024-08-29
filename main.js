$(document).ready(function() {
  $("#openModalButton").click(function() {
      $("#myModal").fadeIn();
  });
  
  $(".close, .btn-default").click(function() {
      $("#myModal").fadeOut();
  });
  
  $(window).click(function(event) {
      if ($(event.target).is("#myModal")) {
          $("#myModal").fadeOut();
      }
  });
});