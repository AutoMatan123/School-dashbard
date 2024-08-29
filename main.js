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
})

function handleStudentClick(row) {
  // Remove 'active' class from all rows
  document.querySelectorAll('tr').forEach(tr => {
      tr.classList.remove('active');
  });

  // Add 'active' class to the clicked row
  row.classList.add('active');
}
