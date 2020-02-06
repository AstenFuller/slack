import React from 'react';
import AppAbsenceC from './AppAbsenceC';


function AbsenteeInfo(props) {


	return (
		<div className='acc-partner-window'>
			<div className='acc-partner-container'>
				<h3 className='acc-partner-header'>Absentee Info</h3>
				<div className='acc-partner-row'>
					<p><strong>Name</strong></p>
					<p>{props.absenteeData.name}</p>
				</div>
				<hr />
				<div className='acc-partner-row'>
					<p><strong>Date of Absences</strong></p>
				</div>
				<div className='acc-partner-row'>
					<AppAbsenceC />
				</div>
				<br />
				{/* <div className='acc-partner-row'>
					<button className='return-btn' onClick={props.closeWindow()}>Return</button>
				</div> */}
				<br />
			</div>
		</div>
	)
}

export default AbsenteeInfo