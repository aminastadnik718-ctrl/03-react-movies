
import Toast from 'react-hot-toast';

interface SearchBarProps {
    onSearch: (query: string) => void;
    }

    export default function SearchBar({ onSearch }: SearchBarProps) {
    const handleSubmit = (FormData: FormData) => {
        const query = FormData.get('query')?.toString().trim() ?? "";
        if (!query) {
            Toast.error('Please enter a search query.');
            return;
        }
        onSearch(query);
    };
    
    return (
        <header>
            <form action={handleSubmit}>
                <input
                    type="text"
                    name="query"
                    placeholder="Search movies..."
                    autoComplete="off"
                    autoFocus
                />
                <button type="submit">Search</button>
            </form>
        </header>
    );
}





