import './App.css';
import Banner from './Banner';
import Navbar from './Navbar';
import Row from './Row';
import { requests } from './requests';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>

      <Row isposter={true} title={"trending movies"} fetchurl={requests. fetchTrending}></Row>
      <Row title={"Netflix Orginals"} fetchurl={requests. fetchNetflixOriginals}></Row>
      <Row title={"TopRated"} fetchurl={requests. fetchTopRated}></Row>
      <Row title={"ActionMovies"} fetchurl={requests.fetchActionMovies}></Row>
      <Row title={"ComedyMovies"} fetchurl={requests. fetchComedyMovies}></Row>
      <Row title={"HorrorMovies"} fetchurl={requests. fetchHorrorMovies}></Row>
      <Row title={"RomanceMovies"} fetchurl={requests.  fetchRomanceMovies}></Row>
      <Row title={"Documentaries"} fetchurl={requests.fetchDocumentaries}></Row>
    </div>
  );
}

export default App;
