// src/controllers/mobile.controller.js
const mobileService = require('../services/mobile.service');

exports.getMobiles = async (req, res, next) => {
  try {
    const data = await mobileService.getMobiles(req.params.id);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.addMobile = async (req, res, next) => {
  try {
    const { name, prize, ram, storage } = req.body;
    const result = await mobileService.addMobile(name, prize, ram, storage);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

exports.updateMobile = async (req, res, next) => {
  try {
    const { name, prize, ram, storage } = req.body;
    const result = await mobileService.updateMobile(
      req.params.id,
      name,
      prize,
      ram,
      storage
    );
    res.json(result);
  } catch (err) {
    next(err);
  }
};

exports.deleteMobile = async (req, res, next) => {
  try {
    const result = await mobileService.deleteMobile(req.params.id);
    res.json(result);
  } catch (err) {
    next(err);
  }
};