import React from 'react';

class SearchBar extends React.Component {

    state = {term:''};

    // for event callbacks, make sure we use
    // an arrow function like so:
    handleChange=(e)=> {
        this.setState({term: e.target.value})
    }

    handleSubmit=(e)=> {
        e.preventDefault(); // when we submit, the page DO NOT REFRESH
        // todo: make sure we call callbacks
        // from parent component
        this.props.onTermSubmit(this.state.term);

    }
    render() {
        return(
            <div className="search-bar ui black piled segment">
                <form className="ui form" onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label>Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={this.handleChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;