import React from "react";
import "../styles.css";

export default function ProjectInfo() {
  return (
    <div>
      <h1 className="title">O projekte</h1>
      <br />
      <h4>Použité technológie:</h4>
      <ul className="ul-list">
        <li>React.js</li>
        <li>React Router</li>
        <li>JavaScript</li>
        <li>HTML5</li>
        <li>CSS3</li>
      </ul>

      <p class="info-text">
        Odkaz na repozitár:
        <a
          href="https://github.com/daviddiczhazy/citajto"
          target="_blank"
          rel="noopener noreferrer"
          class="underline"
        >
          Projekt
        </a>
      </p>
    </div>
  );
}
