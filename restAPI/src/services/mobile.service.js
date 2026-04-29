// src/services/mobile.service.js
const db = require('../config/db');

exports.getMobiles = async (id) => {
  if (id) {
    const [rows] = await db.query(
      'SELECT * FROM mobiles WHERE id = ?',
      [id]
    );
    return rows;
  }

  const [rows] = await db.query('SELECT * FROM mobiles');
  return rows;
};

exports.addMobile = async (name, prize, ram, storage) => {
  const [result] = await db.query(
    'INSERT INTO mobiles (name, prize, ram, storage) VALUES (?,?,?,?)',
    [name, prize, ram, storage]
  );
  return result;
};

exports.updateMobile = async (id, name, prize, ram, storage) => {
  const [result] = await db.query(
    'UPDATE mobiles SET name=?, prize=?, ram=?, storage=? WHERE id=?',
    [name, prize, ram, storage, id]
  );
  return result;
};

exports.deleteMobile = async (id) => {
  const [rows] = await db.query(
    'SELECT * FROM mobiles WHERE id=?',
    [id]
  );

  if (rows.length === 0) {
    throw new Error('Mobile not found');
  }

  const [result] = await db.query(
    'DELETE FROM mobiles WHERE id=?',
    [id]
  );

  return result;
};