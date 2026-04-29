// src/app.js
const express = require('express');
const app = express();

app.use(express.json());

const mobileRoutes = require('./routes/mobile.routes');
const authRoutes = require('./routes/auth.routes');

app.use('/mobiles', mobileRoutes);
app.use('/auth', authRoutes);

// Global error handler
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;