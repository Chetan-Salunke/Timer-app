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
      className='input1'
        type="number"
        value={duration}
        onChange={(event) => setDuration(event.target.value)}
        // placeholder=""
        required
      />
      <br />
      <button className='btn1' type="submit">Add</button>
    </form>
  );
};

export default TimerForm;
