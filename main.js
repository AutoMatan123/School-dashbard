students = ["Gururaj"],["001","SY","BCA","19","Male","gruraj@gmail.com"],
["Sanket"],["012","TY","BCS","20","Male","sanket@gmail.com"],
["Hermione"],["003","SY","BCA","19","Female","Hermione@gmail.com"],
["Json"],["009","SY","BCA","19","Male","json@gmail.com"],
["Rose"],["021","SY","BCA","19","Female","Rose@gmail.com"],
["Lily"],["971","SY","BCA","21","Female","Lily@gmail.com"],
["Tushar"],["311","FY","BCA","19","Male","Tushar@gmail.com"],
["Aliana"],["4011","SY","BCA","19","Female","Aliana@gmail.com"],
["Alex"],["011","SY","BCA","19","Male","Alex@gmail.com"],
["Sieena"],["0041","SY","BCA","19","Male","Sieena@gmail.com"],
["Devid"],["0311","TY","BCA","20","Male","Devid@gmail.com"],
["Josh"],["0041","SY","BCA","19","Male","Josh@gmail.com"],
["John"],["0013","SY","BCA","19","Male","John@gmail.com"],
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
      <td class="profile_name"><img src="https://png.pngtree.com/png-vector/20220608/ourmid/pngtree-mysterious-user-contact-person-profile-png-image_4816440.png" alt="img"> ${name}</td>
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
