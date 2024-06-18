// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminForm from './components/AdminForm';
import CandidateProfiles from './components/CandidateProfiles';
import VotePage from './components/VotePage';
import './App.css';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<AdminForm />} />
                <Route path="/candidates" element={<CandidateProfiles />} />
                <Route path="/vote" element={<VotePage />} />
            </Routes>
        </div>
    );
}

export default App;
