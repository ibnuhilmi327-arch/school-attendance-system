CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  class VARCHAR(20),
  photo TEXT
);

CREATE TABLE teachers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  subject VARCHAR(100),
  photo TEXT
);

CREATE TABLE attendance (
  id SERIAL PRIMARY KEY,
  student_id INTEGER,
  status VARCHAR(20),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE grades (
  id SERIAL PRIMARY KEY,
  student_id INTEGER,
  subject VARCHAR(100),
  score INTEGER
);

CREATE TABLE school_profile (
  id SERIAL PRIMARY KEY,
  school_name VARCHAR(100),
  address TEXT,
  logo TEXT
);
