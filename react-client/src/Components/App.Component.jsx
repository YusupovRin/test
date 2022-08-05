import { useState, useEffect } from 'react';

import './App.Component.scss';

import HeaderComponent from './Header/Header.Component';
import ControllButtonsComponent from './ControllButtons/ControllButtons.Component';
import ShowAllRowsComponent from './ShowAllRows/ShowAllRows.Component';
import FooterComponent from './Footer/Footer.Component';

import CreateEntityComponent from './CreateEntity/CreateEntity.Component';
import SpinnerLoaderComponent from './SpinnerLoader/SpinnerLoader.Component';

import appService from './App.Service';

import CONFIG from './../CONFIG.json';

function AppComponent() {
  const [statusMountLoader, setStatusMountLoader] = useState(false);
  const [statusMountCreateEntity, setStatusMountCreateEntity] = useState(false);
  const [updateSetInterval, setUpdateSetInterval] = useState(null);
  const [rowsAllEntities, setRowsAllEntities] = useState(null);

  useEffect(() => {
    if (!statusMountCreateEntity) {
      appService(setRowsAllEntities);

      const tempTimer = setInterval(() => {
        appService(setRowsAllEntities);
      }, CONFIG.UPDATED_TIME * 1000);

      setUpdateSetInterval(tempTimer);
    } else if (statusMountCreateEntity) {
      clearInterval(updateSetInterval);

      setUpdateSetInterval(null);
    }
  }, [statusMountCreateEntity]);

  useEffect(() => {
    if (!updateSetInterval && statusMountCreateEntity)
      console.log(`Попап открыт, данные не обновляются!`);
    else
      console.log(
        `Попап закрыт, обновление данных! Таймер: ${updateSetInterval}`
      );
  }, [updateSetInterval, statusMountCreateEntity]);

  return (
    <div className='AppComponent'>
      {statusMountCreateEntity === true && (
        <CreateEntityComponent
          setStatusMountCreateEntity={setStatusMountCreateEntity}
          setStatusMountLoader={setStatusMountLoader}
        />
      )}

      {statusMountLoader === true && <SpinnerLoaderComponent />}

      <header>
        <HeaderComponent />
      </header>

      <main>
        <div className='AppComponent__controll-buttons'>
          <ControllButtonsComponent
            setStatusMountCreateEntity={setStatusMountCreateEntity}
            appService={appService}
            setRowsAllEntities={setRowsAllEntities}
          />
        </div>

        <div className='AppComponent__show-data'>
          <ShowAllRowsComponent rowsAllEntities={rowsAllEntities} />
        </div>
      </main>

      <footer>
        <FooterComponent />
      </footer>
    </div>
  );
}

export default AppComponent;
