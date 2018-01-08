const db = require('../db/config');
const Authors = {};
// const API = require('./api-controller')
Authors.findAll = () => {
  return db.query('SELECT * FROM author');
}

Authors.findById = (id) => {
  return db.one('SELECT * FROM author WHERE id = $1', id);
}

Authors.update = (blog, id) => {
  return db.one(
    `
    UPDATE blog SET
    title = $1,
    content = $2,
    author_id = $3
    WHERE id = $4
    RETURNING *`,
    [blog.title, blog.content, blog.author_id, id]
  );
};

module.exports = Authors;
