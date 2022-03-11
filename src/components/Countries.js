import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FirstCountry from './FirstCountry';
import Header from './Header';
import CountryCard from './CountryCard';
import Flag from '../image/rwanda.png';
import { FetchCountries } from '../redux/countries/countries';
import PageLoader from './PageLoader';

const Countries = () => {
  const [loading, setLoading] = useState('animate-load');
  const dispatch = useDispatch();
  useEffect(async () => {
    await dispatch(FetchCountries());
    await setLoading('animate-load hidden');
  }, []);
  const countries = useSelector((state) => state.countryStatsReducer);
  const start = 0;
  const limit = 50;
  const countriesDiv = countries.slice(start, limit).map(({
    id, date, name, source, classname,
  }) => (
    <CountryCard
      key={id}
      classname={classname}
      date={date}
      country={name}
      source={source}
      countId={id}
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
      <PageLoader loading={loading} />
    </>
  );
};

export default Countries;
