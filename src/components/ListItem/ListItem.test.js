import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ListItem from './ListItem';

describe('ListItem component', () => {
  afterEach(() => cleanup());
  it('renders a single character', () => {
    const { asFragment } = render(
      <ListItem name="some name" photoUrl="some photo url" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
