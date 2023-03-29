create table movies (
  id bigserial primary key,
  title text,
  genre text,
  rating int,
  type text,
  image text,
  lang text,
  plot text,
  embedding vector (1536)
);