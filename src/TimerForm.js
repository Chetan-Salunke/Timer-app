import React, { useState } from 'react';

const TimerForm = ({ onNewTimer }) => {
  const [duration, setDuration] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onNewTimer(parseFloat(duration) * 1000);
    setDuration('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={duration}
        onChange={(event) => setDuration(event.target.value)}
        placeholder="Enter duration in seconds"
        required
      />
      <button type="submit">Add Timer</button>
    </form>
  );
};

export default TimerForm;
