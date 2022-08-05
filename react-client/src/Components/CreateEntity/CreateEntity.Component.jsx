import React from 'react';

import './CreateEntity.Component.scss';

const CreateEntityComponent = ({ setStatusMountCreateEntity }) => {
  return (
    <div className='CreateEntityComponent'>
      <div className='CreateEntityComponent__window'>
        <div className='CreateEntityComponent__head'>
          <div className='CreateEntityComponent__title'>создать сущность</div>

          <button
            className='CreateEntityComponent__button-close'
            onClick={() => {
              setStatusMountCreateEntity(false);
            }}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default CreateEntityComponent;
