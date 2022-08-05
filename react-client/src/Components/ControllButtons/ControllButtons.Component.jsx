import React from 'react';

import './ControllButtons.Component.scss';

const ControllButtonsComponent = ({ setStatusMountCreateEntity }) => {
  return (
    <div className='ControllButtonsComponent'>
      <div className='container'>
        <button
          className='ControllButtonsComponent__button-create'
          onClick={() => {
            setStatusMountCreateEntity(true);
          }}
        >
          Создать сущность
        </button>

        <button className='ControllButtonsComponent__button-update'>
          Обновить информацию
        </button>
      </div>
    </div>
  );
};

export default ControllButtonsComponent;
