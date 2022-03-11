const GET_COUNTRIES_STATS = 'metrics-webapp/countries/GET_COUNTRIES_STATS';
const initialState = [];
const END_POINT = 'https://api.covid19tracking.narrativa.com/api';
const TODAY_DATE = new Date().toISOString().slice(0, 10);

export const FetchCountries = () => async (dispatch) => {
  const request = await fetch(`${END_POINT}/${TODAY_DATE}`);
  if (request.status === 200) {
    const response = await request.json();
    const payload = [];
    Object.keys(response.dates).forEach((ident) => {
      let counter = 1;
      let classname;
      let doubleOdd = null;
      Object.keys(response.dates[ident].countries).forEach((key) => {
        const {
          id, date, name, source,
        } = response.dates[ident].countries[key];
        switch (true) {
          case doubleOdd === true && counter % 2 === 0:
            classname = 'small-card-country pinker';
            doubleOdd = true;
            break;
          case doubleOdd === true && counter % 2 !== 0:
            classname = 'small-card-country pinker';
            doubleOdd = false;
            break;
          case doubleOdd === false && counter % 2 === 0:
            classname = 'small-card-country pink';
            doubleOdd = false;
            break;
          default:
            classname = 'small-card-country pink';
            doubleOdd = true;
            break;
        }
        payload.push({
          id, date, name, source, classname,
        });
        counter += 1;
      });
    });
    dispatch({
      type: GET_COUNTRIES_STATS,
      payload,
    });
  }
};

const countryStatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES_STATS: return action.payload;
    default: return state;
  }
};

export default countryStatsReducer;
