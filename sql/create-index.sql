create index on public.movies 
using ivfflat (embedding vector_cosine_ops)
with (lists = 100);