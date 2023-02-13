import './App.css';
import Header from './Components/Header';
import MoviesList from './Components/MoviesList';
import Footer from './Components/Footer';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from './Components/MovieDetails';

function App() {

  const [movies , setMovies] = useState([])
  // داله عرض الافلام من ال api
  const getMovies = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`);
      setMovies(response.data.results)
  }

  useEffect(() => {
    getMovies()
  } ,[])


  // داله البحث
  const search = async (keyword) => {
    if (keyword === '') {
      getMovies()
    } else {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&query=${keyword}`);
        setMovies(response.data.results)
    }
}



  const getPage = async (page) => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=${page}`);
  setMovies(response.data.results)
}


  return (
    < >

      <Header className="" search={search}/>


      <BrowserRouter>

        <Routes> 
          <Route path='/' element={<MoviesList movies={movies} getPage={getPage}/>}/>
          <Route path='/movie/:id' element={<MovieDetails/>}/>
        </Routes>

      </BrowserRouter>




      <Footer/>
      
    </>
  );
}

export default App;
