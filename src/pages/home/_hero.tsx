/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div>
      <div className="hero">
        <Image src="/images/home/hero.jpg" layout="fill" className="hero-bg" />
        <div className="hero-container">
          <div className="hero-center-text">
            <span>
              Explore <b>Bhutan</b> with us
            </span>
            <small>We pledge more than just travel</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
