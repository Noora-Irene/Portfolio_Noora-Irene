const express = require('express');
const indexController = require('../controllers/certificate.controller');
const router = express.Router();

router.get('/api/certificates', indexController.getAllCertificates);

module.exports = router;