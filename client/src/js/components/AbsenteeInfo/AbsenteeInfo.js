import React from 'react';
import AppAbsenceC from '../AppAbsenceC';
import {
	toggleEditWindow, 
	getId,
	getDate,
	} from './absenteeActions';
import { relativeTimeThreshold } from 'moment';
import AbsenteeEdit from './AbsenteeEdit'


class AbsenteeInfo extends React.Component {
	constructor(props){
		super(props);
		this.openEditWindow = this.openEditWindow.bind(this);
		this.closeEditWindow = this.closeEditWindow.bind(this);
	}

	openEditWindow(e) {
		const { dispatch } = this.props;
		const currentDate = e.target.innerHTML;
		const studentId = e.target.id;
		dispatch(getDate(currentDate));
		dispatch(getId(studentId));
		dispatch(toggleEditWindow(!this.props.toggleWindow));
	}

	closeEditWindow() {
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
					<p className='namePad'><strong>Date of Absences</strong></p>
					{!this.props.toggleWindow ? this.props.studentAbsences.map((student, i) => 
					<a 
						onClick={this.openEditWindow} 
						id={student.id} 
						key={i} 
						>{student.date.slice(0,10)} 
					</a>): 
					<AbsenteeEdit 
						id={this.props.currentId} 
						date={this.props.currentDate}
					/>}
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