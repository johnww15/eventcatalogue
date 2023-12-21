import { Link } from "react-router-dom";

export default function EventImage({ id, src, name, date, time }) {
  const path = `/events/${id}`;

  return (
    <div className="eventimage">
      <div className="singleimage">
        <Link to={path}>
          <img src={`${src}`} width="200"></img>
        </Link>
      </div>
      <div className="eventname">
        <p>{name}</p>
      </div>
      <br />
      <div className="datetime">
        <p>
          {date} | {time}
        </p>
      </div>
    </div>
  );
}
