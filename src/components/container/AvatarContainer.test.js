import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import AvatarContainer from './AvatarContainer';
import { MemoryRouter } from 'react-router-dom';

describe('AllQuotes container', () => {
  it('displays a loading screen then a list of characters', async () => {
    render(
      <MemoryRouter>
        <AvatarContainer />
      </MemoryRouter>
    );

    screen.getByText('LOADING');

    const ul = await screen.findByTestId('characters');

    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });
});
