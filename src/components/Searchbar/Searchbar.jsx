import { useState } from 'react';
import '../../styles.css';
import { FiSearch } from "react-icons/fi";
import propTypes from 'prop-types';

export default function SerchBar({ search}) { 
  const [query, setQuery] = useState('');
 

 const handleFormSubmit = (e) => { 
    e.preventDefault();
   search(query);
   setQuery('');
   
  }

 const handleChange = (e) => {
    setQuery( e.target.value.toLowerCase().trim());
  };

  
      return (
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={handleFormSubmit}>
            <button type="submit" className="SearchForm-button">
              <FiSearch size={'1.5em'}/>
            </button>

            <input
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={handleChange}
              value={query}
            />
          </form>
        </header>
      );
    }


SerchBar.propTypes = {
  search: propTypes.func,
}