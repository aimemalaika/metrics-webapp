import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DataGraph from './DataGraph';
import FirstCountry from './FirstCountry';
import Header from './Header';
// import Flag from '../image/rwanda.png';
import { FetchCountryDetails } from '../redux/countries/countrydetails';

const CountryDetails = () => {
  const randomColor = [
    ['rgba(75,192,192,0.2)', 'rgba(75,192,192,1)'],
    ['#07bc0c1c', '#07bc0c'],
    ['#fb000617', '#fb0006'],
  ];

  const { countryId } = useParams();

  const country = useSelector((state) => state.countryDetReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchCountryDetails(countryId));
  }, []);

  const { labels, data, countryInfo } = country;
  const datarepart = [];

  const graphLablels = (labels !== undefined) ? labels.toString() : ['NO DATA'].toString();

  if (data !== undefined) {
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
  }

  const {
    name, source, today_confirmed: todayConfirmed,
    today_recovered: todayRecovered, today_deaths: todayDeaths,
    today_open_cases: todayOpenCases,
  } = countryInfo;

  const CurrFlag = `https://countryflagsapi.com/png/${name}`;

  return (
    <>
      <Header pth="/countries" content="Country details" />
      <FirstCountry flag={CurrFlag} title={name} source={source} timing="sdsas" />
      <p className="titles-paragraph">Graphical representation of cases for the past 6 days</p>
      <div className="graph-section">
        <DataGraph
          style={{ vh: 150 }}
          dataperiod={graphLablels}
          figures={JSON.stringify([datarepart[0]])}
        />
        <DataGraph
          style={{ vh: 150 }}
          dataperiod={graphLablels}
          figures={JSON.stringify([datarepart[1]])}
        />
        <DataGraph
          style={{ vh: 150 }}
          dataperiod={graphLablels}
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
    </>
  );
};

export default CountryDetails;
