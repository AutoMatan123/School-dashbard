document.getElementById('addStudentButton').addEventListener('click', function() {
    // Create the modal elements
    const modalContainer = document.getElementById('modalContainer');
    modalContainer.innerHTML = '';  // Clear any existing modals

    const modalBackdrop = document.createElement('div');
    const modal = document.createElement('div');
    const modalDialog = document.createElement('div');
    const modalContent = document.createElement('div');
    const modalHeader = document.createElement('div');
    const modalBody = document.createElement('div');
    const modalFooter = document.createElement('div');
    const closeButton = document.createElement('button');
    const saveButton = document.createElement('button');

    // Set up classes and attributes
    modalBackdrop.className = 'modal-backdrop fade show';
    modal.className = 'modal fade show';
    modal.style.display = 'block';
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';  // Center the modal
    modalDialog.className = 'modal-dialog';
    modalContent.className = 'modal-content';
    modalHeader.className = 'modal-header';
    modalBody.className = 'modal-body';
    modalFooter.className = 'modal-footer';
    closeButton.className = 'btn btn-secondary';
    saveButton.className = 'btn btn-primary';

    // Add text content
    modalHeader.innerHTML = '<h5 class="modal-title">Add Student</h5>';
    closeButton.innerText = 'Close';
    saveButton.innerText = 'Save changes';

    // Add modal body content
    modalBody.innerHTML = `
        <form>
          <div class="mb-3">
            <label for="studentName" class="form-label">Student Name</label>
            <input type="text" class="form-control" id="studentName">
          </div>
          <div class="mb-3">
            <label for="studentID" class="form-label">Student ID</label>
            <input type="text" class="form-control" id="studentID">
          </div>
          <div class="mb-3">
            <label for="studentClass" class="form-label">Class</label>
            <input type="text" class="form-control" id="studentClass">
          </div>
          <div class="mb-3">
            <label for="studentAge" class="form-label">Age</label>
            <input type="number" class="form-control" id="studentAge">
          </div>
          <div class="mb-3">
            <label for="studentEmail" class="form-label">Email</label>
            <input type="email" class="form-control" id="studentEmail">
          </div>
        </form>
    `;

    // Append elements
    modalFooter.appendChild(closeButton);
    modalFooter.appendChild(saveButton);
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);
    modalDialog.appendChild(modalContent);
    modal.appendChild(modalDialog);
    modalContainer.appendChild(modalBackdrop);
    modalContainer.appendChild(modal);

    // Close modal on button click
    closeButton.addEventListener('click', function() {
        modalContainer.innerHTML = '';
    });

    saveButton.addEventListener('click', function() {
        // Add save functionality here
        modalContainer.innerHTML = '';
    });

    // Close modal on backdrop click
    modalBackdrop.addEventListener('click', function() {
        modalContainer.innerHTML = '';
    });
});

document.getElementById('gururaj').addEventListener('click', function() {
  // Create the modal elements
  const modalContainer = document.getElementById('modalContainer');
  modalContainer.innerHTML = '';  // Clear any existing modals

  const modalBackdrop = document.createElement('div');
  const modal = document.createElement('div');
  const modalDialog = document.createElement('div');
  const modalContent = document.createElement('div');
  const modalHeader = document.createElement('div');
  const modalBody = document.createElement('div');
  const modalFooter = document.createElement('div');
  const closeButton = document.createElement('button');
  const saveButton = document.createElement('button');

  // Set up classes and attributes
  modalBackdrop.className = 'modal-backdrop fade show';
  modal.className = 'modal fade show';
  modal.style.display = 'block';
  modal.style.position = 'fixed';
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%)';  // Center the modal
  modalDialog.className = 'modal-dialog';
  modalContent.className = 'modal-content';
  modalHeader.className = 'modal-header';
  modalBody.className = 'modal-body';
  modalFooter.className = 'modal-footer';
  closeButton.className = 'btn btn-secondary';
  saveButton.className = 'btn btn-primary';

  // Add text content
  modalHeader.innerHTML = '<h5 class="modal-title">Add Student</h5>';
  closeButton.innerText = 'Close';
  saveButton.innerText = 'Save changes';

  // Add modal body content
  modalBody.innerHTML = `
      <form>
        <div class="mb-3">
          <label for="studentName" class="form-label">Student Name</label>
          <input type="text" class="form-control" id="studentName">
        </div>
        <div class="mb-3">
          <label for="studentID" class="form-label">Student ID</label>
          <input type="text" class="form-control" id="studentID">
        </div>
        <div class="mb-3">
          <label for="studentClass" class="form-label">Class</label>
          <input type="text" class="form-control" id="studentClass">
        </div>
        <div class="mb-3">
          <label for="studentAge" class="form-label">Age</label>
          <input type="number" class="form-control" id="studentAge">
        </div>
        <div class="mb-3">
          <label for="studentEmail" class="form-label">Email</label>
          <input type="email" class="form-control" id="studentEmail">
        </div>
      </form>
  `;

  // Append elements
  modalFooter.appendChild(closeButton);
  modalFooter.appendChild(saveButton);
  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalContent.appendChild(modalFooter);
  modalDialog.appendChild(modalContent);
  modal.appendChild(modalDialog);
  modalContainer.appendChild(modalBackdrop);
  modalContainer.appendChild(modal);

  // Close modal on button click
  closeButton.addEventListener('click', function() {
      modalContainer.innerHTML = '';
  });

  saveButton.addEventListener('click', function() {
      // Add save functionality here
      modalContainer.innerHTML = '';
  });

  // Close modal on backdrop click
  modalBackdrop.addEventListener('click', function() {
      modalContainer.innerHTML = '';
  });
});

