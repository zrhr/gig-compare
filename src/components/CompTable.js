import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';

const CompTable = (props) => {
  const data_icons = {
    columns: [
      {
        'label': 'General Info',
        'field': 'info',
        'sort': 'asc'
      },
      {
        'label': '',
        'field': 'data',
        'sort': 'asc'
      }
     
    ],
    rows: [
      {
        'info': [<i key="cell1" className="fas fa-car mr-2 black-text" aria-hidden="true"></i>, 'Type of Job'],
        'data': props.item.type 
      },
      {
        'info': [<i key="cell1" className="far fa-map mr-2 black-text" aria-hidden="true"></i>, 'Company Location'],
        'data': props.item.location
      },
      {
        'info': [<i key="cell1" className="far fa-building mr-2 black-text" aria-hidden="true"></i>, 'Company Headquarters'],
        'data': props.item.headquarters
      },
      {
        'info': [<i key="cell1" className="fas fa-chart-line mr-2 black-text" aria-hidden="true"></i>, 'Stock'],
        'data': props.item.traded
      }, {
        'info': [<i key="cell1" className="fas fa-chart-pie mr-2 black-text" aria-hidden="true"></i>, 'Market Share'],
        'data': props.item.marketShare
      }, {
        'info': [<i key="cell1" className="fas fa-money-bill-alt mr-2 black-text" aria-hidden="true"></i>, 'Customer Tips'],
        'data': props.item.tips
      }, {
        'info': [<i key="cell1" className="fas fa-hourglass-half mr-2 black-text" aria-hidden="true"></i>, 'Peak Work Availability'],
        'data': props.item.peakTimes
      }, {
        'info': [<i key="cell1" className="far fa-handshake mr-2 black-text" aria-hidden="true"></i>, 'Contractor Refferals'],
        'data': props.item.refferals
      }, {
        'info': [<i key="cell1" className="fa fa-chevron-down mr-2 black-text" aria-hidden="true"></i>, 'Minimum Pay'],
        'data': props.item.minPay
      },
      {
        'info': [<i key="cell1" className="fa fa-chevron-up mr-2 black-text" aria-hidden="true"></i>, 'Maximum Pay'],
        'data': props.item.maxPay
      },
      
    ]
  };

  return(
    <MDBTable btn fixed striped>
      <MDBTableHead columns={data_icons.columns} />
      <MDBTableBody rows={data_icons.rows} />
    </MDBTable>
  );
};

export default CompTable;