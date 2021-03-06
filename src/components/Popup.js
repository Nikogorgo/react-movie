import React from 'react'

function Popup({ selected, closePopup }) {
    return (
        <section>
            <div className="content">
                <h2>{selected.Title} <span>({ selected.Year})</span></h2>
                <p className="rating">Rating: {selected.imdbRating}</p>
                <div className="plot">
                    <img src={selected.Poster}/>
                </div>
                <button className="close" onClick={closePopup}>Close X</button>
            </div>
        </section>
    )
}

export default Popup
