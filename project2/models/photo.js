const db = require('../db/config');
const photo = {};

photo.findAll = () => {
  return db.query('SELECT * FROM photo');
}

photo.findById = (id) => {
  return db.one(
  `
  SELECT * FROM photo
  WHERE id = $1
  `, id
  );
};

photo.update = (blog, id) => {
  return db.none(
    `
    UPDATE photo SET
    keyword = $1,
    link = $2,
    WHERE id = $3
    RETURNING *
    `,
    [photo.keyword, photo.link, id]
  );
};

photo.create = photo => {
  return db.one(
    `
    INSERT INTO photo
    (keyword, link)
    Values ($1, $2) RETURNING *
    `,
    [photo.keyword, photo.link]
  );
};

photo.destroy = id => {
  return db.one(
    `
    DELETE FROM photo
    WHERE id = $1
    `,
    id
  );
};

module.exports = photo;
