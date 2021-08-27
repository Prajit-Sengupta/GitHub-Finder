import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';

class App extends Component{
    state = {
        users: [],
        loading: false
    }

async componentDidMount(){
    this.setState({ loading: true });

   const res = await axios.get(`https://api.github.com/users?client_id${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    this.setState({ users: res.data, loading: false })
}
   //Search Github users
    searchUsers = async text => {
        this.setState({ loading: true })

        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users: res.data.items, loading: false })
    }

    render(){
        return (  

            <div className="App">
            <Navbar/>

            <div className="container">
            <Search searchUsers={this.searchUsers}/>
            
            <Users loading={this.state.loading} users={this.state.users}/>
            </div>
            
            </div>

          );

    }
  
}

export default App;






// render(){

//     const name = 'Prajit';
//     const loading = false;

//     const foo = () => 'Bar'
//     const showName =false;

//     return (  
//         //Use React.Fragment or Fragment if we dont want a div

//         <div className="App">
//         {loading ? <h4>Loading..</h4>: <h4>Hello {showName? name: null}</h4>} 

//         <h1>Hello from React</h1>
//         <h2>Hello {name.toUpperCase()} {2+3} {foo()}</h2>
//         </div>

//         //If we used JS
//         // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Heloooo'))
//       );

// }