import React from "react";
import "./App.css";
//import Home from "./components/Home";
//import Notice from "./components/Notice";
import Club from "./components/Club";
//import Contact from "./components/Contact";

function App() {
  return (
    <div className="app">
      <header>
        <h1>🏫 우리 학교 홈페이지에 오신 것을 환영합니다!</h1>
      </header>
      <section id="club">
        <Club />
      </section>
      <footer>
        <p>© 2025 우리학교. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;