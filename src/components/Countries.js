import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FirstCountry from './FirstCountry';
import Header from './Header';
import CountryCard from './CountryCard';
import Flag from '../image/rwanda.png';
import { FetchCountries } from '../redux/countries/countries';

const Countries = () => {
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
      <FirstCountry title="Made in Rwanda" source="Developed by Aime" flag={Flag} />
      <p className="titles-paragraph">Stats By Countries</p>
      <div className="listed-countrises">
        {countriesDiv}
      </div>
    </>
  );
};

export default Countries;
