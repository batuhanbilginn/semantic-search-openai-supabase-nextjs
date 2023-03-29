import Movies from "@/components/movies";
import SearchBar from "@/components/search-bar";

export default function Home() {
  return (
    <main>
      {/* Container */}
      <div className="w-full px-8 py-10 mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold text-neutral-50">Search Movies</h1>
        <p className="text-lg text-neutral-500">
          You can search movies with our Semantic Search feature. Just try to
          explain what movie is about?
        </p>
        <SearchBar />
        {/* List */}
        <Movies />
      </div>
    </main>
  );
}
