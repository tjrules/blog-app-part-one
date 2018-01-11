const db = require('../db/config');
const Authors = require('../models/authors');
const Blog = {};

// Blog.findAll = () => {
//   return db.query('SELECT * FROM blog ORDER by id DESC ');
// }

Blog.findAll = () => {
  return db.query('SELECT * FROM blog');
};

Blog.findById = (id) => {
  return db.oneOrNone(`SELECT * FROM blog WHERE id = $1`, id);
}

Blog.findByUserId = (id) => {
  return db.one(`Select * FROM blog WHERE user_id = $1`, id);
}

// Blog.findById = (id) => {
//   return db.oneOrNone(`SELECT * FROM blog where id = $1`, [id]);
// };

Blog.update = (blog, id) => {
  return db.none(
    `
    UPDATE blog SET
    title = $1,
    content = $2,
    author_id = $3
    WHERE id = $4
    `,
    [blog.title, blog.content, blog.author_id, id]
  );
};


Blog.create = blog => {
  return db.one(
    `
    INSERT INTO blog
    (title, content, author_id, user_id)
    Values ($1, $2, $3, $4) RETURNING *
    `,
    [blog.title, blog.content, blog.author_id, blog.user_id]
  )
}

Blog.destroy = id => {
  return db.none(
    `
    DELETE FROM blog
    WHERE id = $1
    `,
    [id]
  );
};

module.exports = Blog;

// const db = require('../db/config');
// const Authors = require('../models/authors');
// const Blog = {};
//
// Blog.findAll = () => {
//   return db.query('SELECT * FROM blog ORDER by id DESC ');
// }
//
// Blog.findById = (id) => {
//   return db.oneOrNone(`SELECT * FROM blog WHERE id = $1`, id);
// }
//
// Blog.update = (blog, id) => {
//   return db.none(
//     `
//     UPDATE blog SET
//     title = $1,
//     content = $2,
//     author_id = $3
//     WHERE id = $4
//     `,
//     [blog.title, blog.content, blog.author_id, id]
//   );
// };
//
// Blog.create = blog => {
//   return db.one(
//     `INSERT INTO blog
//     (title, content, author_id)
//     VALUES ($1, $2, $3) RETURNING *
//     `,
//     [blog.title, blog.content, blog.author_id]
//   )
// }
//
// Blog.destroy = id => {
//   return db.none(
//     `
//     DELETE FROM blog
//     WHERE id = $1
//     `,
//     [id]
//   );
// }
//
//
// module.exports = Blog;
