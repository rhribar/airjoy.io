import React, { Component } from 'react'
import "../static/sass/main.css"


class Search extends Component {
    render() {
        return (
            <div class = "search">
                <form class ="search__box">
                    <input
                    class = "search__input"
                    type="text"
                    placeholder= "Search by activity, name or country ..."
                    value={this.props.value}
                    onChange={this.props.onChange}
                    />
                                        
                </form> 
            </div>
        ) 
    }   
}

export default Search;