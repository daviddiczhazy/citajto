import "./App.css";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BooksList from "./components/BooksList";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <BooksList />
      </div>

      <Footer />
    </div>
  );
}

export default App;
