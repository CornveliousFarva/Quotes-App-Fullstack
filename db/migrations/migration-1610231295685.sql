DROP TABLE IF EXISTS quotes;

CREATE TABLE IF NOT EXISTS quotes (
  id BIGSERIAL PRIMARY KEY,
  quote TEXT,
  author VARCHAR(50)
);