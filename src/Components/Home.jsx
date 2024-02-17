import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="homepage">
        <header>
          <h1>Mehran Muzaffar Bhat</h1>
        </header>
        <main>
          <section>
            <h2>About:</h2>
            <br />
            <p>Front-end Developer</p>
          </section>
          <section>
            <h2>What i do !</h2>
            <br />
            <ul>
              <li>Web Development Languages:</li>
              <li>Responsive Design:</li>
              <li>Frameworks and Libraries:</li>
              <li>Collaboration:</li>
              <li>Version Control:</li>
              <li>Cross-browser Compatibility:</li>
              <li>User Experience (UX):</li>
            </ul>
          </section>
        </main>
        <footer>
          <p>&copy; 2024 Mehran App</p>
        </footer>
      </div>
    </>
  );
};

export default Home;