document.getElementById('sanket').addEventListener('click', function() {
  // Create the modal elements
  const modalContainer = document.getElementById('modalContainer');
  modalContainer.innerHTML = '';  // Clear any existing modals

  const modalBackdrop = document.createElement('div');
  const modal = document.createElement('div');
  const modalDialog = document.createElement('div');
  const modalContent = document.createElement('div');
  const modalHeader = document.createElement('div');
  const modalBody = document.createElement('div');
  const modalFooter = document.createElement('div');
  const closeButton = document.createElement('button');
  const saveButton = document.createElement('button');

  // Set up classes and attributes
  modalBackdrop.className = 'modal-backdrop fade show';
  modal.className = 'modal fade show';
  modal.style.display = 'block';
  modal.style.position = 'fixed';
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%)';  // Center the modal
  modalDialog.className = 'modal-dialog';
  modalContent.className = 'modal-content';
  modalHeader.className = 'modal-header';
  modalBody.className = 'modal-body';
  modalFooter.className = 'modal-footer';
  closeButton.className = 'btn btn-secondary';
  saveButton.className = 'btn btn-primary';

  // Add text content
  modalHeader.innerHTML = '<h5 class="modal-title">Add Student</h5>';
  closeButton.innerText = 'Close';
  saveButton.innerText = 'Save changes';

  // Add modal body content
  modalBody.innerHTML = `
      <form>
        <div class="mb-3">
          <label for="studentName" class="form-label">Student Name</label>
          <input type="text" class="form-control" id="studentName">
        </div>
        <div class="mb-3">
          <label for="studentID" class="form-label">Student ID</label>
          <input type="text" class="form-control" id="studentID">
        </div>
        <div class="mb-3">
          <label for="studentClass" class="form-label">Class</label>
          <input type="text" class="form-control" id="studentClass">
        </div>
        <div class="mb-3">
          <label for="studentAge" class="form-label">Age</label>
          <input type="number" class="form-control" id="studentAge">
        </div>
        <div class="mb-3">
          <label for="studentEmail" class="form-label">Email</label>
          <input type="email" class="form-control" id="studentEmail">
        </div>
      </form>
  `;

  // Append elements
  modalFooter.appendChild(closeButton);
  modalFooter.appendChild(saveButton);
  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalContent.appendChild(modalFooter);
  modalDialog.appendChild(modalContent);
  modal.appendChild(modalDialog);
  modalContainer.appendChild(modalBackdrop);
  modalContainer.appendChild(modal);

  // Close modal on button click
  closeButton.addEventListener('click', function() {
      modalContainer.innerHTML = '';
  });

  saveButton.addEventListener('click', function() {
      // Add save functionality here
      modalContainer.innerHTML = '';
  });

  // Close modal on backdrop click
  modalBackdrop.addEventListener('click', function() {
      modalContainer.innerHTML = '';
  });
});

document.getElementById('hermione').addEventListener('click', function() {
  // Create the modal elements
  const modalContainer = document.getElementById('modalContainer');
  modalContainer.innerHTML = '';  // Clear any existing modals

  const modalBackdrop = document.createElement('div');
  const modal = document.createElement('div');
  const modalDialog = document.createElement('div');
  const modalContent = document.createElement('div');
  const modalHeader = document.createElement('div');
  const modalBody = document.createElement('div');
  const modalFooter = document.createElement('div');
  const closeButton = document.createElement('button');
  const saveButton = document.createElement('button');

  // Set up classes and attributes
  modalBackdrop.className = 'modal-backdrop fade show';
  modal.className = 'modal fade show';
  modal.style.display = 'block';
  modal.style.position = 'fixed';
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%)';  // Center the modal
  modalDialog.className = 'modal-dialog';
  modalContent.className = 'modal-content';
  modalHeader.className = 'modal-header';
  modalBody.className = 'modal-body';
  modalFooter.className = 'modal-footer';
  closeButton.className = 'btn btn-secondary';
  saveButton.className = 'btn btn-primary';

  // Add text content
  modalHeader.innerHTML = '<h5 class="modal-title">Add Student</h5>';
  closeButton.innerText = 'Close';
  saveButton.innerText = 'Save changes';

  // Add modal body content
  modalBody.innerHTML = `
      <form>
        <div class="mb-3">
          <label for="studentName" class="form-label">Student Name</label>
          <input type="text" class="form-control" id="studentName">
        </div>
        <div class="mb-3">
          <label for="studentID" class="form-label">Student ID</label>
          <input type="text" class="form-control" id="studentID">
        </div>
        <div class="mb-3">
          <label for="studentClass" class="form-label">Class</label>
          <input type="text" class="form-control" id="studentClass">
        </div>
        <div class="mb-3">
          <label for="studentAge" class="form-label">Age</label>
          <input type="number" class="form-control" id="studentAge">
        </div>
        <div class="mb-3">
          <label for="studentEmail" class="form-label">Email</label>
          <input type="email" class="form-control" id="studentEmail">
        </div>
      </form>
  `;

  // Append elements
  modalFooter.appendChild(closeButton);
  modalFooter.appendChild(saveButton);
  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalContent.appendChild(modalFooter);
  modalDialog.appendChild(modalContent);
  modal.appendChild(modalDialog);
  modalContainer.appendChild(modalBackdrop);
  modalContainer.appendChild(modal);

  // Close modal on button click
  closeButton.addEventListener('click', function() {
      modalContainer.innerHTML = '';
  });

  saveButton.addEventListener('click', function() {
      // Add save functionality here
      modalContainer.innerHTML = '';
  });

  // Close modal on backdrop click
  modalBackdrop.addEventListener('click', function() {
      modalContainer.innerHTML = '';
  });
});

