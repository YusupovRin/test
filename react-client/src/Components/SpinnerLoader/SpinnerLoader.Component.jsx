import React from 'react';

import './SpinnerLoader.Component.scss';

const SpinnerLoaderComponent = () => {
  return (
    <div className='SpinnerLoaderComponent'>
      <div className='lds-roller'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default SpinnerLoaderComponent;
