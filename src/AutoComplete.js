import React, {Component} from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';


class AutoComplete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            allResults: [
                'aardvark',
                'albatross',
                'anteater',
                'antelope',
                'armadillo'
            ]
        }
    }
    
    
    render() {
        return (
            <div>
            <h1>this is the autocomplete component</h1>
            <SearchBar
            term = {this.state.term}
            handleInput={this._setTerm}
             />
            <SearchResults 
                results={this._getFilteredResults()}
            />

        </div>
    )
}

_setTerm = (term) => {
    this.setState({
        term
    })
}

_getFilteredResults = () => {
    if (this.state.term.length === 0) {
        return [];
    } else {
    return this.state.allResults.filter(word => {
        return word.startsWith(this.state.term);
    })
    }
}
}

export default AutoComplete;