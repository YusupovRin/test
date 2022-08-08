import React from 'react';
import moment from 'moment';

import './ShowAllRows.Component.scss';

const ShowAllRowsComponent = ({ rowsAllEntities }) => {
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
            {rowsAllEntities !== null && rowsAllEntities.length ? (
              rowsAllEntities.map((row) => {
                return (
                  <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{moment(row.bdate).format('YYYY-MM-DD')}</td>
                    <td>{moment(row.bdatetime).format('HH:mm:ss')}</td>
                    <td>{row.param1}</td>
                    <td>{row.param2}</td>
                    <td>{row.param3}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan='6'>Ничего не найдено</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowAllRowsComponent;
