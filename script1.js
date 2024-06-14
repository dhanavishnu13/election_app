// script.js
document.getElementById('adminForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const adminName = document.getElementById('adminName').value;
    const setPassword = document.getElementById('setPassword').value;
    const candidateRole = document.getElementById('candidateRole').value;
    const noOfCandidates = document.getElementById('noOfCandidates').value;

    // Store the input data in session storage to be accessed on the next page
    sessionStorage.setItem('adminName', adminName);
    sessionStorage.setItem('setPassword', setPassword);
    sessionStorage.setItem('candidateRole', candidateRole);
    sessionStorage.setItem('noOfCandidates', noOfCandidates);

    // Redirect to the candidates page
    window.location.href = 'candidates.html';
});
