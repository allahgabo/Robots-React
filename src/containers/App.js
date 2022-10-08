import React,{Component} from 'react';
import CardList from '../components/CardList';
// import {robots} from './robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

class App extends Component{
	constructor(){
		super()
		this.state={
			robots:[],
			searchfiled:''
		}
	}

	componentDidMount(){
		// console.log("check");
		fetch('https://jsonplaceholder.typicode.com/users').then(response =>{
			return response.json();
		}).then(users =>{
			this.setState({robots:users})
		});
		
	}

	onSearchChange =(event) =>{
		this.setState({searchfiled:event.target.value})
		
		// console.log(filterRobots);
	}
	render(){
		const filterRobots=this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchfiled.toLowerCase());
			
		})
		if (this.state.robots.length === 0){
			return <h1>Loading </h1>
		}
		else{

			return(
			<div className='tc'>
				<h1 className='f2'>Robots Friends </h1>
				<SearchBox searchchange={this.onSearchChange}/>
				<Scroll>
					<CardList  robots={filterRobots}/>
				</Scroll>
			</div>

	);
	}}
	
}
export default App;