document.getElementById('jason').addEventListener('click', function() {
  // Create the modal elements
  const modalContainer = document.getElementById('modalContainer');
  modalContainer.innerHTML = '';  // Clear any existing modals

  const modalBackdrop = document.createElement('div');
  const modal = document.createElement('div');
  const modalDialog = document.createElement('div');
  const modalContent = document.createElement('div');
  const modalHeader = document.createElement('div');
  const modalBody = document.createElement('div');
  const modalFooter = document.createElement('div');
  const closeButton = document.createElement('button');
  const saveButton = document.createElement('button');

  // Set up classes and attributes
  modalBackdrop.className = 'modal-backdrop fade show';
  modal.className = 'modal fade show';
  modal.style.display = 'block';
  modal.style.position = 'fixed';
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%)';  // Center the modal
  modalDialog.className = 'modal-dialog';
  modalContent.className = 'modal-content';
  modalHeader.className = 'modal-header';
  modalBody.className = 'modal-body';
  modalFooter.className = 'modal-footer';
  closeButton.className = 'btn btn-secondary';
  saveButton.className = 'btn btn-primary';

  // Add text content
  modalHeader.innerHTML = '<h5 class="modal-title">Add Student</h5>';
  closeButton.innerText = 'Close';
  saveButton.innerText = 'Save changes';

  // Add modal body content
  modalBody.innerHTML = `
      <form>
        <div class="mb-3">
          <label for="studentName" class="form-label">Student Name</label>
          <input type="text" class="form-control" id="studentName">
        </div>
        <div class="mb-3">
          <label for="studentID" class="form-label">Student ID</label>
          <input type="text" class="form-control" id="studentID">
        </div>
        <div class="mb-3">
          <label for="studentClass" class="form-label">Class</label>
          <input type="text" class="form-control" id="studentClass">
        </div>
        <div class="mb-3">
          <label for="studentAge" class="form-label">Age</label>
          <input type="number" class="form-control" id="studentAge">
        </div>
        <div class="mb-3">
          <label for="studentEmail" class="form-label">Email</label>
          <input type="email" class="form-control" id="studentEmail">
        </div>
      </form>
  `;

  // Append elements
  modalFooter.appendChild(closeButton);
  modalFooter.appendChild(saveButton);
  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalContent.appendChild(modalFooter);
  modalDialog.appendChild(modalContent);
  modal.appendChild(modalDialog);
  modalContainer.appendChild(modalBackdrop);
  modalContainer.appendChild(modal);

  // Close modal on button click
  closeButton.addEventListener('click', function() {
      modalContainer.innerHTML = '';
  });

  saveButton.addEventListener('click', function() {
      // Add save functionality here
      modalContainer.innerHTML = '';
  });

  // Close modal on backdrop click
  modalBackdrop.addEventListener('click', function() {
      modalContainer.innerHTML = '';
  });
});

document.getElementById('rose').addEventListener('click', function() {
  // Create the modal elements
  const modalContainer = document.getElementById('modalContainer');
  modalContainer.innerHTML = '';  // Clear any existing modals

  const modalBackdrop = document.createElement('div');
  const modal = document.createElement('div');
  const modalDialog = document.createElement('div');
  const modalContent = document.createElement('div');
  const modalHeader = document.createElement('div');
  const modalBody = document.createElement('div');
  const modalFooter = document.createElement('div');
  const closeButton = document.createElement('button');
  const saveButton = document.createElement('button');

  // Set up classes and attributes
  modalBackdrop.className = 'modal-backdrop fade show';
  modal.className = 'modal fade show';
  modal.style.display = 'block';
  modal.style.position = 'fixed';
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%)';  // Center the modal
  modalDialog.className = 'modal-dialog';
  modalContent.className = 'modal-content';
  modalHeader.className = 'modal-header';
  modalBody.className = 'modal-body';
  modalFooter.className = 'modal-footer';
  closeButton.className = 'btn btn-secondary';
  saveButton.className = 'btn btn-primary';

  // Add text content
  modalHeader.innerHTML = '<h5 class="modal-title">Add Student</h5>';
  closeButton.innerText = 'Close';
  saveButton.innerText = 'Save changes';

  // Add modal body content
  modalBody.innerHTML = `
      <form>
        <div class="mb-3">
          <label for="studentName" class="form-label">Student Name</label>
          <input type="text" class="form-control" id="studentName">
        </div>
        <div class="mb-3">
          <label for="studentID" class="form-label">Student ID</label>
          <input type="text" class="form-control" id="studentID">
        </div>
        <div class="mb-3">
          <label for="studentClass" class="form-label">Class</label>
          <input type="text" class="form-control" id="studentClass">
        </div>
        <div class="mb-3">
          <label for="studentAge" class="form-label">Age</label>
          <input type="number" class="form-control" id="studentAge">
        </div>
        <div class="mb-3">
          <label for="studentEmail" class="form-label">Email</label>
          <input type="email" class="form-control" id="studentEmail">
        </div>
      </form>
  `;

  // Append elements
  modalFooter.appendChild(closeButton);
  modalFooter.appendChild(saveButton);
  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalContent.appendChild(modalFooter);
  modalDialog.appendChild(modalContent);
  modal.appendChild(modalDialog);
  modalContainer.appendChild(modalBackdrop);
  modalContainer.appendChild(modal);

  // Close modal on button click
  closeButton.addEventListener('click', function() {
      modalContainer.innerHTML = '';
  });

  saveButton.addEventListener('click', function() {
      // Add save functionality here
      modalContainer.innerHTML = '';
  });

  // Close modal on backdrop click
  modalBackdrop.addEventListener('click', function() {
      modalContainer.innerHTML = '';
  });
});

