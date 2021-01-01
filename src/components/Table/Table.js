import React from 'react';
import Tooltip from "../Tooltip/Tooltip";
import './Table.scss';

const Table = ({ columns, data }) => {
  const renderHeader = () => (
    columns.map((key, index) => (
      <th key={index}
          style={{ padding: '20px' }}
      >
        {key}
      </th>
    ))
  );

  const renderBody = () => data?.map(({ flag, name, capital, population, area, currencies }) => (
    <tr key={name} className="table-row">
      <td>
        <img
          className='icon'
          src={flag}
          alt=""
        />
      </td>
      <td>{name}</td>
      <td>{capital}</td>
      <td>{population}</td>
      <td>{area}</td>
      <td>
        {
          currencies?.length?
            <Tooltip text={
              <div>
                <p><b>Name:</b> {currencies[0].name}</p>
                <p><b>Symbol:</b> {currencies[0].symbol}</p>
              </div>
            }>
              {currencies[0].code}
            </Tooltip>:
            ''
        }

      </td>
    </tr>
  ));

  return (
    <>
      <table id='employee'>
        <thead>
        <tr className='table-header-row'>
          {renderHeader()}
        </tr>
        </thead>
        <tbody>
        {renderBody()}
        </tbody>
      </table>
    </>
  )
}

export default Table;