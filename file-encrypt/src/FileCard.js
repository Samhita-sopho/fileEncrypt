import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
class FileCard extends Component{
	constructor(props){
		super(props)

	}
	render(){
		return(
			<div className = "fileCardProperty">
				<center>
					<h4>{this.props.filename}</h4>						
				</center>
			</div>
		)
	}
}
export default FileCard