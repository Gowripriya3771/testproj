import "./App.css";
import NavBar from "./Components/Navbar";
import Content from "./Components/Content";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousal from "./Components/Carousal";




function App() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [filterItem, setFilterItem] = useState([]);
  const [searchText, setSearchText] = useState("");

  const searchTerm = (value) => {
    console.log(value);
    setSearchText(value);
    setFilterItem(
      movies.filter((movie) =>
        movie.title.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    axios
      .get("https://test.create.diagnal.com/data/db.json")
      .then((response) => {
        console.log(response.data);
        const loc = JSON.stringify(response.data["movies"])
        localStorage.setItem('mov', loc)
        setMovies(response.data.movies);
        setGenres(response.data.genres);
      }).catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);


  return (
    <div className="App">

      <NavBar searchTerm={searchTerm} />
      {searchText.length ==0&&<Carousal />}
      {searchText.length > 0 && filterItem.length === 0 ? (
        <h1 className="no-result">No results found....</h1>
      ) : (
        <Content movies={filterItem.length > 0 ? filterItem : movies} genres={genres} />
      )}
    </div>
  );
}

export default App;
