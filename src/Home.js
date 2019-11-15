import React, { useState, useEffect } from 'react';
import './App.css';
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import Book from './Book';


function Home() {

  const data = `<?xml version="1.0" encoding="UTF-8"?>
<searchResults>
  <resultCount>361893</resultCount>
  <Book>
    <bookId>30389227188</bookId>
    <isbn10>0679456821</isbn10>
    <isbn13>9780679456827</isbn13>
    <listingCondition>NOT NEW BOOK</listingCondition>
    <itemCondition>Fair</itemCondition>
    <quantity>2</quantity>
    <vendorCurrency>USD</vendorCurrency>
    <listingPrice>1.0</listingPrice>
    <firstBookShipCost>2.95</firstBookShipCost>
    <extraBookShipCost>0.0</extraBookShipCost>
    <minShipDays>0</minShipDays>
    <maxShipDays>0</maxShipDays>
    <totalListingPrice>3.95</totalListingPrice>
    <listingUrl>www.abebooks.com/servlet/BookDetailsPL?bi=30389227188&amp;cm_ven=sws&amp;cm_cat=sws&amp;cm_pla=sws&amp;cm_ite=30389227188</listingUrl>
    <title>American Tragedy: The Uncensored Story of the Simpson Defense</title>
    <catalogImage>https://pictures.abebooks.com/isbn/9780679456827-us.jpg</catalogImage>
    <vendorName>Clean Earth Books</vendorName>
    <vendorLocation>Atlanta, GA, U.S.A.</vendorLocation>
    <vendorId>52680637</vendorId>
    <sellerRating>5</sellerRating>
  </Book>
  <Book>
    <bookId>30404711218</bookId>
    <isbn10>1590527410</isbn10>
    <isbn13>9781590527412</isbn13>
    <listingCondition>NOT NEW BOOK</listingCondition>
    <itemCondition>Good</itemCondition>
    <quantity>1</quantity>
    <vendorCurrency>USD</vendorCurrency>
    <listingPrice>1.0</listingPrice>
    <firstBookShipCost>2.95</firstBookShipCost>
    <extraBookShipCost>0.0</extraBookShipCost>
    <minShipDays>0</minShipDays>
    <maxShipDays>0</maxShipDays>
    <totalListingPrice>3.95</totalListingPrice>
    <listingUrl>www.abebooks.com/servlet/BookDetailsPL?bi=30404711218&amp;cm_ven=sws&amp;cm_cat=sws&amp;cm_pla=sws&amp;cm_ite=30404711218</listingUrl>
    <title>Faith in the Fog of War: Stories of Triumph and Tragedy in the Midst of War</title>
    <catalogImage>https://pictures.abebooks.com/isbn/9781590527412-us.jpg</catalogImage>
    <vendorName>Clean Earth Books</vendorName>
    <vendorLocation>Atlanta, GA, U.S.A.</vendorLocation>
    <vendorId>52680637</vendorId>
    <sellerRating>5</sellerRating>
  </Book>
  <Book>
    <bookId>30404934167</bookId>
    <isbn10>0195054938</isbn10>
    <isbn13>9780195054934</isbn13>
    <listingCondition>NOT NEW BOOK</listingCondition>
    <itemCondition>Fair</itemCondition>
    <quantity>2</quantity>
    <vendorCurrency>USD</vendorCurrency>
    <listingPrice>1.0</listingPrice>
    <firstBookShipCost>2.95</firstBookShipCost>
    <extraBookShipCost>0.0</extraBookShipCost>
    <minShipDays>0</minShipDays>
    <maxShipDays>0</maxShipDays>
    <totalListingPrice>3.95</totalListingPrice>
    <listingUrl>www.abebooks.com/servlet/BookDetailsPL?bi=30404934167&amp;cm_ven=sws&amp;cm_cat=sws&amp;cm_pla=sws&amp;cm_ite=30404934167</listingUrl>
    <title>Oedipus the King (Greek Tragedy in New Translations)</title>
    <catalogImage>https://pictures.abebooks.com/isbn/9780195054934-us.jpg</catalogImage>
    <vendorName>Clean Earth Books</vendorName>
    <vendorLocation>Atlanta, GA, U.S.A.</vendorLocation>
    <vendorId>52680637</vendorId>
    <sellerRating>5</sellerRating>
  </Book>
  <Book>
    <bookId>30412883414</bookId>
    <isbn10>0020419805</isbn10>
    <isbn13>9780020419808</isbn13>
    <listingCondition>NOT NEW BOOK</listingCondition>
    <itemCondition>Good</itemCondition>
    <quantity>3</quantity>
    <vendorCurrency>USD</vendorCurrency>
    <listingPrice>1.0</listingPrice>
    <firstBookShipCost>2.95</firstBookShipCost>
    <extraBookShipCost>0.0</extraBookShipCost>
    <minShipDays>0</minShipDays>
    <maxShipDays>0</maxShipDays>
    <totalListingPrice>3.95</totalListingPrice>
    <listingUrl>www.abebooks.com/servlet/BookDetailsPL?bi=30412883414&amp;cm_ven=sws&amp;cm_cat=sws&amp;cm_pla=sws&amp;cm_ite=30412883414</listingUrl>
    <title>Helen Keller: From Tragedy to Triumph (The Childhood of Famous Americans Series)</title>
    <catalogImage>https://pictures.abebooks.com/isbn/9780020419808-us.jpg</catalogImage>
    <vendorName>Clean Earth Books</vendorName>
    <vendorLocation>Atlanta, GA, U.S.A.</vendorLocation>
    <vendorId>52680637</vendorId>
    <sellerRating>5</sellerRating>
  </Book>
  <Book>
    <bookId>30413309755</bookId>
    <isbn10>039577537X</isbn10>
    <isbn13>9780395775370</isbn13>
    <listingCondition>NOT NEW BOOK</listingCondition>
    <itemCondition>Good</itemCondition>
    <quantity>1</quantity>
    <vendorCurrency>USD</vendorCurrency>
    <listingPrice>1.0</listingPrice>
    <firstBookShipCost>2.95</firstBookShipCost>
    <extraBookShipCost>0.0</extraBookShipCost>
    <minShipDays>0</minShipDays>
    <maxShipDays>0</maxShipDays>
    <totalListingPrice>3.95</totalListingPrice>
    <listingUrl>www.abebooks.com/servlet/BookDetailsPL?bi=30413309755&amp;cm_ven=sws&amp;cm_cat=sws&amp;cm_pla=sws&amp;cm_ite=30413309755</listingUrl>
    <title>The tragedy of Romeo and Juliet and Related Readings (McDougal Littell Literature Connections)</title>
    <catalogImage>https://pictures.abebooks.com/isbn/9780395775370-us.jpg</catalogImage>
    <vendorName>Clean Earth Books</vendorName>
    <vendorLocation>Atlanta, GA, U.S.A.</vendorLocation>
    <vendorId>52680637</vendorId>
    <sellerRating>5</sellerRating>
  </Book>
  <Book>
    <bookId>30415179149</bookId>
    <isbn10>1556526547</isbn10>
    <isbn13>9781556526541</isbn13>
    <listingCondition>NOT NEW BOOK</listingCondition>
    <itemCondition>Fair</itemCondition>
    <quantity>1</quantity>
    <vendorCurrency>USD</vendorCurrency>
    <listingPrice>1.0</listingPrice>
    <firstBookShipCost>2.95</firstBookShipCost>
    <extraBookShipCost>0.0</extraBookShipCost>
    <minShipDays>0</minShipDays>
    <maxShipDays>0</maxShipDays>
    <totalListingPrice>3.95</totalListingPrice>
    <listingUrl>www.abebooks.com/servlet/BookDetailsPL?bi=30415179149&amp;cm_ven=sws&amp;cm_cat=sws&amp;cm_pla=sws&amp;cm_ite=30415179149</listingUrl>
    <title>Chicago History for Kids: Triumphs and Tragedies of the Windy City Includes 21 Activities (For Kids series)</title>
    <catalogImage>https://pictures.abebooks.com/isbn/9781556526541-us.jpg</catalogImage>
    <vendorName>Clean Earth Books</vendorName>
    <vendorLocation>Atlanta, GA, U.S.A.</vendorLocation>
    <vendorId>52680637</vendorId>
    <sellerRating>5</sellerRating>
  </Book>
  <Book>
    <bookId>30422319118</bookId>
    <isbn10>0812925238</isbn10>
    <isbn13>9780812925234</isbn13>
    <listingCondition>NOT NEW BOOK</listingCondition>
    <itemCondition>Good</itemCondition>
    <quantity>1</quantity>
    <vendorCurrency>USD</vendorCurrency>
    <listingPrice>1.0</listingPrice>
    <firstBookShipCost>2.95</firstBookShipCost>
    <extraBookShipCost>0.0</extraBookShipCost>
    <minShipDays>0</minShipDays>
    <maxShipDays>0</maxShipDays>
    <totalListingPrice>3.95</totalListingPrice>
    <listingUrl>www.abebooks.com/servlet/BookDetailsPL?bi=30422319118&amp;cm_ven=sws&amp;cm_cat=sws&amp;cm_pla=sws&amp;cm_ite=30422319118</listingUrl>
    <title>In Retrospect: The Tragedy and Lessons of Vietnam</title>
    <vendorName>Clean Earth Books</vendorName>
    <vendorLocation>Atlanta, GA, U.S.A.</vendorLocation>
    <vendorId>52680637</vendorId>
    <sellerRating>5</sellerRating>
  </Book>
  <Book>
    <bookId>30425726118</bookId>
    <isbn10>0020419805</isbn10>
    <isbn13>9780020419808</isbn13>
    <listingCondition>NOT NEW BOOK</listingCondition>
    <itemCondition>Fair</itemCondition>
    <quantity>2</quantity>
    <vendorCurrency>USD</vendorCurrency>
    <listingPrice>1.0</listingPrice>
    <firstBookShipCost>2.95</firstBookShipCost>
    <extraBookShipCost>0.0</extraBookShipCost>
    <minShipDays>0</minShipDays>
    <maxShipDays>0</maxShipDays>
    <totalListingPrice>3.95</totalListingPrice>
    <listingUrl>www.abebooks.com/servlet/BookDetailsPL?bi=30425726118&amp;cm_ven=sws&amp;cm_cat=sws&amp;cm_pla=sws&amp;cm_ite=30425726118</listingUrl>
    <title>Helen Keller: From Tragedy to Triumph (The Childhood of Famous Americans Series)</title>
    <catalogImage>https://pictures.abebooks.com/isbn/9780020419808-us.jpg</catalogImage>
    <vendorName>Clean Earth Books</vendorName>
    <vendorLocation>Atlanta, GA, U.S.A.</vendorLocation>
    <vendorId>52680637</vendorId>
    <sellerRating>5</sellerRating>
  </Book>
  <Book>
    <bookId>30426800119</bookId>
    <isbn10>0316259098</isbn10>
    <isbn13>9780316259095</isbn13>
    <listingCondition>NOT NEW BOOK</listingCondition>
    <itemCondition>Fair</itemCondition>
    <quantity>1</quantity>
    <vendorCurrency>USD</vendorCurrency>
    <listingPrice>1.0</listingPrice>
    <firstBookShipCost>2.95</firstBookShipCost>
    <extraBookShipCost>0.0</extraBookShipCost>
    <minShipDays>0</minShipDays>
    <maxShipDays>0</maxShipDays>
    <totalListingPrice>3.95</totalListingPrice>
    <listingUrl>www.abebooks.com/servlet/BookDetailsPL?bi=30426800119&amp;cm_ven=sws&amp;cm_cat=sws&amp;cm_pla=sws&amp;cm_ite=30426800119</listingUrl>
    <title>Before You Judge Me: The Triumph and Tragedy of Michael Jacksons Last Days</title>
    <catalogImage>https://pictures.abebooks.com/isbn/9780316259095-us.jpg</catalogImage>
    <vendorName>Clean Earth Books</vendorName>
    <vendorLocation>Atlanta, GA, U.S.A.</vendorLocation>
    <vendorId>52680637</vendorId>
    <sellerRating>5</sellerRating>
  </Book>
  <Book>
    <bookId>30426922172</bookId>
    <isbn10>0060789441</isbn10>
    <isbn13>9780060789442</isbn13>
    <listingCondition>NOT NEW BOOK</listingCondition>
    <itemCondition>Good</itemCondition>
    <quantity>1</quantity>
    <vendorCurrency>USD</vendorCurrency>
    <listingPrice>1.0</listingPrice>
    <firstBookShipCost>2.95</firstBookShipCost>
    <extraBookShipCost>0.0</extraBookShipCost>
    <minShipDays>0</minShipDays>
    <maxShipDays>0</maxShipDays>
    <totalListingPrice>3.95</totalListingPrice>
    <listingUrl>www.abebooks.com/servlet/BookDetailsPL?bi=30426922172&amp;cm_ven=sws&amp;cm_cat=sws&amp;cm_pla=sws&amp;cm_ite=30426922172</listingUrl>
    <title>Dying to Cross: The Worst Immigrant Tragedy in American History</title>
    <catalogImage>https://pictures.abebooks.com/isbn/9780060789442-us.jpg</catalogImage>
    <vendorName>Clean Earth Books</vendorName>
    <vendorLocation>Atlanta, GA, U.S.A.</vendorLocation>
    <vendorId>52680637</vendorId>
    <sellerRating>5</sellerRating>
  </Book>
  <Book>
    <bookId>30427213488</bookId>
    <isbn10>0964729237</isbn10>
    <isbn13>9780964729230</isbn13>
    <listingCondition>NOT NEW BOOK</listingCondition>
    <itemCondition>Good</itemCondition>
    <quantity>4</quantity>
    <vendorCurrency>USD</vendorCurrency>
    <listingPrice>1.0</listingPrice>
    <firstBookShipCost>2.95</firstBookShipCost>
    <extraBookShipCost>0.0</extraBookShipCost>
    <minShipDays>0</minShipDays>
    <maxShipDays>0</maxShipDays>
    <totalListingPrice>3.95</totalListingPrice>
    <listingUrl>www.abebooks.com/servlet/BookDetailsPL?bi=30427213488&amp;cm_ven=sws&amp;cm_cat=sws&amp;cm_pla=sws&amp;cm_ite=30427213488</listingUrl>
    <title>The Shack: Where Tragedy Confronts Eternity</title>
    <catalogImage>https://pictures.abebooks.com/isbn/9780964729230-us.jpg</catalogImage>
    <vendorName>Clean Earth Books</vendorName>
    <vendorLocation>Atlanta, GA, U.S.A.</vendorLocation>
    <vendorId>52680637</vendorId>
    <sellerRating>5</sellerRating>
  </Book>
  <Book>
    <bookId>30429005262</bookId>
    <isbn13>2900195061672</isbn13>
    <listingCondition>NOT NEW BOOK</listingCondition>
    <itemCondition>Fair</itemCondition>
    <quantity>6</quantity>
    <vendorCurrency>USD</vendorCurrency>
    <listingPrice>1.0</listingPrice>
    <firstBookShipCost>2.95</firstBookShipCost>
    <extraBookShipCost>0.0</extraBookShipCost>
    <minShipDays>0</minShipDays>
    <maxShipDays>0</maxShipDays>
    <totalListingPrice>3.95</totalListingPrice>
    <listingUrl>www.abebooks.com/servlet/BookDetailsPL?bi=30429005262&amp;cm_ven=sws&amp;cm_cat=sws&amp;cm_pla=sws&amp;cm_ite=30429005262</listingUrl>
    <title>Antigone (Greek Tragedy in New Translations)</title>
    <vendorName>Clean Earth Books</vendorName>
    <vendorLocation>Atlanta, GA, U.S.A.</vendorLocation>
    <vendorId>52680637</vendorId>
    <sellerRating>5</sellerRating>
  </Book>
  <Book>
    <bookId>30429089352</bookId>
    <isbn10>0718077318</isbn10>
    <isbn13>9780718077310</isbn13>
    <quantity>1</quantity>
    <vendorCurrency>USD</vendorCurrency>
    <listingPrice>1.0</listingPrice>
    <firstBookShipCost>2.95</firstBookShipCost>
    <extraBookShipCost>0.0</extraBookShipCost>
    <minShipDays>0</minShipDays>
    <maxShipDays>0</maxShipDays>
    <totalListingPrice>3.95</totalListingPrice>
    <listingUrl>www.abebooks.com/servlet/BookDetailsPL?bi=30429089352&amp;cm_ven=sws&amp;cm_cat=sws&amp;cm_pla=sws&amp;cm_ite=30429089352</listingUrl>
    <title>We Are Charleston: Tragedy and Triumph at Mother Emanuel</title>
    <catalogImage>https://pictures.abebooks.com/isbn/9780718077310-us.jpg</catalogImage>
    <vendorName>Clean Earth Books</vendorName>
    <vendorLocation>Atlanta, GA, U.S.A.</vendorLocation>
    <vendorId>52680637</vendorId>
    <sellerRating>5</sellerRating>
  </Book>
  <Book>
    <bookId>30429094976</bookId>
    <isbn10>019513592X</isbn10>
    <isbn13>9780195135923</isbn13>
    <listingCondition>NOT NEW BOOK</listingCondition>
    <itemCondition>Good</itemCondition>
    <quantity>1</quantity>
    <vendorCurrency>USD</vendorCurrency>
    <listingPrice>1.0</listingPrice>
    <firstBookShipCost>2.95</firstBookShipCost>
    <extraBookShipCost>0.0</extraBookShipCost>
    <minShipDays>0</minShipDays>
    <maxShipDays>0</maxShipDays>
    <totalListingPrice>3.95</totalListingPrice>
    <listingUrl>www.abebooks.com/servlet/BookDetailsPL?bi=30429094976&amp;cm_ven=sws&amp;cm_cat=sws&amp;cm_pla=sws&amp;cm_ite=30429094976</listingUrl>
    <title>The Oresteia (Greek Tragedy in New Translations)</title>
    <catalogImage>https://pictures.abebooks.com/isbn/9780195135923-us.jpg</catalogImage>
    <vendorName>Clean Earth Books</vendorName>
    <vendorLocation>Atlanta, GA, U.S.A.</vendorLocation>
    <vendorId>52680637</vendorId>
    <sellerRating>5</sellerRating>
  </Book>
  <Book>
    <bookId>30430297069</bookId>
    <isbn10>0142417483</isbn10>
    <isbn13>9780142417485</isbn13>
    <listingCondition>NOT NEW BOOK</listingCondition>
    <itemCondition>Good</itemCondition>
    <quantity>1</quantity>
    <vendorCurrency>USD</vendorCurrency>
    <listingPrice>1.0</listingPrice>
    <firstBookShipCost>2.95</firstBookShipCost>
    <extraBookShipCost>0.0</extraBookShipCost>
    <minShipDays>0</minShipDays>
    <maxShipDays>0</maxShipDays>
    <totalListingPrice>3.95</totalListingPrice>
    <listingUrl>www.abebooks.com/servlet/BookDetailsPL?bi=30430297069&amp;cm_ven=sws&amp;cm_cat=sws&amp;cm_pla=sws&amp;cm_ite=30430297069</listingUrl>
    <title>The Total Tragedy of a Girl Named Hamlet</title>
    <catalogImage>https://pictures.abebooks.com/isbn/9780142417485-us.jpg</catalogImage>
    <vendorName>Clean Earth Books</vendorName>
    <vendorLocation>Atlanta, GA, U.S.A.</vendorLocation>
    <vendorId>52680637</vendorId>
    <sellerRating>5</sellerRating>
  </Book>
  <Book>
    <bookId>30431207129</bookId>
    <isbn10>1576839362</isbn10>
    <isbn13>9781576839362</isbn13>
    <listingCondition>NOT NEW BOOK</listingCondition>
    <itemCondition>Good</itemCondition>
    <quantity>1</quantity>
    <vendorCurrency>USD</vendorCurrency>
    <listingPrice>1.0</listingPrice>
    <firstBookShipCost>2.95</firstBookShipCost>
    <extraBookShipCost>0.0</extraBookShipCost>
    <minShipDays>0</minShipDays>
    <maxShipDays>0</maxShipDays>
    <totalListingPrice>3.95</totalListingPrice>
    <listingUrl>www.abebooks.com/servlet/BookDetailsPL?bi=30431207129&amp;cm_ven=sws&amp;cm_cat=sws&amp;cm_pla=sws&amp;cm_ite=30431207129</listingUrl>
    <title>Marked for Life: Choosing Hope and Discovering Purpose After Earth-Shattering Tragedy</title>
    <catalogImage>https://pictures.abebooks.com/isbn/9781576839362-us.jpg</catalogImage>
    <vendorName>Clean Earth Books</vendorName>
    <vendorLocation>Atlanta, GA, U.S.A.</vendorLocation>
    <vendorId>52680637</vendorId>
    <sellerRating>5</sellerRating>
  </Book>
  <Book>
    <bookId>30434594969</bookId>
    <isbn10>0226307921</isbn10>
    <isbn13>9780226307923</isbn13>
    <listingCondition>NOT NEW BOOK</listingCondition>
    <itemCondition>Good</itemCondition>
    <quantity>4</quantity>
    <vendorCurrency>USD</vendorCurrency>
    <listingPrice>1.0</listingPrice>
    <firstBookShipCost>2.95</firstBookShipCost>
    <extraBookShipCost>0.0</extraBookShipCost>
    <minShipDays>0</minShipDays>
    <maxShipDays>0</maxShipDays>
    <totalListingPrice>3.95</totalListingPrice>
    <listingUrl>www.abebooks.com/servlet/BookDetailsPL?bi=30434594969&amp;cm_ven=sws&amp;cm_cat=sws&amp;cm_pla=sws&amp;cm_ite=30434594969</listingUrl>
    <title>The Complete Greek Tragedies: Sophocles I</title>
    <catalogImage>https://pictures.abebooks.com/isbn/9780226307923-us.jpg</catalogImage>
    <vendorName>Clean Earth Books</vendorName>
    <vendorLocation>Atlanta, GA, U.S.A.</vendorLocation>
    <vendorId>52680637</vendorId>
    <sellerRating>5</sellerRating>
  </Book>
  <Book>
    <bookId>30435390462</bookId>
    <isbn10>0141001828</isbn10>
    <isbn13>9780141001821</isbn13>
    <listingCondition>NOT NEW BOOK</listingCondition>
    <itemCondition>Good</itemCondition>
    <quantity>10</quantity>
    <vendorCurrency>USD</vendorCurrency>
    <listingPrice>1.0</listingPrice>
    <firstBookShipCost>2.95</firstBookShipCost>
    <extraBookShipCost>0.0</extraBookShipCost>
    <minShipDays>0</minShipDays>
    <maxShipDays>0</maxShipDays>
    <totalListingPrice>3.95</totalListingPrice>
    <listingUrl>www.abebooks.com/servlet/BookDetailsPL?bi=30435390462&amp;cm_ven=sws&amp;cm_cat=sws&amp;cm_pla=sws&amp;cm_ite=30435390462</listingUrl>
    <title>In the Heart of the Sea: The Tragedy of the Whaleship Essex</title>
    <catalogImage>https://pictures.abebooks.com/isbn/9780141001821-us.jpg</catalogImage>
    <vendorName>Clean Earth Books</vendorName>
    <vendorLocation>Atlanta, GA, U.S.A.</vendorLocation>
    <vendorId>52680637</vendorId>
    <sellerRating>5</sellerRating>
  </Book>
  <Book>
    <bookId>30435499626</bookId>
    <isbn10>0307930483</isbn10>
    <isbn13>9780307930484</isbn13>
    <listingCondition>NOT NEW BOOK</listingCondition>
    <itemCondition>Good</itemCondition>
    <quantity>2</quantity>
    <vendorCurrency>USD</vendorCurrency>
    <listingPrice>1.0</listingPrice>
    <firstBookShipCost>2.95</firstBookShipCost>
    <extraBookShipCost>0.0</extraBookShipCost>
    <minShipDays>0</minShipDays>
    <maxShipDays>0</maxShipDays>
    <totalListingPrice>3.95</totalListingPrice>
    <listingUrl>www.abebooks.com/servlet/BookDetailsPL?bi=30435499626&amp;cm_ven=sws&amp;cm_cat=sws&amp;cm_pla=sws&amp;cm_ite=30435499626</listingUrl>
    <title>The Tragedy Paper</title>
    <catalogImage>https://pictures.abebooks.com/isbn/9780307930484-us.jpg</catalogImage>
    <vendorName>Clean Earth Books</vendorName>
    <vendorLocation>Atlanta, GA, U.S.A.</vendorLocation>
    <vendorId>52680637</vendorId>
    <sellerRating>5</sellerRating>
  </Book>
  <Book>
    <bookId>30436163345</bookId>
    <isbn10>1572491809</isbn10>
    <isbn13>9781572491809</isbn13>
    <listingCondition>NOT NEW BOOK</listingCondition>
    <itemCondition>Good</itemCondition>
    <quantity>1</quantity>
    <vendorCurrency>USD</vendorCurrency>
    <listingPrice>1.0</listingPrice>
    <firstBookShipCost>2.95</firstBookShipCost>
    <extraBookShipCost>0.0</extraBookShipCost>
    <minShipDays>0</minShipDays>
    <maxShipDays>0</maxShipDays>
    <totalListingPrice>3.95</totalListingPrice>
    <listingUrl>www.abebooks.com/servlet/BookDetailsPL?bi=30436163345&amp;cm_ven=sws&amp;cm_cat=sws&amp;cm_pla=sws&amp;cm_ite=30436163345</listingUrl>
    <title>Andersonville Journey: The Civil Wars Greatest Tragedy</title>
    <catalogImage>https://pictures.abebooks.com/isbn/9781572491809-us.jpg</catalogImage>
    <vendorName>Clean Earth Books</vendorName>
    <vendorLocation>Atlanta, GA, U.S.A.</vendorLocation>
    <vendorId>52680637</vendorId>
    <sellerRating>5</sellerRating>
  </Book>
</searchResults>`

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
            //const title = books[i].getElementsByTagName("title");
            if (books[i].getElementsByTagName("catalogImage")[0] && books[i].getElementsByTagName("title")[0]) {
              const imageLink = books[i].getElementsByTagName("catalogImage")[0].innerXML;
              const title = books[i].getElementsByTagName("title")[0].innerXML;
              const link = encodeAffiliateLink(books[i].getElementsByTagName("listingUrl")[0].innerXML);
              results.push(<div className="col-sm book">
                                <div class="book-img-div">
                                  <img src={imageLink} className="book-img" />
                                </div>
                                <div class="book-info">
                                  <div class="home-button-div">
                                  <BrowserRouter>
                                    <NavLink to={"/book/"+replaceAll(title, " ", "-")}>
                                      <button type="button" className="btn btn-primary home-btn">More Info</button>
                                    </NavLink>
                                    <Route path={"/book/"+replaceAll(title, " ", "-")} component={Book}/>
                                  </BrowserRouter>
                                    <button type="button" className="btn btn-primary home-btn" onClick={() =>{goToPage(link)}}>Buy Now</button>
                                  </div>
                                </div>
                            </div>)
            }
            //console.log("imageLink: ", imageLink);

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
