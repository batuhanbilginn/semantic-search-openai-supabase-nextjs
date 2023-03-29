import { supabaseClient } from "@/lib/supabase/supabase-client";
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openAi = new OpenAIApi(configuration);
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json({ error: "No query provided" });
  }

  // Create Embedding
  const embeddingResponse = await openAi.createEmbedding({
    model: "text-embedding-ada-002",
    input: query,
  });

  const [{ embedding }] = embeddingResponse.data.data;

  // Search Supabase
  const { data, error } = await supabaseClient.rpc("search_movies", {
    query_embedding: embedding,
    similarity_threshold: 0.75,
    match_count: 3,
  });

  if (data) {
    return NextResponse.json({ data });
  }

  return NextResponse.json({ error });
}
