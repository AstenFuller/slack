import React, { Component } from 'react';
import { connect } from 'react-redux';
import  AbsenteeInfo from './AbsenteeInfo/AbsenteeInfo';

class AbsenceC extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputText: props.notes.text,
			excusedOrNa: props.notes.excusedOrNa,
			completed: props.notes.comp
		}

		this.absenteeInformation = this.absenteeInformation.bind(this);
		this.onSelectChange = this.onSelectChange.bind(this);
		this.save = this.save.bind(this);
		this.editAbsence = this.editAbsence.bind(this);
        this.toggleAbsenteeWindow = this.toggleAbsenteeWindow.bind(this);
        // this.toggleMenu = this.toggleMenu.bind(this);
	}

	absenteeInformation(e) {
		this.setState({ inputText: e.target.value });
	}

	onSelectChange(e) {
		this.setState({ excusedOrNa: e.tartget.value });
	}

	save(e) {
		this.props.save(this.state.inputText, this.state.excusedOrNa);
	}

	editAbsence(e) {
		this.props.editAbsence(e);
	}

	toggleAbsenteeWindow() {
		const { dispatch } = this.props;
		dispatch(toggleAccWindow1(!this.props.absenteeWindowOpen));
	  }

	AbsenteeInfo(props) {
      }
      


      





	// function AbsenteeInfo(props) {




	render() {
		let alert = {
			0: "alert-secondary",
			1: "alert-success",
			2: "alert-warning",
			3: "alert-danger"
		}





		return (
			<div className='acc-partner-window'>
				<div className='acc-partner-container1'>
					<h3 className='acc-partner-header'>Absentee Info</h3>
					<div className='acc-partner-row'>
						<p><strong>Name</strong></p>
						{/* <p>{props.absenteeData.name}</p> */}
						Asten Fuller
					</div>
					<hr />
					<div className='acc-partner-row'>
						<p><strong>Date of Absences</strong></p>
						<a href className='dateAhref' onClick={() => this.toggleAbsenteeWindow}>12/25/19</a>
						



						

					</div>
				</div>

				<div className='acc-partner-row'>



					<div>
						<ul className={alert[this.props.notes.excusedOrNa]} >
							{!this.props.notes.editable ? <label id='' className={this.props.notes.completed ? 'completed' : ''}>{this.props.notes.text}</label> : <textarea className='' id='' onChange={this.absenteeInformation} defaultValue={this.props.notes.text} />}


							{!this.props.notes.editable ?
								<button className='' id={this.props.id}>
                        </button>
								: 
								<div> <button className='' onClick={props.closeWindow()}>Save</button>
									<div className="">
										<select defaultValue={alert[this.props.notes.excusedOrNa]} name='excuseOrNa' className="" onChange={this.onSelectChange}>
											<option value={0}>Excused or Not</option>
											<option id='excuseOrNa-1' value={1} className=''>Excused</option>
											<option id='excuseOrNa-2' value={2} className=''>Not Excused</option>
										</select>
									</div>
								</div>
							}
						</ul>
					</div>





				</div>
				<br />
				<div className='acc-partner-row'>
					{/* <button className='return-btn' onClick={props.closeWindow()}>Return</button> */}
				</div>
				<br />
			</div>

		)
	}
	// }
}


export default AbsenceC