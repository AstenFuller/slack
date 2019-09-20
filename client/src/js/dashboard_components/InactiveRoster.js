import React, { Component } from 'react';
import Roster from './Roster';
import EditStudent from './EditStudent.js';

class DashboardContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			students: [],
			showStudentEditWindow: false,
			editedStudentInfo: {},
			saveErrorMessage: '',
			display: {}
		}
		this.inactiveStudentTypes = ['DISABLED', 'ALUMNI'];
		this.getAuthToken = this.getAuthToken.bind(this);
		this.hideStudentEditWindow = this.hideStudentEditWindow.bind(this);
		this.saveStudentData = this.saveStudentData.bind(this);
	}

	getAuthToken() {
		return this.props
			.location
			.search
			.replace(/^(.*?)\auth_token=/, '');
	}

	showStudentEditWindow(studentInfo) {
		this.setState({
			studentInfo,
			showStudentEditWindow: true
		});
	}

	hideStudentEditWindow(event, override) {
		if (event.target === event.currentTarget || override) {
			this.setState({
				showStudentEditWindow: false
			})
		}
	}

	saveStudentData(studentData) {
		fetch(`/api/students?access_token=${this.getAuthToken()}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(studentData)
		})
			.then(response => {
				return response.json();
			})
			.then(response => {
				if (response.error) {
					throw response.error.message
				} else {
					this.setState({
						students: [...this.state.students, response].sort((a, b) =>
							a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1),
						showStudentEditWindow: false,
						saveErrorMessage: null
					})
				}
			})
			.catch(err => {
				this.setState({
					saveErrorMessage: err
				})
			})
	}

	componentDidMount() {
		const formattedInactiveStudentTypes = this.inactiveStudentTypes.map(type => {
			return {"type": type};
		})
		const inactiveStudentFilter = JSON.stringify({"where": {"or": formattedInactiveStudentTypes}});
		fetch(`/api/students?access_token=${this.getAuthToken()}&filter=${inactiveStudentFilter}`)
			.then(response => response.json())
			.then(data => {
				const sorted = data.sort((a, b) =>
					a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
				this.setState({ students: sorted });
			})
			.catch(err => console.log(err));
	}

	render() {
		const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
			'Friday', 'Saturday'];
		const months = ['January', 'February', 'March', 'April', 'May', 'June',
			'July', 'August', 'September', 'October', 'November', 'December'];

		const today = new Date();
		const dayOfWeek = days[today.getDay()];
		const month = months[today.getMonth()];
		const dayOfMonth = today.getDate();

		let editStudentWindow = null;

		if (this.state.showStudentEditWindow) {
			editStudentWindow = <EditStudent studentData={this.state.editedStudentInfo}
				closeWindow={() => this.hideStudentEditWindow}
				save={this.saveStudentData}
				errorMessage={this.state.saveErrorMessage} />
		}

		return (
			<React.Fragment>
				<header>
					<p className='date'>{`${dayOfWeek}, ${month} ${dayOfMonth}`}</p>
					<ul className='navigation'>
						<li>
							<a
								className='link-btn'
								href={`${process.env.BASE_URL}logout?auth_token=${this.getAuthToken()}`}
							>Logout
              </a>
						</li>
						<li>
							<a
								className='link-btn'
								href={`${process.env.BASE_URL}dashboard?auth_token=${this.getAuthToken()}`}
							>
								Dashboard
          		</a>
						</li>
					</ul>
				</header>
				{editStudentWindow}
				<main className='inactiveStudentsWrapper'>
					<h2 className='section-label big-display'>Inactive Students:</h2>
					<Roster
						students={this.state.students}
						auth_token={this.getAuthToken()}
					/>
				</main>
			</React.Fragment>
		);
	}
}

export default DashboardContainer;
