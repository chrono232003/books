import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Fiction Up</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Genres
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action and Adventure</a>
            <a class="dropdown-item" href="#">Anthology</a>
            <a class="dropdown-item" href="#">Classic</a>
            <a class="dropdown-item" href="#">Comic and Graphic Novel</a>
            <a class="dropdown-item" href="#">Crime and Detective</a>
            <a class="dropdown-item" href="#">Drama</a>
            <a class="dropdown-item" href="#">Fable</a>
            <a class="dropdown-item" href="#">Fairy Tale</a>
            <a class="dropdown-item" href="#">Fan-Fiction</a>
            <a class="dropdown-item" href="#">Fantasy</a>
            <a class="dropdown-item" href="#">Historical Fiction</a>
            <a class="dropdown-item" href="#">Horror</a>
            <a class="dropdown-item" href="#">Humor</a>
            <a class="dropdown-item" href="#">Legend</a>
            <a class="dropdown-item" href="#">Magical Realism</a>
            <a class="dropdown-item" href="#">Mystery</a>
            <a class="dropdown-item" href="#">Mythology</a>
            <a class="dropdown-item" href="#">Realistic Fiction</a>
            <a class="dropdown-item" href="#">Romance</a>
            <a class="dropdown-item" href="#">Satire</a>
            <a class="dropdown-item" href="#">Science Fiction (Sci-Fi)</a>
            <a class="dropdown-item" href="#">Short Story</a>
            <a class="dropdown-item" href="#">Suspense/Thriller</a>
            <a class="dropdown-item" href="#">Tragedy</a>
          </div>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search Books" aria-label="Search" />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
      <header className="App-header">
        <h1>Fiction Up</h1>
      </header>
    </div>
  );
}

export default App;
