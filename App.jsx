import styles from './App.module.css';
import { MoviesGrid } from './components/MoviesGrid';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { MovieDetails } from './pages/MoviesDetails';
import { LandingPage } from './pages/LandingPage';

export function App() {

    const Private = ({Component}) => {
        const auth = false; 
    
        return auth ? <Component/> : <Navigate to="/" />
    }

    return <Router>
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
                <Route exact path="/movies/:movieId" element={<Private Component={<MovieDetails/>}/>}/>
                <Route path="/" element={<Private Component={<LandingPage/>}/>}/>
            </Routes>
        </main>
    </Router>;
}