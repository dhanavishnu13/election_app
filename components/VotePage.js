// src/components/VotePage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './VotePage.css';

const VotePage = () => {
    const navigate = useNavigate();
    const candidates = JSON.parse(sessionStorage.getItem('candidates')) || [];
    const initialVotes = candidates.map(candidate => ({ ...candidate, votes: 0 }));

    const [votes, setVotes] = useState(initialVotes);
    const [totalVotes, setTotalVotes] = useState(0);

    useEffect(() => {
        const savedVotes = JSON.parse(sessionStorage.getItem('votes'));
        if (savedVotes) {
            setVotes(savedVotes);
            setTotalVotes(savedVotes.reduce((acc, candidate) => acc + candidate.votes, 0));
        }
    }, []);

    const handleVote = (index) => {
        const newVotes = [...votes];
        newVotes[index].votes += 1;
        setVotes(newVotes);
        sessionStorage.setItem('votes', JSON.stringify(newVotes));
        setTotalVotes(totalVotes + 1);
    };

    const handleClose = () => {
        navigate('/');
    };

    const handleResult = () => {
        navigate('/results');
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

                    </div>
                ))}
            </div>

            <div className="vote-summary">
                <h2>Total Votes Cast: {totalVotes}</h2>
            </div>
            <div className="buttons-container">
                <button className="result-button" onClick={handleResult}>Result</button>
                <div className="spacer"></div>
                <button className="close-button" onClick={handleClose}>Close</button>
            </div>
        </div>
    );
};

export default VotePage;
