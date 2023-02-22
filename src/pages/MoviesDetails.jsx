// import movies from "../components/movies.json";
import styles from "./MoviesDetails.module.css";
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import { useState } from "react";
import { get } from "../utils/httpClient";
import { Spinner } from "../components/Spinner";
import { useQuery } from "../hooks/useQuery";

export function MovieDetails() {

    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovie] = useState(null);
    
    const query = useQuery();
    const search = query.get("search");

    useEffect(() => {

    }, [search]);

    useEffect(() => {
        get("/movie/" + movieId).then(data => {
            setMovie(data);
            setIsLoading(false)
        });
    }, [movieId]);

    if (isLoading) {
        return <Spinner/>;
    }    

    const imageUrl = "https://image.tmdb.org/t/p/w500" + movies.poster_path;
    return (        
        <div className={styles.detailsContainer}>
            <img className={`${styles.col} ${styles.movieImage}`} 
                src={imageUrl} 
                alt={movies.title} 
            />
            <div className={`${styles.col} ${styles.movieDetails}`}>
                <p className={styles.firstItem}>
                    <strong>Title:</strong> {movies.title}
                </p>
                <p>
                    {/* {movie.genre_ids.map(genre_ids => genre_ids.name)} */}
                    {/* No sirve en este caso porque no tienen nombre los generos, en tal caso se puede
                    agregar a mano en el json*/}
                </p>
                <p>
                    <strong>Description:</strong> {movies.overview}
                </p>
            </div>
        </div>    
    );
}


    

  
  

