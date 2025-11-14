import React from "react";
import "../styles.css";

export default function BookCard({ book, isWatchlisted, toggleWatchList }) {
  const handleError = (e) => {
    e.target.src = "images/default.jpg";
  };

  const getratingClass = (rating) => {
    if (rating >= 8) return "rating-good";
    if (rating >= 5 && rating < 8) return "rating-ok";
    return "rating-bad";
  };

  return (
    <div key={book.id} className="book-card">
      <img
        src={`images/${book.image}`}
        alt={book.title}
        onError={handleError}
      />
      <div className="book-card-info">
        <h3 className="book-card-title">{book.title}</h3>
        <p className="book-card-author">{book.author}</p>
        <div className="book-card-meta">
          <span className="book-card-genre">{book.genre}</span>
          <span className={`book-card-rating ${getratingClass(book.rating)}`}>
            {book.rating}
          </span>
        </div>
        <label className="switch">
          <input
            type="checkbox"
            checked={isWatchlisted}
            onChange={() => toggleWatchList(book.id)}
          />
          <span className="slider">
            <span className="slider-label">
              {isWatchlisted ? " Odstrániť zo zoznamu" : " Pridať do zoznamu"}
            </span>
          </span>
        </label>
      </div>
    </div>
  );
}
