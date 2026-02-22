import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/teams/today')
      .then(res => {
        setGames(res.data.games || []);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Today's Football Games</h2>
      {loading && <p>Loading...</p>}
      {!loading && games.length === 0 && <p>No games found.</p>}
      <ul>
        {games.map((game, idx) => (
          <li key={idx}>{game.home} vs {game.away} @ {game.time}</li>
        ))}
      </ul>
    </div>
  );
}