import { Ibook } from "@/types/booksType";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IBookDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getBooks = async () => {
  const response = await fetch("http://localhost:3000/booksData.json");
  const data = await response.json();
  return data;
};

const BookDetailsPage = async ({ params }: IBookDetailsPageProps) => {
  const { id } = await params;

  const booksData = await getBooks();

  const book = booksData.find(
    (book: Ibook) => String(book.bookId) === String(id),
  ) as Ibook;

  return (
    <main className="min-h-screen bg-base-200 py-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link
          href="/books"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-base-content/70 transition hover:text-primary"
        >
          ← Back to Books
        </Link>

        {/* Main Card */}
        <div className="overflow-hidden rounded-3xl bg-base-100 shadow-xl">
          {/* Top Section */}
          <div className="grid grid-cols-1 gap-10 p-6 md:p-10 lg:grid-cols-[380px_1fr]">
            {/* Book Image */}
            <div className="flex justify-center">
              <div className="group relative w-full max-w-[330px] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={book.image}
                  alt={book.bookName}
                  width={500}
                  height={700}
                  className="h-auto w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Category Badge */}
                <div className="absolute left-4 top-4">
                  <span className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-content shadow-lg">
                    {book.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Book Information */}
            <div className="flex flex-col justify-center">
              {/* Tags */}
              <div className="mb-4 flex flex-wrap gap-2">
                {book.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="rounded-full bg-base-200 px-3 py-1 text-xs font-medium text-base-content/70"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
                {book.bookName}
              </h1>

              {/* Author */}
              <p className="mt-3 text-lg text-base-content/60">
                by{" "}
                <span className="font-semibold text-base-content">
                  {book.author}
                </span>
              </p>

              {/* Rating */}
              <div className="mt-6 flex items-center gap-3">
                <div className="flex items-center gap-1 rounded-full bg-warning/15 px-4 py-2">
                  <span className="text-xl">★</span>
                  <span className="font-bold">{book.rating}</span>
                </div>

                <span className="text-sm text-base-content/50">
                  Reader Rating
                </span>
              </div>

              {/* Short Description */}
              <p className="mt-6 max-w-2xl text-base leading-7 text-base-content/70">
                {book.review}
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-3">
                <button className="btn btn-primary px-7">
                  📖 Start Reading
                </button>

                <button className="btn btn-outline px-7">
                  ♡ Add to Wishlist
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mx-6 border-t md:mx-10" />

          {/* Book Stats */}
          <div className="grid grid-cols-2 divide-x divide-y p-6 md:grid-cols-4 md:divide-y-0 md:p-10">
            {/* Pages */}
            <div className="px-4 py-4 text-center">
              <p className="text-sm text-base-content/50">Total Pages</p>
              <p className="mt-1 text-2xl font-bold">{book.totalPages}</p>
            </div>

            {/* Publisher */}
            <div className="px-4 py-4 text-center">
              <p className="text-sm text-base-content/50">Publisher</p>
              <p className="mt-1 text-2xl font-bold">{book.publisher}</p>
            </div>

            {/* Year */}
            <div className="px-4 py-4 text-center">
              <p className="text-sm text-base-content/50">Published</p>
              <p className="mt-1 text-2xl font-bold">{book.yearOfPublishing}</p>
            </div>

            {/* Category */}
            <div className="px-4 py-4 text-center">
              <p className="text-sm text-base-content/50">Category</p>
              <p className="mt-1 text-2xl font-bold">{book.category}</p>
            </div>
          </div>
        </div>

        {/* About Book */}
        <section className="mt-10 rounded-3xl bg-base-100 p-6 shadow-lg md:p-10">
          <div className="mb-6">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              About the Book
            </span>

            <h2 className="mt-2 text-3xl font-bold">
              A story worth discovering
            </h2>
          </div>

          <p className="max-w-4xl leading-8 text-base-content/70">
            {book.review}
          </p>

          {/* Tags */}
          <div className="mt-7 flex flex-wrap gap-2">
            {book.tags.map((tag: string) => (
              <span key={tag} className="badge badge-lg badge-outline">
                {tag}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default BookDetailsPage;
