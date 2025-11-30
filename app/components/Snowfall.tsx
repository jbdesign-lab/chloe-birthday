'use client'

import React, { useEffect, useState } from 'react';

const Snowfall: React.FC = () => {
  const [snowflakes, setSnowflakes] = useState<Array<{id: number, left: number, delay: number}>>([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const flakeCount = isMobile ? 12 : 20;
    const flakes = Array.from({ length: flakeCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: `${flake.left}%`,
            animationDelay: `${flake.delay}s`
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
};

export default Snowfall;