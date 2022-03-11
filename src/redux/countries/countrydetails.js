import { TODAY_DATE } from './countries';

const GET_COUNTRIES_DET = 'metrics-webapp/countries/GET_COUNTRIES_DET';
const initialState = [];
const END_POINT = 'https://api.covid19tracking.narrativa.com/api/country';

const date = new Date();
date.setDate(date.getDate() - 5);
const WEEK_DATE = date.toISOString().slice(0, 10);

export const FetchCountryDetails = (cid) => async (dispatch) => {
  const request = await fetch(`${END_POINT}/${cid}?date_from=${WEEK_DATE}&date_to=${TODAY_DATE}`);
  if (request.status === 200) {
    const response = await request.json();
    const labels = []; const confirmed = [];
    const recovered = []; const death = []; let countryInfo;
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    Object.keys(response.dates).forEach((period) => {
      labels.push(`${months[new Date(period).getMonth()]} ${new Date(period).getDate()}`);
      Object.keys(response.dates[period].countries).forEach((key) => {
        countryInfo = response.dates[TODAY_DATE].countries[key];
        const {
          today_confirmed: todayConfirmed,
          today_recovered: todayRecovered,
          today_deaths: todayDeaths,
        } = response.dates[period].countries[key];
        confirmed.push(todayConfirmed);
        recovered.push(todayRecovered);
        death.push(todayDeaths);
      });
    });
    const payload = { labels, data: { confirmed, recovered, death }, countryInfo };
    dispatch({
      type: GET_COUNTRIES_DET,
      payload,
    });
  }
};

const countryDetReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES_DET: return action.payload;
    default: return state;
  }
};

export default countryDetReducer;
