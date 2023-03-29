import { supabaseClient } from "@/lib/supabase/supabase-client";
import { MovieType } from "@/movies";
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openAi = new OpenAIApi(configuration);
export async function POST(request: Request) {
  const movie = (await request.json()) as MovieType;

  // Create Embedding
  const embeddingResponse = await openAi.createEmbedding({
    model: "text-embedding-ada-002",
    input: `${movie.title} - ${movie.plot}`,
  });

  const [{ embedding }] = embeddingResponse.data.data;

  // Insert Into Supabase
  const { error } = await supabaseClient.from("movies").insert({
    ...movie,
    embedding,
  });

  return NextResponse.json({ error });
}
