function showSection(sectionId, element) {

  // Hide all sections
  document.querySelectorAll('.section').forEach(sec => {
    sec.classList.remove('active-section');
  });

  // Show selected section
  document.getElementById(sectionId).classList.add('active-section');

  // Remove active class from all nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });

  // Add active class to clicked link
  element.classList.add('active');
}