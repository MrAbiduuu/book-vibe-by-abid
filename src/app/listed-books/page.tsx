"use client";

import BookCard from "@/Components/shared/shared/BookCard";

import { BooksContext } from "@/Context/BooksContext";

import { Ibook } from "@/types/booksType";

import React, { useContext } from "react";

const ListedBooks = () => {
  const { readBooks, wishlist } = useContext(BooksContext);

  return (
    <div className="container mx-auto px-4 py-5">
      ```
      <h1 className="text-4xl text-center bg-amber-100 font-bold py-16 rounded-3xl mb-8">
        Listed Books
      </h1>
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
          defaultChecked
        />

        <div className="tab-content bg-base-100 border-base-300 p-6">
          <div className="max-w-4xl mx-auto flex flex-col gap-6">
            {readBooks.length > 0 ? (
              readBooks.map((book: Ibook) => (
                <BookCard key={book.bookId} book={book} />
              ))
            ) : (
              <div className="flex items-center justify-center min-h-40 rounded-2xl bg-base-200">
                <p className="text-gray-400 text-center text-lg font-semibold">
                  No read books Found
                </p>
              </div>
            )}
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Wishlist Books (${wishlist.length})`}
        />

        <div className="tab-content bg-base-100 border-base-300 p-6">
          <div className="max-w-4xl mx-auto flex flex-col gap-6">
            {wishlist.length > 0 ? (
              wishlist.map((book: Ibook) => (
                <BookCard key={book.bookId} book={book} />
              ))
            ) : (
              <div className="flex items-center justify-center min-h-40 rounded-2xl bg-base-200">
                <p className="text-gray-400 text-center text-lg font-semibold">
                  No books found in wishlist
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
