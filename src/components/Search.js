import React from 'react'
import Results from './Results'

function Search({ handleInput, search }) {
    return (
        <section className="searchBox-wrap">
            <input type="text"
            placeholder="Search"
            className="searchBox"
            onChange={handleInput}
            onKeyPress={search}
            />
        </section>
    )
}

export default Search
