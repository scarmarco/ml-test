import React from "react";
import "./style.css";

const Searchbar = ({ onSubmit }) => (
  <nav className="nav">
    <img
      className="nav-logo"
      src="https://http2.mlstatic.com/ui/navigation/3.2.7/mercadolibre/logo__small@2x.png"
      alt="logo"
    />
    <form className="nav-search" onSubmit={onSubmit}>
      <input
        className="nav-input"
        type="text"
        placeholder="Nunca dejes de buscar"
      />
      <button className="nav-button" type="submit">
        <i class="fas fa-search" />
      </button>
    </form>
  </nav>
);

export default Searchbar;
