import React from 'react';

import './ControllButtons.Component.scss';

import CONFIG from './../../CONFIG.json';

const declinationEnding = (second) => {
  let tempSecond = null;

  if (second > 20) {
    tempSecond = Number(second.toString()[1]);
  } else tempSecond = second;

  if (tempSecond === 1) return `${second} секунда`;
  else if (tempSecond >= 2 && tempSecond <= 4) return `${second} секунды`;
  else if ((tempSecond >= 5 && tempSecond <= 20) || tempSecond === 0)
    return `${second} секунд`;
};

const ControllButtonsComponent = ({
  setStatusMountCreateEntity,
  appService,
  setRowsAllEntities,
}) => {
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

        <button
          className='ControllButtonsComponent__button-update'
          onClick={() => {
            appService(setRowsAllEntities);
          }}
        >
          Обновить информацию
        </button>

        <span className='ControllButtonsComponent__text-info'>
          Автоматическое обновление данных: каждые{' '}
          {declinationEnding(CONFIG.UPDATED_TIME)}.
        </span>
      </div>
    </div>
  );
};

export default ControllButtonsComponent;
