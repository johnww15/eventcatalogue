import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <p>
          <NavLink to="/">Home</NavLink>
        </p>
        <p>
          <NavLink to="/sports">Sports</NavLink>
        </p>
        <p>
          <NavLink to="/music">Music</NavLink>
        </p>
        <p>
          <NavLink to="/favourites">Favourites</NavLink>
        </p>
      </ul>
    </nav>
  );
}
