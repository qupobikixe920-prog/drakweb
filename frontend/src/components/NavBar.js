import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav style={{ padding: '10px', background: '#222', color: 'white' }}>
      <Link to="/" style={{ margin: '0 10px', color: 'white' }}>Home</Link>
      <Link to="/deposit" style={{ margin: '0 10px', color: 'white' }}>Deposit</Link>
      <Link to="/withdraw" style={{ margin: '0 10px', color: 'white' }}>Withdraw</Link>
      <Link to="/balance" style={{ margin: '0 10px', color: 'white' }}>Balance</Link>
      <Link to="/bets" style={{ margin: '0 10px', color: 'white' }}>My Bets</Link>
    </nav>
  );
}