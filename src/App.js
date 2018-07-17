import React, {Component} from 'react'
import CardList from './cardlist'
import { robots } from './robots'
import './App.css'
import SearchBox from './SearchBox'

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			robots:robots,
			searchField:''
		}
	}
	onSearchChange = (event) => {
		this.setState({searchField: event.target.value});
		//this.setState({this.state.searchField: event.target.value});
	}
	render(){
		const filtered = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		});
		return (
			<div className="tc">
				<h1 className ="tc f2">RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<CardList robots={filtered} />
			</div>
		)
	}
}



export default App