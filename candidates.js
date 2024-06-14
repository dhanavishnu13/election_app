// candidates.js
document.addEventListener('DOMContentLoaded', function() {
    const candidateProfiles = document.getElementById('candidateProfiles');
    const noOfCandidates = sessionStorage.getItem('noOfCandidates');
    const candidateRole = sessionStorage.getItem('candidateRole');

    for (let i = 1; i <= noOfCandidates; i++) {
        const candidateDiv = document.createElement('div');
        candidateDiv.classList.add('candidate-profile');
        candidateDiv.innerHTML = `
            <h2>Candidate ${i}</h2>
            <p>Role: ${candidateRole}</p>
            <p>Name: <input type="text" name="candidateName${i}" placeholder="Candidate ${i} Name"></p>
            <p>Email: <input type="email" name="candidateEmail${i}" placeholder="Candidate ${i} Email"></p>
        `;
        candidateProfiles.appendChild(candidateDiv);
    }
});