document.getElementById('lily').addEventListener('click', function() {
  // Create the modal elements
  const modalContainer = document.getElementById('modalContainer');
  modalContainer.innerHTML = '';  // Clear any existing modals

  const modalBackdrop = document.createElement('div');
  const modal = document.createElement('div');
  const modalDialog = document.createElement('div');
  const modalContent = document.createElement('div');
  const modalHeader = document.createElement('div');
  const modalBody = document.createElement('div');
  const modalFooter = document.createElement('div');
  const closeButton = document.createElement('button');
  const saveButton = document.createElement('button');

  // Set up classes and attributes
  modalBackdrop.className = 'modal-backdrop fade show';
  modal.className = 'modal fade show';
  modal.style.display = 'block';
  modal.style.position = 'fixed';
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%)';  // Center the modal
  modalDialog.className = 'modal-dialog';
  modalContent.className = 'modal-content';
  modalHeader.className = 'modal-header';
  modalBody.className = 'modal-body';
  modalFooter.className = 'modal-footer';
  closeButton.className = 'btn btn-secondary';
  saveButton.className = 'btn btn-primary';

  // Add text content
  modalHeader.innerHTML = '<h5 class="modal-title">Add Student</h5>';
  closeButton.innerText = 'Close';
  saveButton.innerText = 'Save changes';

  // Add modal body content
  modalBody.innerHTML = `
      <form>
        <div class="mb-3">
          <label for="studentName" class="form-label">Student Name</label>
          <input type="text" class="form-control" id="studentName">
        </div>
        <div class="mb-3">
          <label for="studentID" class="form-label">Student ID</label>
          <input type="text" class="form-control" id="studentID">
        </div>
        <div class="mb-3">
          <label for="studentClass" class="form-label">Class</label>
          <input type="text" class="form-control" id="studentClass">
        </div>
        <div class="mb-3">
          <label for="studentAge" class="form-label">Age</label>
          <input type="number" class="form-control" id="studentAge">
        </div>
        <div class="mb-3">
          <label for="studentEmail" class="form-label">Email</label>
          <input type="email" class="form-control" id="studentEmail">
        </div>
      </form>
  `;

  // Append elements
  modalFooter.appendChild(closeButton);
  modalFooter.appendChild(saveButton);
  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalContent.appendChild(modalFooter);
  modalDialog.appendChild(modalContent);
  modal.appendChild(modalDialog);
  modalContainer.appendChild(modalBackdrop);
  modalContainer.appendChild(modal);

  // Close modal on button click
  closeButton.addEventListener('click', function() {
      modalContainer.innerHTML = '';
  });

  saveButton.addEventListener('click', function() {
      // Add save functionality here
      modalContainer.innerHTML = '';
  });

  // Close modal on backdrop click
  modalBackdrop.addEventListener('click', function() {
      modalContainer.innerHTML = '';
  });
});

document.getElementById('tushar').addEventListener('click', function() {
  // Create the modal elements
  const modalContainer = document.getElementById('modalContainer');
  modalContainer.innerHTML = '';  // Clear any existing modals

  const modalBackdrop = document.createElement('div');
  const modal = document.createElement('div');
  const modalDialog = document.createElement('div');
  const modalContent = document.createElement('div');
  const modalHeader = document.createElement('div');
  const modalBody = document.createElement('div');
  const modalFooter = document.createElement('div');
  const closeButton = document.createElement('button');
  const saveButton = document.createElement('button');

  // Set up classes and attributes
  modalBackdrop.className = 'modal-backdrop fade show';
  modal.className = 'modal fade show';
  modal.style.display = 'block';
  modal.style.position = 'fixed';
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%)';  // Center the modal
  modalDialog.className = 'modal-dialog';
  modalContent.className = 'modal-content';
  modalHeader.className = 'modal-header';
  modalBody.className = 'modal-body';
  modalFooter.className = 'modal-footer';
  closeButton.className = 'btn btn-secondary';
  saveButton.className = 'btn btn-primary';

  // Add text content
  modalHeader.innerHTML = '<h5 class="modal-title">Add Student</h5>';
  closeButton.innerText = 'Close';
  saveButton.innerText = 'Save changes';

  // Add modal body content
  modalBody.innerHTML = `
      <form>
        <div class="mb-3">
          <label for="studentName" class="form-label">Student Name</label>
          <input type="text" class="form-control" id="studentName">
        </div>
        <div class="mb-3">
          <label for="studentID" class="form-label">Student ID</label>
          <input type="text" class="form-control" id="studentID">
        </div>
        <div class="mb-3">
          <label for="studentClass" class="form-label">Class</label>
          <input type="text" class="form-control" id="studentClass">
        </div>
        <div class="mb-3">
          <label for="studentAge" class="form-label">Age</label>
          <input type="number" class="form-control" id="studentAge">
        </div>
        <div class="mb-3">
          <label for="studentEmail" class="form-label">Email</label>
          <input type="email" class="form-control" id="studentEmail">
        </div>
      </form>
  `;

  // Append elements
  modalFooter.appendChild(closeButton);
  modalFooter.appendChild(saveButton);
  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalContent.appendChild(modalFooter);
  modalDialog.appendChild(modalContent);
  modal.appendChild(modalDialog);
  modalContainer.appendChild(modalBackdrop);
  modalContainer.appendChild(modal);

  // Close modal on button click
  closeButton.addEventListener('click', function() {
      modalContainer.innerHTML = '';
  });

  saveButton.addEventListener('click', function() {
      // Add save functionality here
      modalContainer.innerHTML = '';
  });

  // Close modal on backdrop click
  modalBackdrop.addEventListener('click', function() {
      modalContainer.innerHTML = '';
  });
});

