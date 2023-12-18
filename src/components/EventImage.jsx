import { Link } from "react-router-dom";

export default function EventImage({ id, src, name, date, time }) {
  const path = `/events/${id}`;

  return (
    <div>
      <Link to={path}>
        <img src={`${src}`} width="200"></img>
      </Link>
      <p>{name}</p>
      <p>
        {date} - {time}
      </p>
    </div>
  );
}
