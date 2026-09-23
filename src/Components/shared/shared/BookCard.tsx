import { Ibook } from "@/types/booksType";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface IbookProps {
  book: Ibook;
}

const BookCard = ({ book }: IbookProps) => {
  return (
    <div
      key={book.bookId}
      className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative h-72 overflow-hidden bg-gray-100">
        <Image
          width={800}
          height={600}
          src={book.image}
          alt={book.bookName}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-gray-800 shadow">
          {book.category}
        </span>

        {/* Rating */}
        <div className="absolute right-4 top-4 rounded-full bg-black/75 px-3 py-1 text-sm font-semibold text-white">
          ⭐ {book.rating}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="line-clamp-1 text-xl font-bold text-gray-900">
          {book.bookName}
        </h2>

        <p className="mt-1 text-sm text-gray-500">by {book.author}</p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Info */}
        <div className="mt-5 grid grid-cols-2 gap-3 border-t pt-4 text-sm">
          <div>
            <p className="text-gray-400">Pages</p>
            <p className="font-semibold">{book.totalPages}</p>
          </div>

          <div>
            <p className="text-gray-400">Published</p>
            <p className="font-semibold">{book.yearOfPublishing}</p>
          </div>

          <div>
            <p className="text-gray-400">Publisher</p>
            <p className="font-semibold">{book.publisher}</p>
          </div>

          <div>
            <p className="text-gray-400">Rating</p>
            <p className="font-semibold">⭐ {book.rating}/5</p>
          </div>
        </div>

        {/* Button */}
        <Link href={`/books/${book.bookId}`}>
          <button className="mt-5 w-full rounded-xl bg-gray-900 py-3 font-semibold text-white transition hover:bg-gray-700">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
