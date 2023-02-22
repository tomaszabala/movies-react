import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MovieDetails } from './pages/MoviesDetails';
import { LandingPage } from './pages/LandingPage';
import  Layout  from './components/Layout';

export function App(movie) {    

    return <BrowserRouter>      
                
            <Routes>         
                
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<LandingPage/>}/>
                        <Route path="/movies/:movieId" element={<MovieDetails/>}/>        

                    </Route>                
            </Routes>        
    </BrowserRouter>;    
}

// NO SE RENDERIZA MOVIESDETAILS, POR ENDE NO SE VE NADA AL CLICKEAR EN CADA PELICULA

