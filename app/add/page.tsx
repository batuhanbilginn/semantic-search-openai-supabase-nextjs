"use client";

import { MovieType, movies_data } from "@/movies";

const AddDataPage = () => {
  const addHandler = async (movie: MovieType) => {
    const res = await fetch("/api/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    });
    if (res.ok) {
      console.log("Added movie");
    } else {
      console.log("Failed to add movie");
    }
  };

  const addData = async () => {
    for (const movie of movies_data.filter((_, index) => index > 12)) {
      await addHandler(movie);
    }
  };
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <button
        className="px-4 py-3 rounded-md bg-neutral-900 text-neutral-50"
        onClick={addData}
      >
        Add Data
      </button>
    </div>
  );
};

export default AddDataPage;
