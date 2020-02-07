import React from 'react';
import { Link } from 'react-router-dom'

function HamburgerNavigation(props) {

  return (

    <React.Fragment>
      <div className='dashboard-link'>
        <Link className='sdcs-logo' to={`/admin/dashboard?auth_token=${props.auth_token}`}>
          <div id='logo-style-student-page'></div></Link>
        {/* <p className='dash-btn'></p> */}
      </div>
      <nav id="page-nav">

        <label for="hamburger">&#9776;</label>
        <input type="checkbox" id="hamburger" />
        <br></br>

        
        <ul className='navigation'>
          <li className='hamCentering2'>
            <button>
              <div className='hamCentering2' onClick={props.openStudentAbsenteeInfo()}>
                Absences
            </div>
            </button>
          </li>
          <li className='hamCentering2'>
            <button>
              <div className='' onClick={props.openStudentAccountabilityPartnerInfo()}>
                Partner
					  </div>
            </button>
          </li>
          <li className='hamCentering2'>
            <button>
              <div className='' onClick={props.openStudentEditWindow()}>
                Edit Student
					</div>
            </button>
          </li>
          <li className='hamCentering3'>
            <Link className='' to={`/admin/login`}
              onClick={() => localStorage.removeItem('token')}
            >Logout
        </Link>

          </li>
          {/* <div className="red-stripe"></div> */}



        </ul>
      </nav>
      <hr id='lineDecorating'></hr>

      {/* <nav id="page-nav">
      <label for="hamburger">&#9776;</label>
      <input type="checkbox" id="hamburger"/>
      <ul className='navigation'>
        <li>
          <Link className='link-btn2' to={`/admin/login`}
            onClick={() => localStorage.removeItem('token')}
          >Logout
        </Link>
        </li>
        <li>
          <div className='secondary-btn' onClick={props.openStudentEditWindow()}>
            Edit Student
					</div>
        </li>
        <li>
          <div className='secondary-btn acc-partner-btn' onClick={props.openStudentAccountabilityPartnerInfo()}>
             Partner
					</div>
        </li>
        <li><div className='secondary-btn'onClick={props.openStudentAbsenteeInfo()}>Absence</div></li> */}
      {/* <div className="red-stripe"></div> */}
      {/* <li className='dashboard-link'>
         <Link className='sdcs-logo' to={`/admin/dashboard?auth_token=${props.auth_token}`}>
            <div id='logo-style-student-page'></div></Link>
          <p className='dash-btn'></p>
        </li>
        

      </ul>
      </nav> */}



    </React.Fragment>
  );
}

export default HamburgerNavigation;

