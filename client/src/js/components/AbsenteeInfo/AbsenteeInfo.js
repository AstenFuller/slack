import React from 'react';
import {
	toggleEditWindow, 
	getId,
	getDate,
	getNotes,
	toggleExcused,
	updateAbsence,
	} from './absenteeActions';
import AbsenteeEdit from './AbsenteeEdit'


class AbsenteeInfo extends React.Component {
	constructor(props){
		super(props);

		this.openEditWindow = this.openEditWindow.bind(this);
		this.closeEditWindow = this.closeEditWindow.bind(this);
		this.handleEditNotes = this.handleEditNotes.bind(this);
		this.handleExcusedValue = this.handleExcusedValue.bind(this);
		this.handleSave = this.handleSave.bind(this);
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

	handleEditNotes(notes) {
		const { dispatch } = this.props;
		dispatch(getNotes(notes));
	}

	handleExcusedValue(excused) {
		const { dispatch } = this.props;
		dispatch(toggleExcused(excused));
	}

	handleSave() {
		console.log(this.props)
		const { dispatch } = this.props;
		dispatch(toggleEditWindow(!this.props.toggleWindow))
		updateAbsence(this.props.currentId, this.props.notes, this.props.excused, this.props.auth_token, this.props.studentInfo.slack_id, this.props.currentDate)
	}

	render() {
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
					{!this.props.toggleWindow ? 
					this.props.studentAbsences.map((student, i) => 
					<a 
					onClick={this.openEditWindow} 
					id={student.id} 
					key={i} 
					>{student.date.slice(0,10)}: {student.excused.toString()} 
					</a>)
					:
					<AbsenteeEdit 
					id={this.props.currentId} 
					date={this.props.currentDate}
					closeEditWindow={() => this.closeEditWindow}
					notes={this.props.notes}
					handleEditNotes={this.handleEditNotes}
					excused={this.props.excused}
					handleExcusedValue={this.handleExcusedValue}
					handleSave={this.handleSave}
					/>}
				<br />
				<div className='acc-partner-row'>
					<button className='return-btn' onClick={!this.props.toggleWindow ? this.props.closeWindow() : this.closeEditWindow}>Return</button>
				</div>
				<br />
				</div>
			</div>
		)
	}
}

export default AbsenteeInfo