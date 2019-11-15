import React, { useState, useEffect } from 'react';
import './App.css';



function Book() {

  const [resultsState, setResultsState] = useState(0);

  const xml = require("xml-parse");
  async function getHomePageItems () {

function encodeAffiliateLink(listingUrl) {
  return "http://affiliates.abebooks.com/c/1352480/77798/2029?u=" + encodeURIComponent(listingUrl);
}
    //const [navLinksState, setNavLinksState] = useState(0);
     try {
         const resp = await fetch("https://www.googleapis.com/books/v1/volumes?q=0679456821");
         let data = await resp.text();
        const results = []
         if (data) {
           console.log("this is the result: ", data);
         } else {
           //newList.push(<p>Something went wrong, please try again later.</p>)
         }
         //setNavLinksState(elements);
     } catch (e) {
        return e;
       }
  }
  const elements = [];
  const routes = [];
  useEffect(() => {
    getHomePageItems();
  },[]);
  return (
    <div className="App">
      <header className="App-header">
        <div className="home-intro">
          <h1>Fiction Up</h1>
          <p>Welcome to Fiction Up! We are an exclusive online book store with 1000's of books new and used from all over the world. You can Search, Browse or look at our most popular books.
          There is something here for everyone!</p>
        </div>
        <div className="book-container">
        <div className="row">

        </div>
        </div>
      </header>
    </div>
  );
}

export default Book;
