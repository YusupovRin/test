import React from 'react';

import './ShowAllRows.Component.scss';

const ShowAllRowsComponent = () => {
  return (
    <div className='ShowAllRowsComponent'>
      <div className='container'>
        <table className='ShowAllRowsComponent__table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Дата</th>
              <th>Время</th>
              <th>PARAM 1</th>
              <th>PARAM 2</th>
              <th>PARAM 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ID</td>
              <td>Дата</td>
              <td>Время</td>
              <td>PARAM 1</td>
              <td>PARAM 2</td>
              <td>PARAM 3</td>
            </tr>
            <tr>
              <td>ID</td>
              <td>Дата</td>
              <td>Время</td>
              <td>PARAM 1</td>
              <td>PARAM 2</td>
              <td>PARAM 3</td>
            </tr>
            <tr>
              <td>ID</td>
              <td>Дата</td>
              <td>Время</td>
              <td>PARAM 1</td>
              <td>PARAM 2</td>
              <td>PARAM 3</td>
            </tr>
            <tr>
              <td>ID</td>
              <td>Дата</td>
              <td>Время</td>
              <td>PARAM 1</td>
              <td>PARAM 2</td>
              <td>PARAM 3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowAllRowsComponent;
