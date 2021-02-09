import React from 'react';
import { render, cleanup } from '@testing-library/react';
import DetailPage from './DetailPage';
import { MemoryRouter } from 'react-router-dom';

describe('DetailPage component', () => {
  afterEach(() => cleanup());
  it('renders a details of a single character', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <DetailPage />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
