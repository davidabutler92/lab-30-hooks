import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ListPage from './ListPage';

const characters = [
  {
    _id: '1',
    name: 'someName',
    photoUrl: 'somePhoto',
  },
  {
    _id: '2',
    name: 'someName',
    photoUrl: 'somePhoto',
  },
  {
    _id: '3',
    name: 'someName',
    photoUrl: 'somePhoto',
  },
];

describe('ListPage component', () => {
  afterEach(() => cleanup());
  it('renders list of characters', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <ListPage characters={characters} />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
