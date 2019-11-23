import { Router } from 'express';

import Controller from './controller/Controller';

const router = Router();

router.get('/items', async (req, res, next) => {
  const controller = new Controller();
  const devices = await controller.getItems();
  try {
    if (devices.length > 0) {
      res.status(200);
      res.type('application/json');
      res.send(devices);
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
});

router.get('/promotions', async (req, res, next) => {
  const controller = new Controller();
  const devices = await controller.getPromotions();
  try {
    if (devices.length > 0) {
      res.status(200);
      res.type('application/json');
      res.send(devices);
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
});

router.get('/purchasedBarcodes', async (req, res, next) => {
  const controller = new Controller();
  const devices = await controller.getPurchasedBarcodes();
  try {
    if (devices.length > 0) {
      res.status(200);
      res.type('application/json');
      res.send(devices);
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
});

export default router;
