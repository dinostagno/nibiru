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
      <img src="https://a.sfdcstatic.com/shared/images/c360-nav/mobile_logo.png" alt="Logo" />
    </animated.div>
  );
};

export default Logo;