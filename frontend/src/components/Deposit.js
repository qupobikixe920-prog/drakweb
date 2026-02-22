import React, { useState } from 'react';
import axios from 'axios';

export default function Deposit() {
  const [amount, setAmount] = useState('');
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('screenshot', file);
    try {
      const res = await axios.post('/api/deposit/screenshot', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setStatus('Screenshot uploaded successfully');
    } catch (err) {
      console.error(err);
      setStatus('Upload failed');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Deposit Funds</h2>
      <p>TeleBirr: 09056560</p>
      <p>CBE: 21042838420</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Amount: </label>
          <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
        </div>
        <div>
          <label>Upload screenshot:</label>
          <input type="file" onChange={e => setFile(e.target.files[0])} />
        </div>
        <button type="submit">Submit</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}