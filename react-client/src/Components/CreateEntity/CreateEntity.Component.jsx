import React, { useState, useEffect } from 'react';
import moment from 'moment';

import './CreateEntity.Component.scss';

import createEntityController from './CreateEntity.Controller';

const CreateEntityComponent = ({
  setStatusMountCreateEntity,
  setStatusMountLoader,
}) => {
  const [bdate, setBDate] = useState('');
  const [bdatetime, setBDateTime] = useState('');
  const [param1, setParam1] = useState('');
  const [param2, setParam2] = useState('');
  const [param3, setParam3] = useState('');

  useEffect(() => {
    setBDate(moment(new Date()).format('YYYY-MM-DD'));
    setBDateTime(moment(new Date()).format('HH:mm:ss'));
  }, []);

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

        <div className='CreateEntityComponent__main'>
          <form className='CreateEntityComponent__form'>
            <input
              type='date'
              className='CreateEntityComponent__input-text'
              value={bdate}
              onChange={(event) => {
                setBDate(event.target.value);
              }}
            />

            <input
              type='time'
              className='CreateEntityComponent__input-text'
              step='1'
              value={bdatetime}
              onChange={(event) => {
                console.log(event.target.value);
              }}
            />

            <input
              type='text'
              className='CreateEntityComponent__input-text'
              placeholder='param1'
              value={param1}
              onChange={(event) => {
                setParam1(event.target.value);
              }}
            />

            <input
              type='text'
              className='CreateEntityComponent__input-text'
              placeholder='param2'
              value={param2}
              onChange={(event) => {
                setParam2(event.target.value);
              }}
            />

            <input
              type='text'
              className='CreateEntityComponent__input-text'
              placeholder='param3'
              value={param3}
              onChange={(event) => {
                setParam3(event.target.value);
              }}
            />

            <button
              type='submit'
              className='CreateEntityComponent__button-create'
              onClick={(event) => {
                event.preventDefault();

                createEntityController(
                  setStatusMountCreateEntity,
                  setStatusMountLoader,
                  {
                    bdate,
                    bdatetime,
                    param1,
                    param2,
                    param3,
                  }
                );
              }}
            >
              Создать сущность
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEntityComponent;
