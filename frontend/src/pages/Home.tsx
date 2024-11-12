import { Link } from "react-router-dom";

export const Home = function () {
  return (
    <div>
      <Link to="/signin">Login</Link>
      <Link to="/signup">Sign up</Link>
    </div>
  );
};
