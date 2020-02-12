import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import FileCard from './FileCard'
import PopupDialogBox from './PopupDialogBox'
class App extends Component{
	constructor(props){
		super(props)
		this.state = {
			
			buttonClicked:false
		}
		this.changeEncryptionMethod = this.changeEncryptionMethod.bind(this)
	}
	changeEncryptionMethod(e){
		console.log('File change method clicked!!')
		this.setState({			
			buttonClicked:true
		})
		

	}

	render(){
		console.log(this.state.buttonClicked + 'button clicked in appjs')
		return(
			
			<div className = "fileOuterBox">
				<center>
					<h1>Encryption_101</h1>
					<ul>
					<li><button onClick={this.changeEncryptionMethod}><FileCard filename = "FBI_Classified"/></button></li>
					<li><button onClick={this.changeEncryptionMethod}><FileCard filename = "Non-Compete"/></button></li>
					<li><button onClick={this.changeEncryptionMethod}><FileCard filename = "W4"/></button></li>
					<li><button onClick={this.changeEncryptionMethod}><FileCard filename = "W2"/></button></li>
					<li><button onClick={this.changeEncryptionMethod}><FileCard filename = "Tax Documents"/></button></li>
					<li><button onClick={this.changeEncryptionMethod}><FileCard filename = "SSN Copy"/></button></li>
					<li><button onClick={this.changeEncryptionMethod}><FileCard filename = "Classified A"/></button></li>

					<li><button onClick={this.changeEncryptionMethod}><FileCard filename = "Classified B"/></button></li>
					<li><button onClick={this.changeEncryptionMethod}><FileCard filename = "Classified C"/></button></li>
					<li><button onClick={this.changeEncryptionMethod}><FileCard filename = "Classified D"/></button></li>
					<li><button onClick={this.changeEncryptionMethod}><FileCard filename = "Classified E"/></button></li>
					<li><button onClick={this.changeEncryptionMethod}><FileCard filename = "Classified F"/></button></li>
					{this.state.buttonClicked ? <PopupDialogBox display="block"/> : ''}
					
						
					</ul>



				</center>
			</div>
		)
	}
}
export default App