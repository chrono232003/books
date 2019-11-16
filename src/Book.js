import React, { useState, useEffect } from 'react';
import './App.css';

function Book(props) {

  const [resultsState, setResultsState] = useState(0);

  const xml = require("xml-parse");
  async function getBookInfo() {
    console.log("This is the book on the book page", props.bookInfo.title)
    //const [navLinksState, setNavLinksState] = useState(0);
     try {
          const resp = await fetch("https://www.googleapis.com/books/v1/volumes?q="+props.bookInfo.isbn);
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
    getBookInfo();
  },[]);
  return (
    <>
      <p>{props.bookInfo.title}</p>
      <img src={props.bookInfo.imageLink}/>
      <p>{props.bookInfo.price}</p>
    </>
  );
}

export default Book;
