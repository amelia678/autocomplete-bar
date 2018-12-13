import React from 'react';

const Result = (word) => {
    return (
        <li>{word}</li>
    );
}

const SearchResults = (props) => {
    return (
        <ul>
            {props.results.map(Result)}
            </ul>
    )
}

export default SearchResults;
