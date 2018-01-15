

CREATE TABLE IF NOT EXISTS blog (
  id BIGSERIAL PRIMARY KEY,
  title TEXT,
  content TEXT,
  author_id INTEGER REFERENCES author(id),
  photo_id INTEGER REFERENCES photo(id),
  user_id INTEGER REFERENCES users(id)
);
