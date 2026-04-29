// src/routes/mobile.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/mobile.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.get('/', authMiddleware, controller.getMobiles);
router.get('/:id', authMiddleware, controller.getMobiles);
router.post('/', authMiddleware, controller.addMobile);
router.put('/:id', authMiddleware, controller.updateMobile);
router.delete('/:id', authMiddleware, controller.deleteMobile);

module.exports = router;