import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DataGraph from './DataGraph';
import FirstCountry from './FirstCountry';
import Header from './Header';
import { FetchCountryDetails } from '../redux/countries/countrydetails';
import PageLoader from './PageLoader';

const CountryDetails = () => {
  const randomColor = [
    ['rgba(75,192,192,0.2)', 'rgba(75,192,192,1)'],
    ['#07bc0c1c', '#07bc0c'],
    ['#fb000617', '#fb0006'],
  ];
  const [loading, setLoading] = useState('animate-load');
  const { countryId } = useParams();

  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(FetchCountryDetails(countryId));
    await setLoading('animate-load hidden');
  }, []);

  const country = useSelector((state) => state.countryDetReducer);

  const { labels, data, countryInfo } = country;
  const datarepart = [];

  let c = 0;
  Object.keys(data).forEach((key) => {
    datarepart.push(
      {
        label: key,
        data: data[key],
        fill: true,
        backgroundColor: randomColor[c][0],
        borderColor: randomColor[c][1],
      },
    );
    c += 1;
  });

  const {
    name, source, today_confirmed: todayConfirmed,
    today_recovered: todayRecovered, today_deaths: todayDeaths,
    today_open_cases: todayOpenCases,
  } = countryInfo;

  const CurrFlag = `https://countryflagsapi.com/png/${name}`;

  return (
    (country.labels.length && (
      <>
        <Header pth="/countries" content="Country details" />
        <FirstCountry flag={CurrFlag} title={name} source={source} timing="sdsas" />
        <p className="titles-paragraph">Graphical representation of cases for the past 6 days</p>
        <div className="graph-section">
          <DataGraph
            style={{ vh: 150 }}
            dataperiod={labels.toString()}
            figures={JSON.stringify([datarepart[0]])}
          />
          <DataGraph
            style={{ vh: 150 }}
            dataperiod={labels.toString()}
            figures={JSON.stringify([datarepart[1]])}
          />
          <DataGraph
            style={{ vh: 150 }}
            dataperiod={labels.toString()}
            figures={JSON.stringify([datarepart[2]])}
          />
        </div>
        <p className="text-paragraph pink">
          Total Confirmed Today:
          <span>{todayConfirmed}</span>
        </p>
        <p className="text-paragraph pinker">
          Total Recovered Today:
          <span>{todayRecovered}</span>
        </p>
        <p className="text-paragraph pink">
          Total Death Today:
          <span>{todayDeaths}</span>
        </p>
        <p className="text-paragraph pinker">
          Actual Cases:
          <span>{todayOpenCases}</span>
        </p>
        <PageLoader loading={loading} />
      </>
    ))
  );
};

export default CountryDetails;
