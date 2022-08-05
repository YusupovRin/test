import React from 'react';

import './Header.Component.scss';

const HeaderComponent = () => {
  return (
    <div className='HeaderComponent'>
      <div className='container'>
        <div className='HeaderComponent__logo'>ММСК тест</div>
        <div className='HeaderComponent__contact'>
          По всем вопросам звонить - 197, 207
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