document.getElementById('aliana').addEventListener('click', function() {
  // Create the modal elements
  const modalContainer = document.getElementById('modalContainer');
  modalContainer.innerHTML = '';  // Clear any existing modals

  const modalBackdrop = document.createElement('div');
  const modal = document.createElement('div');
  const modalDialog = document.createElement('div');
  const modalContent = document.createElement('div');
  const modalHeader = document.createElement('div');
  const modalBody = document.createElement('div');
  const modalFooter = document.createElement('div');
  const closeButton = document.createElement('button');
  const saveButton = document.createElement('button');

  // Set up classes and attributes
  modalBackdrop.className = 'modal-backdrop fade show';
  modal.className = 'modal fade show';
  modal.style.display = 'block';
  modal.style.position = 'fixed';
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%)';  // Center the modal
  modalDialog.className = 'modal-dialog';
  modalContent.className = 'modal-content';
  modalHeader.className = 'modal-header';
  modalBody.className = 'modal-body';
  modalFooter.className = 'modal-footer';
  closeButton.className = 'btn btn-secondary';
  saveButton.className = 'btn btn-primary';

  // Add text content
  modalHeader.innerHTML = '<h5 class="modal-title">Add Student</h5>';
  closeButton.innerText = 'Close';
  saveButton.innerText = 'Save changes';

  // Add modal body content
  modalBody.innerHTML = `
      <form>
        <div class="mb-3">
          <label for="studentName" class="form-label">Student Name</label>
          <input type="text" class="form-control" id="studentName">
        </div>
        <div class="mb-3">
          <label for="studentID" class="form-label">Student ID</label>
          <input type="text" class="form-control" id="studentID">
        </div>
        <div class="mb-3">
          <label for="studentClass" class="form-label">Class</label>
          <input type="text" class="form-control" id="studentClass">
        </div>
        <div class="mb-3">
          <label for="studentAge" class="form-label">Age</label>
          <input type="number" class="form-control" id="studentAge">
        </div>
        <div class="mb-3">
          <label for="studentEmail" class="form-label">Email</label>
          <input type="email" class="form-control" id="studentEmail">
        </div>
      </form>
  `;

  // Append elements
  modalFooter.appendChild(closeButton);
  modalFooter.appendChild(saveButton);
  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalContent.appendChild(modalFooter);
  modalDialog.appendChild(modalContent);
  modal.appendChild(modalDialog);
  modalContainer.appendChild(modalBackdrop);
  modalContainer.appendChild(modal);

  // Close modal on button click
  closeButton.addEventListener('click', function() {
      modalContainer.innerHTML = '';
  });

  saveButton.addEventListener('click', function() {
      // Add save functionality here
      modalContainer.innerHTML = '';
  });

  // Close modal on backdrop click
  modalBackdrop.addEventListener('click', function() {
      modalContainer.innerHTML = '';
  });
});

document.getElementById('alex').addEventListener('click', function() {
  // Create the modal elements
  const modalContainer = document.getElementById('modalContainer');
  modalContainer.innerHTML = '';  // Clear any existing modals

  const modalBackdrop = document.createElement('div');
  const modal = document.createElement('div');
  const modalDialog = document.createElement('div');
  const modalContent = document.createElement('div');
  const modalHeader = document.createElement('div');
  const modalBody = document.createElement('div');
  const modalFooter = document.createElement('div');
  const closeButton = document.createElement('button');
  const saveButton = document.createElement('button');

  // Set up classes and attributes
  modalBackdrop.className = 'modal-backdrop fade show';
  modal.className = 'modal fade show';
  modal.style.display = 'block';
  modal.style.position = 'fixed';
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%)';  // Center the modal
  modalDialog.className = 'modal-dialog';
  modalContent.className = 'modal-content';
  modalHeader.className = 'modal-header';
  modalBody.className = 'modal-body';
  modalFooter.className = 'modal-footer';
  closeButton.className = 'btn btn-secondary';
  saveButton.className = 'btn btn-primary';

  // Add text content
  modalHeader.innerHTML = '<h5 class="modal-title">Add Student</h5>';
  closeButton.innerText = 'Close';
  saveButton.innerText = 'Save changes';

  // Add modal body content
  modalBody.innerHTML = `
      <form>
        <div class="mb-3">
          <label for="studentName" class="form-label">Student Name</label>
          <input type="text" class="form-control" id="studentName">
        </div>
        <div class="mb-3">
          <label for="studentID" class="form-label">Student ID</label>
          <input type="text" class="form-control" id="studentID">
        </div>
        <div class="mb-3">
          <label for="studentClass" class="form-label">Class</label>
          <input type="text" class="form-control" id="studentClass">
        </div>
        <div class="mb-3">
          <label for="studentAge" class="form-label">Age</label>
          <input type="number" class="form-control" id="studentAge">
        </div>
        <div class="mb-3">
          <label for="studentEmail" class="form-label">Email</label>
          <input type="email" class="form-control" id="studentEmail">
        </div>
      </form>
  `;

  // Append elements
  modalFooter.appendChild(closeButton);
  modalFooter.appendChild(saveButton);
  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalContent.appendChild(modalFooter);
  modalDialog.appendChild(modalContent);
  modal.appendChild(modalDialog);
  modalContainer.appendChild(modalBackdrop);
  modalContainer.appendChild(modal);

  // Close modal on button click
  closeButton.addEventListener('click', function() {
      modalContainer.innerHTML = '';
  });

  saveButton.addEventListener('click', function() {
      // Add save functionality here
      modalContainer.innerHTML = '';
  });

  // Close modal on backdrop click
  modalBackdrop.addEventListener('click', function() {
      modalContainer.innerHTML = '';
  });
});

