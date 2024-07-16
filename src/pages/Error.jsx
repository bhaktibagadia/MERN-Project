import { NavLink } from 'react-router-dom';
import '../index.css';  // Ensure this is correctly imported

export const Error = () => {
  return (
    <>
      <section id="error-page">
        <div className="content">
          <h2 className="header">404</h2>
          <h4>Sorry! Page not found.</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, deleniti earum. Voluptatum quibusdam omnis vitae laudantium nemo, cum voluptas commodi.</p>
          <div className="btns">
            <NavLink to="/">Return Home</NavLink>
            <NavLink to="/contact">Report a Problem</NavLink>
          </div>
        </div>
      </section>
    </>
  );
};
