import { MoviesGrid } from "../components/MoviesGrid";
import { Search } from "../components/Search";
import { useQuery } from "../hooks/useQuery";
import { useDebounce } from "../hooks/useDebounce";

export function LandingPage() {
    const query = useQuery();
    const search = query.get("search");
    
    const debouncedSearch = useDebounce(search, 3000);
    return <div>
        <Search/>
        <MoviesGrid key={debouncedSearch} search={debouncedSearch}/>
    </div>;
}