import React from "react";
import { Ibook } from "@/types/booksType";
import BookCard from "@/Components/shared/shared/BookCard";

const getBooks = async () => {
  const response = await fetch("http://localhost:3000/booksData.json");
  const data = await response.json();
  return data;
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto my-17.5 px-4">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold">Explore All Books</h1>
        <p className="mt-3 text-gray-500">
          Discover amazing books from different categories
        </p>
      </div>

      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {booksData.map((book: Ibook, ind: number) => {
          return <BookCard key={ind} book={book} />;
        })}
      </div>
    </section>
  );
};

export default Books;
