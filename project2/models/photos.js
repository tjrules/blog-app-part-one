const db = require('../db/config');
const Photo = require('../models/photos.js');
const db = require('../db/config');
const photo = {};
// const API = require('./api-controller');

photo.findAll = () => {
  return db.query('SELECT * FROM photo');
}

photo.findById = (id) => {
  return db.one(
  `
  SELECT * FROM photo
  WHERE id = $1
  `, [id]
  );
};

photo.update = (blog, id) => {
  return db.one(
    `
    UPDATE photo SET
    name = $1,
    WHERE id = $2
    RETURNING *
    `,
    [photo.name, id]
  );
};

photo.create = photo => {
  return db.one(
    `
    INSERT INTO photo
    (name)
    Values ($1) RETURNING *
    `,
    [photo.name]
  );
};

photo.destroy = id => {
  return db.one(
    `
    DELETE FROM photo
    WHERE id = $1
    `,
    [id]
  );
};

module.exports = photo;
