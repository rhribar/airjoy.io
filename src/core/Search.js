import React, { Component } from 'react'
import axios from 'axios'
import Suggestions from "./Suggestions"
import "../static/sass/main.css"
import { API } from "../backend.js";

class Search extends Component {
    state = {
        query: '',
        results: []
    }
    getQuery = () => {
        axios.get(`${API}product/search/?search=${this.state.query}`)
        .then(res => {
            this.setState({
                results: res.data,  
            })
        })
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        }, () => {
            if (this.state.query && this.state.query.length > 1) {
                if (this.state.query.length % 2 === 0) {
                    this.getQuery()
                }
            } else if (!this.state.query) {
            }
        })
    }
    

    render() {
        return (
            <div class = "search">
                <form class ="search__box">
                    <input
                        placeholder= "Search by activity, name or country ..."
                        ref={input => this.search = input}
                        onChange={this.handleInputChange}
                        class = "search__input"
                    />
                    <i class="fas fa-search search__icon"></i>
                    <Suggestions results={this.state.results} />
                </form>
            </div>
        ) 
    }   
}

export default Search;


