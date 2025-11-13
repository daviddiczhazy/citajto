import React from "react";
import "../styles.css";

export default function Header() {
  return (
    <div className="header">
      <img src="logo.png" alt="CitajTo" className="logo" />
      <h2 className="subtitle">Vyberte si knihy, ktoré plánujete čítať</h2>
    </div>
  );
}