document.getElementById('Sieena').addEventListener('click', function() {
  // Create the modal elements
  const modalContainer = document.getElementById('modalContainer');
  modalContainer.innerHTML = '';  // Clear any existing modals

  const modalBackdrop = document.createElement('div');
  const modal = document.createElement('div');
  const modalDialog = document.createElement('div');
  const modalContent = document.createElement('div');
  const modalHeader = document.createElement('div');
  const modalBody = document.createElement('div');
  const modalFooter = document.createElement('div');
  const closeButton = document.createElement('button');
  const saveButton = document.createElement('button');

  // Set up classes and attributes
  modalBackdrop.className = 'modal-backdrop fade show';
  modal.className = 'modal fade show';
  modal.style.display = 'block';
  modal.style.position = 'fixed';
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%)';  // Center the modal
  modalDialog.className = 'modal-dialog';
  modalContent.className = 'modal-content';
  modalHeader.className = 'modal-header';
  modalBody.className = 'modal-body';
  modalFooter.className = 'modal-footer';
  closeButton.className = 'btn btn-secondary';
  saveButton.className = 'btn btn-primary';

  // Add text content
  modalHeader.innerHTML = '<h5 class="modal-title">Add Student</h5>';
  closeButton.innerText = 'Close';
  saveButton.innerText = 'Save changes';

  // Add modal body content
  modalBody.innerHTML = `
      <form>
        <div class="mb-3">
          <label for="studentName" class="form-label">Student Name</label>
          <input type="text" class="form-control" id="studentName">
        </div>
        <div class="mb-3">
          <label for="studentID" class="form-label">Student ID</label>
          <input type="text" class="form-control" id="studentID">
        </div>
        <div class="mb-3">
          <label for="studentClass" class="form-label">Class</label>
          <input type="text" class="form-control" id="studentClass">
        </div>
        <div class="mb-3">
          <label for="studentAge" class="form-label">Age</label>
          <input type="number" class="form-control" id="studentAge">
        </div>
        <div class="mb-3">
          <label for="studentEmail" class="form-label">Email</label>
          <input type="email" class="form-control" id="studentEmail">
        </div>
      </form>
  `;

  // Append elements
  modalFooter.appendChild(closeButton);
  modalFooter.appendChild(saveButton);
  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalContent.appendChild(modalFooter);
  modalDialog.appendChild(modalContent);
  modal.appendChild(modalDialog);
  modalContainer.appendChild(modalBackdrop);
  modalContainer.appendChild(modal);

  // Close modal on button click
  closeButton.addEventListener('click', function() {
      modalContainer.innerHTML = '';
  });

  saveButton.addEventListener('click', function() {
      // Add save functionality here
      modalContainer.innerHTML = '';
  });

  // Close modal on backdrop click
  modalBackdrop.addEventListener('click', function() {
      modalContainer.innerHTML = '';
  });
});

document.getElementById('devid').addEventListener('click', function() {
  // Create the modal elements
  const modalContainer = document.getElementById('modalContainer');
  modalContainer.innerHTML = '';  // Clear any existing modals

  const modalBackdrop = document.createElement('div');
  const modal = document.createElement('div');
  const modalDialog = document.createElement('div');
  const modalContent = document.createElement('div');
  const modalHeader = document.createElement('div');
  const modalBody = document.createElement('div');
  const modalFooter = document.createElement('div');
  const closeButton = document.createElement('button');
  const saveButton = document.createElement('button');

  // Set up classes and attributes
  modalBackdrop.className = 'modal-backdrop fade show';
  modal.className = 'modal fade show';
  modal.style.display = 'block';
  modal.style.position = 'fixed';
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%)';  // Center the modal
  modalDialog.className = 'modal-dialog';
  modalContent.className = 'modal-content';
  modalHeader.className = 'modal-header';
  modalBody.className = 'modal-body';
  modalFooter.className = 'modal-footer';
  closeButton.className = 'btn btn-secondary';
  saveButton.className = 'btn btn-primary';

  // Add text content
  modalHeader.innerHTML = '<h5 class="modal-title">Add Student</h5>';
  closeButton.innerText = 'Close';
  saveButton.innerText = 'Save changes';

  // Add modal body content
  modalBody.innerHTML = `
      <form>
        <div class="mb-3">
          <label for="studentName" class="form-label">Student Name</label>
          <input type="text" class="form-control" id="studentName">
        </div>
        <div class="mb-3">
          <label for="studentID" class="form-label">Student ID</label>
          <input type="text" class="form-control" id="studentID">
        </div>
        <div class="mb-3">
          <label for="studentClass" class="form-label">Class</label>
          <input type="text" class="form-control" id="studentClass">
        </div>
        <div class="mb-3">
          <label for="studentAge" class="form-label">Age</label>
          <input type="number" class="form-control" id="studentAge">
        </div>
        <div class="mb-3">
          <label for="studentEmail" class="form-label">Email</label>
          <input type="email" class="form-control" id="studentEmail">
        </div>
      </form>
  `;

  // Append elements
  modalFooter.appendChild(closeButton);
  modalFooter.appendChild(saveButton);
  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalContent.appendChild(modalFooter);
  modalDialog.appendChild(modalContent);
  modal.appendChild(modalDialog);
  modalContainer.appendChild(modalBackdrop);
  modalContainer.appendChild(modal);

  // Close modal on button click
  closeButton.addEventListener('click', function() {
      modalContainer.innerHTML = '';
  });

  saveButton.addEventListener('click', function() {
      // Add save functionality here
      modalContainer.innerHTML = '';
  });

  // Close modal on backdrop click
  modalBackdrop.addEventListener('click', function() {
      modalContainer.innerHTML = '';
  });
});

