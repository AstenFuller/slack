import React from 'react';
import {
	toggleEditWindow, 
	getId,
	getDate,
	getNotes,
	toggleExcused,
	} from './absenteeActions';
import { updateAbsence } from '../studentStatsActions';
import AbsenteeEdit from './AbsenteeEdit';
import AbsenteeItem from './AbsenteeItem';


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
		const data = e.data
		dispatch(getDate(data.date));
		dispatch(getId(data.id));
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
		console.log(this.props.studentAbsences);
		const { dispatch } = this.props;
		dispatch(toggleEditWindow(!this.props.toggleWindow));
		dispatch(updateAbsence(this.props.currentId
			, this.props.notes,
			 this.props.excused,
			  this.props.auth_token,
			   this.props.studentInfo.slack_id,
			    this.props.currentDate))
		setTimeout( ()  => console.log(this.props.studentAbsences), 5000)
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
					{!this.props.toggleWindow && this.props.studentAbsences ?
					this.props.studentAbsences.map((student, i) => 
					<AbsenteeItem
					data={student}
					handleOnClick={this.openEditWindow}
					key={i}
					/>)
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