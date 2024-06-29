
import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css'
import { FormEvent } from 'react';
import { SearchProps } from './SearchBar.types';

const SearchBar = ({ onSearch }: SearchProps) => {
    const notify = () => toast('Write something, please!');

    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const form = evt.target as HTMLFormElement;
        const search = (form.elements.namedItem('search') as HTMLInputElement).value;

        if (search.trim() === "") {
            return notify();
        }
        onSearch(search);
        form.reset();
    };



    return (
        <header className={css.head}>
            <Toaster />
            <form className={css.form} onSubmit={handleSubmit}>
                <input
                    className={css.input}
                    type="text"
                    name="search"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                <button className={css.btn} type="submit">Search</button>
            </form>
        </header>
    )
}

export default SearchBar;