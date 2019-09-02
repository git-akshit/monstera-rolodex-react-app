import React from 'react';

import './search-box.styles.css';

//functional component, it dosent has state, life cycle methods, it only gets props and renders them
export const SearchBox = ({ placeholder, handleChange}) => (
    <input 
    className='search'
        type='search' 
        placeholder={placeholder}
        onChange={handleChange}
    />   
    ); 