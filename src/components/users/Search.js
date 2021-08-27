import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class Search extends Component {
    state={
        text: ''
    };

    static propTypes ={
        searchUsers: PropTypes.func.isRequired,
    };
    onSubmit =(e)=>{
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({ text:'' }) //sending a prop up
    };

    onChange = (e) =>{
        this.setState({ [e.target.name]: e.target.value });
    };
    //e,target.name alowws to enter whiechever name we are having the onChange, email,text, ..

    
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" 
                    name="text"
                    placeholder="Search Users...." value={this.state.text}    onChange={this.onChange}></input>

                    <input type="submit" value="Search" className="btn btn-dark btn-block"></input>
                </form>
            </div>
        )
    }
}

export default Search
