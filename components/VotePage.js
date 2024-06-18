// src/components/VotePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './VotePage.css';

const VotePage = () => {
    const navigate = useNavigate();
    const candidates = JSON.parse(sessionStorage.getItem('candidates')) || [];
    const initialVotes = candidates.map(candidate => ({ ...candidate, votes: 0 }));

    const [votes, setVotes] = useState(initialVotes);

    const handleVote = (index) => {
        const newVotes = [...votes];
        newVotes[index].votes += 1;
        setVotes(newVotes);
    };

    const handleClose = () => {
        navigate('/');
    };

    return (
        <div className="vote-page">
            <h1>Vote for Your Candidate</h1>
            <div className="candidates-container">
                {votes.map((candidate, index) => (
                    <div key={candidate.id} className="candidate">
                        {candidate.imgUrl && (
                            <img src={candidate.imgUrl} alt={candidate.name} className="candidate-img" />
                        )}
                        <h2>{candidate.name}</h2>
                        <p>{candidate.role}</p>
                        <button onClick={() => handleVote(index)}>Vote</button>
                        <p>Total Votes: {candidate.votes}</p>
                    </div>
                ))}
            </div>
            <button className="close-button" onClick={handleClose}>Close</button>
        </div>
    );
};

export default VotePage;
