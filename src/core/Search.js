import React, { Component } from 'react'
import "../static/sass/main.css"


class Search extends Component {
    render() {
        return (
            <div class = "search">
                <form class ="search__box"
                    onSubmit={this.props.onSubmit}
                >
                    <input
                    class = "search__input"
                    type="text"
                    placeholder= "Search by activity, name or country ..."
                    value={this.props.value}
                    onChange={this.props.onChange}
                    
                    />
                    <i class="fas fa-search search__icon"></i>
                </form> 
            </div>
        ) 
    }   
}
/* const preventRefresh = (e) => {
    alert('it works!');
    e.preventDefault();
} */

export default Search;