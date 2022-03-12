import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Countries from '../Countries';
import store from '../../redux/configureStore';

describe('Test the Country list', () => {
  it('Country section renders correctly', () => {
    const country = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <Countries />
        </MemoryRouter>
      </Provider>,
    ).toJSON();

    expect(country).toMatchSnapshot();
  });
});
