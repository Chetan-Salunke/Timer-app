import React, { useState, useEffect } from 'react';
import moment from 'moment';

const Timer = ({ startTime, duration, onDelete }) => {
  const [remainingTime, setRemainingTime] = useState(duration);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (remainingTime <= 0) {
      onDelete();
    }
  }, [remainingTime]);

  return (
    <div>
      <div>{moment(startTime).format('DD/MM/YYYY HH:mm:ss')}</div>
      <div>{(remainingTime / 1000).toFixed(2)}</div>
      <button className='btn2' onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Timer;
