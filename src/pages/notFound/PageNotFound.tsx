import { Link } from 'react-router';
import { HiArrowLeft } from 'react-icons/hi2';
import './PageNotFound.css';

const PageNotFound = () => {
  return (
    <main className="notfound">
      <div className="notfound-container">
        <p className="notfound-code">404</p>
        <h1 className="notfound-heading">This page took a wrong turn</h1>
        <p className="notfound-text">
          The route you asked for doesn't exist — it may have been renamed, or the link that brought
          you here is stale.
        </p>

        <Link className="action-button notfound-link" to="/">
          <HiArrowLeft size={12} /> Back home
        </Link>
      </div>
    </main>
  );
};

export default PageNotFound;
