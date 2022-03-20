import React, { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment-timezone';
import Container from 'react-bootstrap/Container';
import RequestService from '../services/RequestService';
import TableComponent from '../components/TableComponent';

const Certificates = () => {
   const [certificates, setCertificates] = useState([]);

   useEffect(() => {
      servData();
   }, []);

   const servData = () => {
      RequestService.getAllCertificates()
         .then(response => {
            setCertificates(response.data);
         })
         .catch(e => {
            console.log(e);
         });
   };

   const columns = [
      {
         Header: 'Code',
         accessor: 'code',
      },
      {
         Header: 'Provider',
         accessor: 'provider',
      },
      {
         Header: 'Name',
         accessor: 'name'
      },
      {
         Header: 'Badge',
         accessor: 'image'
      },
      {
         Header: 'Planned execution date',
         accessor: 'plannedExecutionDate'
      },
      {
         Header: 'Completed',
         accessor: 'completed'
      },
      {
         Header: 'Additional information',
         accessor: 'description'
      }
   ];

   return (
      <Container style={{ marginTop: '80px' }}>
         <TableComponent data={certificates} columns={columns} />
      </Container>
   );
};

export default Certificates;