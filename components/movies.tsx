"use client";
import { moviesAtom } from "@/atoms/search-atoms";
import { useAtomValue } from "jotai";
import Movie from "./movie";

const Movies = () => {
  const movies = useAtomValue(moviesAtom);
  return (
    <div className="grid grid-cols-3 gap-10 mt-8">
      {movies.map((movie) => (
        <Movie key={movie.title} movie={movie} />
      ))}
    </div>
  );
};

export default Movies;
