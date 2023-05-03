const express = require('express');
const customerRoute = express.Router();
// model
let CustomerModel = require('../models/Customer');
customerRoute.route('/create-customer').post((req, res, next) => {
  CustomerModel.create(req.body, (error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
});
customerRoute.route('/').get((req, res, next) => {
    CustomerModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })
customerRoute.route('/edit-customer/:id').get((req, res, next) => {
   CustomerModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Update
customerRoute.route('/update-customer/:id').put((req, res, next) => {
  CustomerModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('Customer Data Successfully Updated!')
    }
  })
})
// Delete
customerRoute.route('/delete-customer/:id').delete((req, res, next) => {
  CustomerModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = customerRoute;