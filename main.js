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

  $("#studentForm").submit(function(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    // Get the form values
    const name = $("#studentName").val();
    const id = $("#studentId").val();
    const studentClass = $("#studentClass").val();
    const age = $("#studentAge").val();
    const gender = $("#studentGender").val();
    const email = $("#studentEmail").val();

    // Create a new table row
    const newRow = `<tr onclick="handleStudentClick(this)">
      <td class="profile_name"><img src="https://i.postimg.cc/g2M32zcz/image.png" alt="img"> ${name}</td>
      <td>${id}</td>
      <td>${studentClass}</td>
      <td>${age}</td>
      <td>${gender}</td>
      <td>${email}</td>
    </tr>`;

    // Add the new row to the table
    $("table").append(newRow);

    // Hide the modal
    $("#myModal").fadeOut();

    // Clear the form
    $("#studentForm")[0].reset();
  });
});

function handleStudentClick(row) {
  // Remove 'active' class from all rows
  document.querySelectorAll('tr').forEach(tr => {
    tr.classList.remove('active');
  });

  // Add 'active' class to the clicked row
  row.classList.add('active');
}
