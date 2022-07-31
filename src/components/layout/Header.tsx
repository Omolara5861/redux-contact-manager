import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export const Header =  (props: any) => {
  const { branding} = props;
  return (
   <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
    <div className="container">
      <a href="/" className="navbar-brand">{branding}
      </a>
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <i className="fas fa-home"></i> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact/add" className="nav-link">
            <i className="fas fa-plus"></i> Add
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
            <i className="fas fa-question"></i> About
            </Link>
          </li>
        </ul>
      </div>
    </div>
   </nav>
  );
} 
// Default Props
Header.defaultProps = {
  branding: "Contact Manager"
}

// Check if the props are valid
Header.propTypes = {
  branding: PropTypes.string.isRequired
}

// Style for the heading - This is a CSS style object
// const headingStyle = {
//   color: "purple",
//   fontSize: '40px'
// }