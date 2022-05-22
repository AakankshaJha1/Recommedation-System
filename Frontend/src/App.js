import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      
      
      {/* Banner */}
      <Banner/>
      {/* Movie Classfication */}
     
      <Row 
        title ="TRENDING NOW" 
        fetchURL={requests.fetchNetflixOriginals}
        islargeRow
      />
      <Row title ="Must watch" fetchURL={requests.fetchTrending}/>
      <Row title ="Top Rates" fetchURL={requests.fetchTopRated}/>
      <h2>Categories</h2>
      <Row title ="Action Movies" fetchURL={requests.fetchActionMovies}/>
      <Row title ="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
      <Row title ="Documentaries" fetchURL={requests.fetchDocumantaries}/>
      <Row title ="Romance Movies" fetchURL={requests.fetchRomanceMovies}/>
      <Row title ="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
    </div>
  );
}

export default App;