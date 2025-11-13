import React, { useState, useEffect } from "react";
import "../styles.css";
import BookCard from "./BookCard";

export default function BooksList() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [genre, setGenre] = useState("Všetky");
  const [rating, setRating] = useState("Všetky");

  useEffect(() => {
    fetch("books.json")
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term.target.value);
  };

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };
  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const matchesGenre = (book, genre) => {
    return (
      genre === "Všetky" || book.genre.toLowerCase() === genre.toLowerCase()
    );
  };

  const matchesSearchGenre = (book, searchTerm) => {
    return book.title.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const matchesRating = (book, rating) => {
    switch (rating) {
      case "Všetky":
        return true;
      case "Dobrý":
        return book.rating >= 8;
      case "OK":
        return book.rating >= 5 && book.rating < 8;
      case "Zlý":
        return book.rating < 5;

      default:
        return false;
    }
  };

  const filteredBooks = books.filter(
    (book) =>
      matchesGenre(book, genre) &&
      matchesRating(book, rating) &&
      matchesSearchGenre(book, searchTerm)
  );

  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Vyhľadaj knihu..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="filter-bar">
        <div className="filter-slot">
          <label>Žáner</label>
          <select
            className="filter-dropdown"
            value={genre}
            onChange={handleGenreChange}
          >
            <option>Všetky</option>
            <option>Rozprávka</option>
            <option>Historický</option>
            <option>Motivačné</option>
            <option>Biografický</option>
            <option>Zdravie</option>
          </select>
        </div>

        <div className="filter-slot">
          <label>Rating</label>
          <select
            className="filter-dropdown"
            value={rating}
            onChange={handleRatingChange}
          >
            <option>Všetky</option>
            <option>Dobrý</option>
            <option>OK</option>
            <option>Zlý</option>
          </select>
        </div>
      </div>

      <div className="books-list top-mgb">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
