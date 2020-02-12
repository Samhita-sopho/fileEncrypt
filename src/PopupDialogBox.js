import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class PopupDialogBox extends Component{
	constructor(props){
		super(props)
		this.state={
			shouldDisplay:this.props.display?true:false
		}
		this.closePermissionModification = this.closePermissionModification.bind(this)

	}
	closePermissionModification(e){
		console.log('Clicked the close button !!')
		console.log(this.props.display);
		this.setState(() => {
			return {shouldDisplay:false}
		})
	}

	render(){
		console.log('rendered with '+ this.state.shouldDisplay + '  ' + this.props.display)
		let styleClass = ''
		if(this.state.shouldDisplay === false){
			styleClass = 'modal-hide'
		}
		else if(this.state.shouldDisplay || this.props.display === 'block'){
			styleClass = 'modal-show'
		}
		
		
		return(
			<div className={styleClass}>			  
			  <div className="modal-content">
			    <span className="close" onClick={this.closePermissionModification}>&times;</span>
			    <p>Change File Permissions</p>
			  </div>
			</div>
		)
	}
	
}
export default PopupDialogBox