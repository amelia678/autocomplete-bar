import React, {Component} from 'react';
import SearchBar from './SearchBar';


class AutoComplete extends Component {
    constructor(props) {
        super(props);
        this.state = {
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

        </div>
    )
}

_setTerm = (term) => {
    this.setState({
        term
    })
}

_getFilteredResults = () => {
    return this.state.allResults.filter(word => {
        return word.startsWith(this.state.term);
    })
}
}

export default AutoComplete;