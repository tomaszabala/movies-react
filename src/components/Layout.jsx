import { Link, Outlet } from "react-router-dom";
import  styles  from "../App.module.css";


const Layout = () => {
    return <>
            <header>
                <Link to="/">
                    {<h2 className={styles.title}>Movies</h2>}
                </Link> 
                {/* <Link to='/'>Home</Link>
                <br />
                <Link to='/movie'>Movie</Link> */}
            </header>
            <main>
                <Outlet/>        
            </main>    
        </>
}

export default Layout;

