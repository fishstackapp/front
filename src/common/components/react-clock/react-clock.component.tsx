import React, { useEffect, useState } from 'react';

export const ReactClock = () => {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);


  return (
    <div>
      <h2>{value.toLocaleTimeString()}</h2>
    </div>
  );
};
