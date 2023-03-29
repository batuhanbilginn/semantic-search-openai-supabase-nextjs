create or replace function search_movies (
  query_embedding vector(1536),
  similarity_threshold float,
  match_count int
)
returns table (
  id bigint,
  title text,
  image text,
  plot text,
  genre text,
  rating text,
  type text,
  lang text,
  similarity float
)
language plpgsql
as $$
begin
  return query
  select
    movies.id,
    movies.title,
    movies.image,
    movies.plot,
    movies.genre,
    movies.rating,
    movies.type,
    movies.lang,
    1 - (movies.embedding <=> query_embedding) as similarity
  from movies
  where 1 - (movies.embedding <=> query_embedding) > similarity_threshold
  order by movies.embedding <=> query_embedding
  limit match_count;
end;
$$;