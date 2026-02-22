import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Bets() {
  const [bets, setBets] = useState([]);

  useEffect(() => {
    axios.get('/api/bets/123') // stub user id 123
      .then(res => setBets(res.data.bets || []))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>My Bets</h2>
      <ul>
        {bets.map((b, i) => (
          <li key={i}>{b.team} - {b.amount}</li>
        ))}
      </ul>
    </div>
  );
}