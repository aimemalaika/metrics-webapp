import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import tickTack from './updateTime';

const FirstCountry = (props) => {
  const {
    flag, title, source,
  } = props;
  const [timer, setTimer] = useState('');
  const interval = setInterval(() => {
    setTimer(tickTack);
  }, 1000);
  useEffect(() => () => {
    clearInterval(interval);
  }, []);
  return (
    <div className="big-first-country">
      <div className="item">
        <img src={flag} alt="rwanda Flag" />
        <div className="data-sets">
          <h2 className="country">{title}</h2>
          <p>{timer}</p>
          <p>{source}</p>
        </div>
      </div>
    </div>
  );
};

FirstCountry.propTypes = {
  flag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

export default FirstCountry;
