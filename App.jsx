import styles from './App.module.css';
import { MoviesGrid } from './components/MoviesGrid';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { MovieDetails } from './pages/MoviesDetails';
import { LandingPage } from './pages/LandingPage';

export function App() {

    

    return <BrowserRouter>
        <header>
            <Link to="/">
                {<h2 className={styles.title}>Movies</h2>}
            </Link> 
            <Link to='/'>Home</Link>
            <br />
            <Link to='/movie'>Movie</Link>
        </header>
        <main>
            <div><MoviesGrid/></div>
            <Routes>
            
                <Route path="/" element={<LandingPage/>}>

                    <Route exact path="/movies/:movieId" element={<MovieDetails/>}/>

                </Route>
            </Routes>
        </main>
    </BrowserRouter>;
}