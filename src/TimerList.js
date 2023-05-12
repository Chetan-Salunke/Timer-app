import React, { useState } from 'react';
import TimerForm from './TimerForm';
import Timer from './Timer';

const TimerList = () => {
  const [timers, setTimers] = useState([]);

  const handleNewTimer = (duration) => {
    const startTime = Date.now();
    const newTimer = { id: startTime, startTime, duration };
    setTimers((prevTimers) => [...prevTimers, newTimer]);
  };

  const handleDeleteTimer = (id) => {
    setTimers((prevTimers) => prevTimers.filter((timer) => timer.id !== id));
  };

  return (
    <div>
      <TimerForm onNewTimer={handleNewTimer} />
      {timers.map((timer) => (
        <Timer
          key={timer.id}
          startTime={timer.startTime}
          duration={timer.duration}
          onDelete={() => handleDeleteTimer(timer.id)}
        />
      ))}
    </div>
  );
};

export default TimerList;
