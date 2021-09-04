import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/bikes">Bikes</Link>
        </li>
      </ul>
    </div>
  );
}
