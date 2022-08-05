import { useState } from 'react';

import './App.Component.scss';

import HeaderComponent from './Header/Header.Component';
import ControllButtonsComponent from './ControllButtons/ControllButtons.Component';
import ShowAllRowsComponent from './ShowAllRows/ShowAllRows.Component';
import FooterComponent from './Footer/Footer.Component';

import CreateEntityComponent from './CreateEntity/CreateEntity.Component';

function AppComponent() {
  const [statusMountCreateEntity, setStatusMountCreateEntity] = useState(false);

  return (
    <div className='AppComponent'>
      {statusMountCreateEntity === true && (
        <CreateEntityComponent
          setStatusMountCreateEntity={setStatusMountCreateEntity}
        />
      )}

      <header>
        <HeaderComponent />
      </header>

      <main>
        <div className='AppComponent__controll-buttons'>
          <ControllButtonsComponent
            setStatusMountCreateEntity={setStatusMountCreateEntity}
          />
        </div>

        <div className='AppComponent__show-data'>
          <ShowAllRowsComponent />
        </div>
      </main>

      <footer>
        <FooterComponent />
      </footer>
    </div>
  );
}

export default AppComponent;
