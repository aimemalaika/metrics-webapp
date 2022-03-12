import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Login from '../Login';

describe('Test the Country list', () => {
  it('Country section renders correctly', () => {
    const country = renderer.create(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
    ).toJSON();
    expect(country).toMatchSnapshot();
  });
});
