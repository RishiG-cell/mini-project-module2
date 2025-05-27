import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar">
        <img />
        <h1>Recipe Book</h1>
        <img />
      </nav>

      <div className="articles">
        <section className="section1">
          <h2>Section1</h2>
        </section>
        <section className="section2">
          <h2>Section2</h2>
        </section>

        <section id="sidebar">
          <a href="#">Home</a>
          <a href="#">Recipes</a>
          <a href="#">About us </a>
        </section>
      </div>
      <footer className="footer">
        <a href="https://github.com/RishiG-cell/mini-project-module2">
          @Github
        </a>
      </footer>
    </>
  );
}

export default App;
