import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Balance() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    // fetch user balance from API (stubbed)
    axios.get('/api/balance')
      .then(res => setBalance(res.data.balance || 0))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Balance</h2>
      <p>{balance} ETB</p>
    </div>
  );
}