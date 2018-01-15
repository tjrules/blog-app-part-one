const db = require('../db/config');
const Author = {};

Author.findAll = () => {
  return db.query('SELECT * FROM author');
}

Author.findById = (id) => {
  return db.one(
  `
  SELECT * FROM author
  WHERE id = $1
  `, id
  );
};

Author.update = (author, id) => {
  return db.none(
    `
    UPDATE author SET
    name = $1
    WHERE id = $2
    `,
    [author.name, id]
  );
};

Author.create = author => {
  return db.one(
    `
    INSERT INTO author
    (name)
    Values ($1) RETURNING *
    `,
    [author.name]
  );
};

Author.destroy = id => {
  return db.one(
    `
    DELETE FROM author
    WHERE id = $1
    `,
    id
  );
};

module.exports = Author;
