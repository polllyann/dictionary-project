import books from "./books.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <img src={books} alt="books" width={60}/>
    <main>
      <Dictionary />
    </main>
    <footer className="app-footer">
      Coded by Anna P.
    </footer>
    </div>
    </div>
  );
}

export default App;
