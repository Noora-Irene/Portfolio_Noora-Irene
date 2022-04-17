const Certificate = require('../models/certificate.model');

exports.getAllCertificates = (req, res, next) => {
   Certificate
      .aggregate([
         {
            $lookup: {
               from: 'certificates',
               localField: 'certificateId',
               foreignField: '_id',
               as: 'certificate_info',
            },
         }
      ])
      .sort({ timestamps: -1 })
      .then(data => {
         res.send(data);
      })
      .catch(err => {
         res.status(500).send({
            message:
               err.message || 'Some error occurred'
         });
      });
};