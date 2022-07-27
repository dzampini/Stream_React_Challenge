import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';
import '../../styles/components/layout/Clock.css';

function MyClock() {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='clock'>
       <Clock value={value} />
    </div>
  );
}
export default MyClock;