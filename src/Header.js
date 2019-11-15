import React from 'react';
import './App.css';
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import Home from './Home';
import Genre from './Genre';
import Book from './Book';
import { genreList } from './utils.js';


function Header() {

  const navs = [];
  const routes = [];

  function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
  }

  for (const [index, value] of genreList.entries()) {
    let route = "/genre/"+replaceAll(value," ", "-");
    navs.push(<NavLink className="dropdown-item" to={route}>{value}</NavLink>)
    routes.push(<Route path={route} component={Genre}/>)
  }


  return (
    <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Fiction Up</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Genres
                  </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            {navs}
                        </div>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search Books" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
        <Route path="/" exact component={Home}/>
        {routes}
    </BrowserRouter>
  );
}

export default Header;
