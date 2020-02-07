import React from 'react';
import AppAbsenceC from '../AppAbsenceC';
import {toggleEditWindow} from './absenteeActions';


class AbsenteeInfo extends React.Component {
	constructor(props){
		super(props);
		this.openEditWindow = this.openEditWindow.bind(this);
	}

	openEditWindow() {
			const { dispatch } = this.props;
			dispatch(toggleEditWindow(!this.props.toggleWindow));
	}

	render() {
		console.log(this.props)
		return (
			<div className='acc-partner-window'>
				<div className='acc-partner-container'>
					<h3 className='acc-partner-header'>Absentee Info</h3>
					<div className='acc-partner-row'>
						<p><strong>Name</strong></p>
						<p>{this.props.studentInfo.name}</p>
					</div>
					
					<hr className='linePad'/>
					<React.Fragment className='acc-partner-row'>
						<p className='namePad'><strong>Date of Absences</strong></p>
						{this.props.studentAbsences.map( student => <a onClick={this.openEditWindow}>{student.date.slice(0,10)}</a>)}
						{console.log(this.props.studentAbsences)}
					</React.Fragment>
					<br />
					<div className='acc-partner-row'>
						<button className='return-btn' onClick={this.props.closeWindow()}>Return</button>
					</div>
					<br />
				</div>
			</div>
		)
	}
}

export default AbsenteeInfo