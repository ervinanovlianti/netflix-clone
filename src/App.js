import './App.css';
import React from 'react';
import Row from './Row';
import requests from './requests';
import Banner from "./Banner";


function App() {
  return (
    <div className="App">
      {/* Navber */}
      {/* Banner */}
      <Banner />
      <Row 
        title="NETFLIX ORIGINAL" 
        fetchUrl={requests.fetchNetflixOriginals} 
        isLargeRow={true} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentary" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