document.getElementById('josh').addEventListener('click', function() {
  // Create the modal elements
  const modalContainer = document.getElementById('modalContainer');
  modalContainer.innerHTML = '';  // Clear any existing modals

  const modalBackdrop = document.createElement('div');
  const modal = document.createElement('div');
  const modalDialog = document.createElement('div');
  const modalContent = document.createElement('div');
  const modalHeader = document.createElement('div');
  const modalBody = document.createElement('div');
  const modalFooter = document.createElement('div');
  const closeButton = document.createElement('button');
  const saveButton = document.createElement('button');

  // Set up classes and attributes
  modalBackdrop.className = 'modal-backdrop fade show';
  modal.className = 'modal fade show';
  modal.style.display = 'block';
  modal.style.position = 'fixed';
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%)';  // Center the modal
  modalDialog.className = 'modal-dialog';
  modalContent.className = 'modal-content';
  modalHeader.className = 'modal-header';
  modalBody.className = 'modal-body';
  modalFooter.className = 'modal-footer';
  closeButton.className = 'btn btn-secondary';
  saveButton.className = 'btn btn-primary';

  // Add text content
  modalHeader.innerHTML = '<h5 class="modal-title">Add Student</h5>';
  closeButton.innerText = 'Close';
  saveButton.innerText = 'Save changes';

  // Add modal body content
  modalBody.innerHTML = `
      <form>
        <div class="mb-3">
          <label for="studentName" class="form-label">Student Name</label>
          <input type="text" class="form-control" id="studentName">
        </div>
        <div class="mb-3">
          <label for="studentID" class="form-label">Student ID</label>
          <input type="text" class="form-control" id="studentID">
        </div>
        <div class="mb-3">
          <label for="studentClass" class="form-label">Class</label>
          <input type="text" class="form-control" id="studentClass">
        </div>
        <div class="mb-3">
          <label for="studentAge" class="form-label">Age</label>
          <input type="number" class="form-control" id="studentAge">
        </div>
        <div class="mb-3">
          <label for="studentEmail" class="form-label">Email</label>
          <input type="email" class="form-control" id="studentEmail">
        </div>
      </form>
  `;

  // Append elements
  modalFooter.appendChild(closeButton);
  modalFooter.appendChild(saveButton);
  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalContent.appendChild(modalFooter);
  modalDialog.appendChild(modalContent);
  modal.appendChild(modalDialog);
  modalContainer.appendChild(modalBackdrop);
  modalContainer.appendChild(modal);

  // Close modal on button click
  closeButton.addEventListener('click', function() {
      modalContainer.innerHTML = '';
  });

  saveButton.addEventListener('click', function() {
      // Add save functionality here
      modalContainer.innerHTML = '';
  });

  // Close modal on backdrop click
  modalBackdrop.addEventListener('click', function() {
      modalContainer.innerHTML = '';
  });
});

document.getElementById('john').addEventListener('click', function() {
  // Create the modal elements
  const modalContainer = document.getElementById('modalContainer');
  modalContainer.innerHTML = '';  // Clear any existing modals

  const modalBackdrop = document.createElement('div');
  const modal = document.createElement('div');
  const modalDialog = document.createElement('div');
  const modalContent = document.createElement('div');
  const modalHeader = document.createElement('div');
  const modalBody = document.createElement('div');
  const modalFooter = document.createElement('div');
  const closeButton = document.createElement('button');
  const saveButton = document.createElement('button');

  // Set up classes and attributes
  modalBackdrop.className = 'modal-backdrop fade show';
  modal.className = 'modal fade show';
  modal.style.display = 'block';
  modal.style.position = 'fixed';
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%)';  // Center the modal
  modalDialog.className = 'modal-dialog';
  modalContent.className = 'modal-content';
  modalHeader.className = 'modal-header';
  modalBody.className = 'modal-body';
  modalFooter.className = 'modal-footer';
  closeButton.className = 'btn btn-secondary';
  saveButton.className = 'btn btn-primary';

  // Add text content
  modalHeader.innerHTML = '<h5 class="modal-title">Add Student</h5>';
  closeButton.innerText = 'Close';
  saveButton.innerText = 'Save changes';

  // Add modal body content
  modalBody.innerHTML = `
      <form>
        <div class="mb-3">
          <label for="studentName" class="form-label">Student Name</label>
          <input type="text" class="form-control" id="studentName">
        </div>
        <div class="mb-3">
          <label for="studentID" class="form-label">Student ID</label>
          <input type="text" class="form-control" id="studentID">
        </div>
        <div class="mb-3">
          <label for="studentClass" class="form-label">Class</label>
          <input type="text" class="form-control" id="studentClass">
        </div>
        <div class="mb-3">
          <label for="studentAge" class="form-label">Age</label>
          <input type="number" class="form-control" id="studentAge">
        </div>
        <div class="mb-3">
          <label for="studentEmail" class="form-label">Email</label>
          <input type="email" class="form-control" id="studentEmail">
        </div>
      </form>
  `;

  // Append elements
  modalFooter.appendChild(closeButton);
  modalFooter.appendChild(saveButton);
  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalContent.appendChild(modalFooter);
  modalDialog.appendChild(modalContent);
  modal.appendChild(modalDialog);
  modalContainer.appendChild(modalBackdrop);
  modalContainer.appendChild(modal);

  // Close modal on button click
  closeButton.addEventListener('click', function() {
      modalContainer.innerHTML = '';
  });

  saveButton.addEventListener('click', function() {
      // Add save functionality here
      modalContainer.innerHTML = '';
  });

  // Close modal on backdrop click
  modalBackdrop.addEventListener('click', function() {
      modalContainer.innerHTML = '';
  });
});


