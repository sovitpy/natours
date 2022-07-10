const express = require('express');
const router = express.Router();
const tourController = require('./../controllers/tourController');

// const checkBody = (req, res, next) => {
//   if (!req.body.name || !req.body.price) {
//     return res.status(400).json({
//       status: 'fail',
//       message: 'Missing name or price',
//     });
//   }
//   next();
// };

router
  .route('/')

  .get(tourController.getTours)

  .post(tourController.createTour);

router
  .route('/:id')

  .get(tourController.getTour);

module.exports = router;
