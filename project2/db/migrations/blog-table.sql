CREATE TABLE IF NOT EXISTS blog (
  id BIGSERIAL PRIMARY KEY,
  title TEXT,
  content TEXT,
  author_id INTEGER REFERENCES author(id)
);
