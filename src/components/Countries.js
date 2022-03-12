import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaInfoCircle } from 'react-icons/fa';
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
  const countriesDiv = countries.map(({
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

  const filterByName = async (value) => {
    if (value === '') {
      await dispatch(FetchCountries());
    } else {
      await dispatch(FetchCountries(value));
    }
  };

  return (
    <>
      <Header pth="/" content="countries list" />
      <FirstCountry title="Made in Rwanda" source="Developed by Aime" flag={Flag} />
      <p className="titles-paragraph">Stats By Countries</p>
      <input className="search-bar" onChange={(e) => filterByName(e.target.value)} type="text" placeholder="Enter key search ..." />
      {countries.length
        ? (
          <div className="listed-countrises">
            { countriesDiv }
          </div>
        )
        : (
          <div className="listed-countrises">
            <FaInfoCircle icon="info-circle" className="info-circle" />
            <p className="search-fail">No Data Found matching your search</p>
          </div>
        )}
      <PageLoader loading={loading} />
    </>
  );
};

export default Countries;
