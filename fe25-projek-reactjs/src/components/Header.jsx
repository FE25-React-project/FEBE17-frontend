import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="d-flex">
      <h1>Header</h1>
      <Link to="/">Home</Link>

      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default Header;
