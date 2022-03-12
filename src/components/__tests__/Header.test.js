import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Header from '../Header';

describe('Test the Country list', () => {
  it('Country section renders correctly', () => {
    const country = renderer.create(
      <MemoryRouter>
        <Header pth="/" content="countries list" />
      </MemoryRouter>,
    ).toJSON();
    expect(country).toMatchSnapshot();
  });
});
