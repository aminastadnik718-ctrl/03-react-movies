
import Toast from 'react-hot-toast';
import React, { type FormEvent } from 'react';
import css from './SearchBar.module.css';

interface SearchBarProps {
    onSubmit: (query: string) => void;
    }

    export const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => { {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const query = formData.get('query')?.toString().trim();
        if (!query) {
            Toast.error('Please enter a search query.');
            return;
        }
        onSubmit(query);
    };
}
    
    return (

    <header className={css.header}>
 <div className={css.container}>
<a
 className={css.link}
 href="https://www.themoviedb.org/"
 target="_blank"
rel="noopener noreferrer" >
 Powered by TMDB
 </a>
 <form className={css.form} onSubmit={handleSubmit}>
 <input
 className={css.input}
 type="text"
 name="query"
 autoComplete="off"
 placeholder="Search movies..."
 autoFocus
 />
 <button className={css.button} type="submit">
 Search
 </button>
 </form>
 </div>
</header>
    )

}

    




