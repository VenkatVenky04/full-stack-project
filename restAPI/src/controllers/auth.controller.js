// src/controllers/auth.controller.js
const bcrypt = require('bcryptjs');
const db = require('../config/db');
const { generateToken } = require('../services/auth.service');

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const [rows] = await db.query(
      'SELECT * FROM users WHERE username = ?',
      [username]
    );

    if (rows.length === 0) {
      return res.status(401).json({ message: 'User not found' });
    }

    const user = rows[0];

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const token = generateToken(user);

    res.json({ token });
  } catch (err) {
    next(err);
  }
};