import { MovieType } from "@/movies";
import Image from "next/image";

const Movie = ({ movie }: { movie: MovieType }) => {
  return (
    <div className="relative overflow-hidden rounded-md shadow-md h-96">
      <div className="relative z-20 flex flex-col justify-end w-full h-full px-4 pb-10">
        <div className="flex items-center gap-2 ">
          <div className="inline-block px-2 py-1 text-xs rounded-md line-clamp-1 bg-yellow-100/80 text-neutral-900">
            {movie.rating.toUpperCase()}
          </div>
          <div className="inline-block px-2 py-1 text-xs rounded-md line-clamp-1 bg-neutral-800/80 text-neutral-200">
            {movie.type.toUpperCase()}
          </div>
          <div className="inline-block px-2 py-1 text-xs rounded-md line-clamp-1 bg-neutral-800/80 text-neutral-200">
            {movie.genre.toUpperCase()}
          </div>
        </div>
        <h2 className="mt-2 text-2xl font-semibold text-neutral-200">
          {movie.title}
        </h2>
        <p className="text-sm text-neutral-400 line-clamp-2">{movie.plot}</p>
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-neutral-900/30 via-neutral-900/90 to-neutral-900" />
      {/* BG Image */}
      <Image
        className="object-cover object-center "
        src={movie.image}
        fill
        alt={movie.title}
      />
    </div>
  );
};

export default Movie;
