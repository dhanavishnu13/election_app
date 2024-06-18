// src/components/AdminForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminForm = () => {
    const [adminName, setAdminName] = useState('');
    const [Password, setPassword] = useState('');
    const [candidateRole, setCandidateRole] = useState('');
    const [noOfCandidates, setNoOfCandidates] = useState(0);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        sessionStorage.setItem('adminName', adminName);
        sessionStorage.setItem('Password', Password);
        sessionStorage.setItem('candidateRole', candidateRole);
        sessionStorage.setItem('noOfCandidates', noOfCandidates);
        navigate('/candidates');
    };

    return (
        <div className="container">
            <h1>Admin Panel</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="adminName">Admin Name:</label>
                    <input
                        type="text"
                        id="adminName"
                        value={adminName}
                        onChange={(e) => setAdminName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Password">Password:</label>
                    <input
                        type="password"
                        id="setPassword"
                        value={Password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="candidateRole">Candidate Role:</label>
                    <input
                        type="text"
                        id="candidateRole"
                        value={candidateRole}
                        onChange={(e) => setCandidateRole(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="noOfCandidates">Number of Candidates:</label>
                    <input
                        type="number"
                        id="noOfCandidates"
                        value={noOfCandidates}
                        onChange={(e) => setNoOfCandidates(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Start</button>
            </form>
        </div>
    );
};

export default AdminForm;
