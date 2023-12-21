import { Link } from "react-router-dom";

export default function EventImage({ id, src, name, date }) {
  const path = `/events/${id}`;

  return (
    <div className="eventimage">
      <div className="singleimage">
        <Link to={path}>
          <img src={`${src}`} width="200" height="120"></img>
        </Link>
      </div>
      <div className="eventname">
        <p>{name}</p>
      </div>
      <br />
      <div className="datetime">
        <p>{new Date(date).toString()}</p>
      </div>
    </div>
  );
}
