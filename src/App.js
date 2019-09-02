import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css'; // importing css

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() { //componentDidMount is a method in Component which is auto called by react when it renders on dom, when it renders on dom then make an api call 
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}));
  }

  handleChange = e => { // when component is compiled then arrow function is binded to the place where this arrow function was defined in the first place and the it is app component. you cannont call dot bind on them, auto get lexical scoping
    this.setState({ searchField: e.target.value});
  }

  render () { // whenever the setstate is called from search field render() is called and page is rerendered everytime
    const { monsters, searchField } = this.state; 
    {/*above statement is equal to below 
    const monsters = this.state.monsters;
    const searchField = this.state.searchField;*/}
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()) //searching the monsters from search field value
      )
    return (
      <div className='App'>
        <h1 className='heading'>Monters Rolodex</h1>
        <SearchBox
            placeholder = 'search monsters'
            handleChange={this.handleChange} //e is the event which occurs on change o search field value, and we changing the state of the search field to value in it
        />
        < CardList monsters={filteredMonsters}/> {/*giving  monsters={filteredMonsters} as props to CardList component*/}
      </div>
    );
  }
}

export default App;
