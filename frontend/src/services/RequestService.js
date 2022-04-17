import http from '../http-common';

const getAllCertificates = (params) => {
   return http.get('/certificates', { params });
};

export default {
   getAllCertificates
};