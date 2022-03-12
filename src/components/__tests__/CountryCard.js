import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import CountryCard from '../CountryCard';

describe('Test the Country list', () => {
  it('Country section renders correctly', () => {
    const country = renderer.create(
      <MemoryRouter>
        <CountryCard classname="pink" country="Aime" date="23-03-2020" source="aime malaika" countId="aime" />
      </MemoryRouter>,
    ).toJSON();
    expect(country).toMatchSnapshot();
  });
});
