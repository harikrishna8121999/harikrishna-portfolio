import { useEffect, useState } from 'react';
import { BsFillArrowThroughHeartFill } from 'react-icons/bs';
import './Footer.css';

const formatIST = (date: Date) =>
  date.toLocaleTimeString('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

const Footer = () => {
  const [time, setTime] = useState(() => formatIST(new Date()));

  useEffect(() => {
    const id = setInterval(() => setTime(formatIST(new Date())), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="footer">
      <p className="footer-quote">
        “Ship it, then make it better — a shipped thing teaches you more than a perfect plan.”
      </p>

      <div className="footer-bottom">
        <span className="footer-attribution">
          Designed &amp; Made with{' '}
          <BsFillArrowThroughHeartFill className="footer-heart" aria-label="love" />
        </span>

        <span className="footer-clock">{time} IST</span>
      </div>

      <p className="footer-copyright">
        © {new Date().getFullYear()} HariKrishna V Shetty. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
