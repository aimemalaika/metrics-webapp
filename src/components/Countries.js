import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FirstCountry from './FirstCountry';
import Header from './Header';
import CountryCard from './CountryCard';
import tickTack from './updateTime';
import { FetchCountries } from '../redux/countries/countries';

const Countries = () => {
  const [timer, setTimer] = useState('');
  const isMounted = true;

  if (isMounted) {
    setInterval(() => {
      setTimer(tickTack);
    }, 1000);
  }
  const countries = useSelector((state) => state.countryStatsReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchCountries());
  }, []);
  const countriesDiv = countries.map(({
    id, date, name, source, classname,
  }) => (
    <CountryCard
      key={id}
      cid={id}
      classname={classname}
      date={date}
      country={name}
      source={source}
    />
  ));

  return (
    <>
      <Header pth="/" content="countries list" />
      <FirstCountry timing={timer} />
      <p className="titles-paragraph">Stats By Countries</p>
      <div className="listed-countrises">
        {countriesDiv}
      </div>
    </>
  );
};

export default Countries;
