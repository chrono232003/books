import React, { useState, useEffect } from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import Book from './Book';
import { data } from './testData.js';

function Home(props) {

  const [resultsState, setResultsState] = useState(0);

  const xml = require("xml-parse");
  async function getHomePageItems () {

function encodeAffiliateLink(listingUrl) {
  return "http://affiliates.abebooks.com/c/1352480/77798/2029?u=" + encodeURIComponent(listingUrl);
}

function goToPage(link) {
  window.open(link, '_blank');
}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

function redirectToBook(link, bookInfo) {
  //return <Redirect to={link}/>
  //props.history.push(link);
  props.history.push(link);
  props.bookInfo(bookInfo);
  //props.bookInfo("tlkjflasjflsjflsajflsajfl;sajflsafksa");
}

    //const [navLinksState, setNavLinksState] = useState(0);
     try {
       const results = [];
         //const apiKey = "4bb5cfcc-101a-4d29-88cf-e2df55846943";
         //const resp = await fetch(`/search?keyword=tragedy&clientkey=${apiKey}`);
         //let data = await resp.text();

         if (data) {
           const parsedResponse = new xml.DOM(xml.parse(data));
           const books = parsedResponse.document.getElementsByTagName('Book');
           for (var i=0; i<books.length; i++) {
            if (books[i].getElementsByTagName("catalogImage")[0] && books[i].getElementsByTagName("title")[0]) {
              const imageLink = books[i].getElementsByTagName("catalogImage")[0].innerXML;
              const title = books[i].getElementsByTagName("title")[0].innerXML;
              const link = encodeAffiliateLink(books[i].getElementsByTagName("listingUrl")[0].innerXML);
              const isbn = books[i].getElementsByTagName("isbn13")[0].innerXML;
              const price = books[i].getElementsByTagName("listingPrice")[0].innerXML;
              const bookInfo = {"title":title, "imageLink":imageLink, "link":link, "isbn":isbn, "price":price};
              results.push(<div className="col-sm book">
                                <div class="book-img-div">
                                  <img src={imageLink} className="book-img" />
                                </div>
                                <div class="book-info">
                                  <div class="home-button-div">
                                          <button type="button" className="btn btn-primary home-btn" onClick={() => redirectToBook("/book/"+replaceAll(title, " ", "-"), bookInfo)}>More Info</button>
                                    <button type="button" className="btn btn-primary home-btn" onClick={() =>{goToPage(link)}}>Buy Now</button>
                                  </div>
                                </div>
                            </div>
                          );
            }
          }
           console.log("results: ", results[0])
           setResultsState(results);
         } else {
           //newList.push(<p>Something went wrong, please try again later.</p>)
         }
         //setNavLinksState(elements);
     } catch (e) {
       console.log("failure: ", e);
        return e;
       }
  }
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
            {resultsState}
        </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
