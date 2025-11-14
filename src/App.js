import "./App.css";
import "./styles.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BooksList from "./components/BooksList";
import WatchList from "./components/WatchList";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  const [books, setBooks] = useState([]);
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    fetch("books.json")
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  const toggleWatchList = (bookId) => {
    setWatchList((prev) =>
      prev.includes(bookId)
        ? prev.filter((id) => id !== bookId)
        : [...prev, bookId]
    );
  };

  return (
    <div className="App">
      <div className="container">
        <Header />

        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Knižnica</Link>
              </li>
              <li>
                <Link to="/watchlist">Zoznam na Čítanie</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/"
              element={
                <BooksList
                  watchList={watchList}
                  books={books}
                  toggleWatchList={toggleWatchList}
                />
              }
            />
            <Route
              path="/watchlist"
              element={
                <WatchList
                  watchList={watchList}
                  books={books}
                  toggleWatchList={toggleWatchList}
                />
              }
            />
          </Routes>
        </Router>
      </div>

      <Footer />
    </div>
  );
}

export default App;
