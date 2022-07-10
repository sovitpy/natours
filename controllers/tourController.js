const Tour = require('./../models/tourModel.js');

exports.getTours = (req, res) => {
  res.status(200).json({
    status: 'success',
  });
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: 'success',
      data: newTour,
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err,
    });
  }
};

exports.getTour = (req, res) => {
  res.status(200).json({
    status: 'success',
  });
};
