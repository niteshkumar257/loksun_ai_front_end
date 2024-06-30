import React from 'react';
import Lottie from 'lottie-react';

const LottieEx = ({data}) => {
  return (
    <div style={{ width:200, height: 250 }}>
      <Lottie
        animationData={data} 
        loop
        autoplay
      />
    </div>
  );
};

export default LottieEx;
