import React, { useState, useEffect } from 'react';
//import moment from 'moment';
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
         title: 'Code',
         dataIndex: 'code',
         key: 'code',
         width: 200
      },
      {
         title: 'Provider',
         dataIndex: 'provider',
         key: 'provider',
         width: 200
      },
      {
         title: 'Name',
         dataIndex: 'name',
         key: 'name',
         width: 300
      },
      {
         title: 'Badge',
         dataIndex: 'image',
         key: 'image',
         width: 200
      },
      {
         title: 'Execution date',
         dataIndex: 'plannedExecutionDate',
         key: 'plannedExecutionDate',
         width: 200
      },
      {
         title: 'Completed',
         dataIndex: 'completed',
         key: 'completed',
         width: 200
      }
   ];

   return (
      <Container style={{ marginTop: '80px' }}>
         <TableComponent data={certificates} columns={columns} />
      </Container>
   );
};

export default Certificates;