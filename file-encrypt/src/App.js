import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import FileCard from './FileCard'
class App extends Component{
	render(){
		return(
			<div className = "fileOuterBox">
				<center>
					<h1>Encryption_101</h1>
					<FileCard filename = "FBI_Classified"/>
				</center>
			</div>
		)
	}
}
export default App