/* CALENDER
CALENDER
CALENDER
CALENDER
CALENDER
CALENDER*/


document.getElementById('calender').addEventListener('click', function() {
  // Create the modal elements
  const modalContainer = document.getElementById('modalContainer');
  modalContainer.innerHTML = '';  // Clear any existing modals

  const modalBackdrop = document.createElement('div');
  const modal = document.createElement('div');
  const modalDialog = document.createElement('div');
  const modalContent = document.createElement('div');
  const modalHeader = document.createElement('div');
  const modalBody = document.createElement('div');
  const modalFooter = document.createElement('div');
  const closeButton = document.createElement('button');
  const saveButton = document.createElement('button');

  // Set up classes and attributes
  modalBackdrop.className = 'modal-backdrop fade show';
  modal.className = 'modal fade show';
  modal.style.display = 'block';
  modal.style.position = 'fixed';
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%)';  // Center the modal
  modalDialog.className = 'modal-dialog';
  modalContent.className = 'modal-content';
  modalHeader.className = 'modal-header';
  modalBody.className = 'modal-body';
  modalFooter.className = 'modal-footer';
  closeButton.className = 'btn btn-secondary';
  saveButton.className = 'btn btn-primary';

  // Add text content
  modalHeader.innerHTML = '<h5 class="modal-title">Calender</h5>';
  closeButton.innerText = 'Close';
  saveButton.innerText = 'Save changes';

  // Add modal body content
  modalBody.innerHTML = `
<head>
<link rel="stylesheet" type="text/css" href="styles.css" />
</head>
<body>
  <section id="frame">
  <div id="calendar">
    <header>
      <pre class="arrow left">◀</pre>
      <div class="header-display">
        <p id="display"></p>
      </div>
      <pre class=" arrow right">▶</pre>
    </header>

    <div class="week">
      <div>Su</div>
      <div>Mo</div>
      <div>Tu</div>
      <div>We</div>
      <div>Th</div>
      <div>Fr</div>
      <div>Sa</div>
    </div>
    <div id="days"></div>
  </div>
</section>
<body>
  `;

  // Append elements
  modalFooter.appendChild(closeButton);
  modalFooter.appendChild(saveButton);
  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalContent.appendChild(modalFooter);
  modalDialog.appendChild(modalContent);
  modal.appendChild(modalDialog);
  modalContainer.appendChild(modalBackdrop);
  modalContainer.appendChild(modal);

  // Close modal on button click
  closeButton.addEventListener('click', function() {
      modalContainer.innerHTML = '';
  });

  saveButton.addEventListener('click', function() {
      // Add save functionality here
      modalContainer.innerHTML = '';
  });

  // Close modal on backdrop click
  modalBackdrop.addEventListener('click', function() {
      modalContainer.innerHTML = '';
  });
});

let display = document.querySelector("#display");
let days = document.querySelector("#days");
let previous = document.querySelector(".left");
let next = document.querySelector(".right");

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

function calendar() {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  let firstDayIndex = firstDay.getDay();
  let numberOfDays = lastDay.getDate();
  let nextDays = new Date(year, month, numberOfDays).getDay();
  display.textContent = date.toLocaleString("en-US", {
    month: "long",
    year: "numeric"
  });

  for (let i = 1; i <= firstDayIndex; i++) {
    const div = document.createElement("div");
    div.textContent += i;
    div.className = "inactive";
    days.appendChild(div);
  }

  for (let j = 1; j <= numberOfDays; j++) {
    let div = document.createElement("div");
    let currDate = new Date(year, month, j);
    div.dataset.date = currDate.toDateString();
    div.textContent += j;
    days.appendChild(div);
    if (
      currDate.getFullYear() === new Date().getFullYear() &&
      currDate.getMonth() === new Date().getMonth() &&
      currDate.getDate() === new Date().getDate()
    ) {
      div.classList.add("current-date");
    }
  }

  for (let i = nextDays; i < 6; i++) {
    const div = document.createElement("div");
    div.textContent += i - nextDays + 1;
    div.className = "inactive";
    days.appendChild(div);
  }
}
calendar();

previous.addEventListener("click", () => {
  days.innerHTML = "";
  if (month < 0) {
    month = 11;
    year--;
  }
  month--;
  date.setMonth(month);
  calendar();
});

next.addEventListener("click", () => {
  days.innerHTML = "";
  if (month > 11) {
    month = 0;
    year++;
  }
  month++;
  date.setMonth(month);
  calendar();
});
