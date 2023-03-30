import React from 'react';
import { useSpring, animated } from 'react-spring';

const Logo = () => {
  const { transform } = useSpring({
    from: { transform: 'rotateY(0deg)' },
    to: { transform: 'rotateY(360deg)' },
    config: { duration: 2000 },
    loop: true
  });

  return (
    <animated.div style={{ transform }}>
      {/* Aquí va el código HTML de tu logo */}
      <img src="https://cdn-icons-png.flaticon.com/512/5968/5968841.png" alt="Logo" />
    </animated.div>
  );
};

export default Logo;