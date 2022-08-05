import React from 'react';
// import { useNavigate } from 'react-router-dom';

import './Footer.Component.scss';

const FooterComponent = () => {
  // let navigate = useNavigate();

  return (
    <div className='FooterComponent'>
      <div className='container'>
        Разработка{' '}
        <span
          className='FooterComponent__developer'
          onClick={() => {
            window.open('http://elmir-web.github.io');
          }}
        >
          Elmir_Kuba
        </span>
      </div>
    </div>
  );
};

export default FooterComponent;
