import React from 'react';

function AbsenteeInfo (props) {
	
	
	return (
		<div className='acc-partner-window' onClick={props.closeWindow()}>
			<div className='acc-partner-container'>
				<h3 className='acc-partner-header'>Absentee Info</h3>
				<div className='acc-partner-row'>
					<p><strong>Name</strong></p>
					<p>{props.absenteeData.name}</p>
				</div>
				<hr/>
				<div className='acc-partner-row'>
					<p><strong>Number of Absentees</strong></p>
					{/* <p>{partner_email ? partner_email : 'N/A'}</p> */}
				</div>
				<hr/>
				<div className='acc-partner-row'>
					<p><strong>Notes</strong></p>
					{/* <p>{partner_relationship ? partner_relationship : 'N/A'}</p> */}
				</div>
				<br/>
				<div className='acc-partner-row'>
					<button className='return-btn' onClick={props.closeWindow()}>Return</button>
				</div>
				<br/>
			</div>
		</div>
	)
}

export default AbsenteeInfo