import React from 'react'

function Result({ result, openPopup }) {
    return (
        <section>
            <div className="result" onClick={() => openPopup(result.id)}>
                <img src={result.Poster}/>
                <h3>{result.Title}</h3>
            </div>
        </section>
    )
}

export default Result
