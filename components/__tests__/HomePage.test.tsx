import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HomePage from '../../app/page';

const mockResponse = {
  data: [
    {
      id: '1',
      title: 'Cat GIF',
      images: {
        fixed_width_still: { url: 'cat.jpg' },
        original: { url: 'cat-full.gif' },
      },
    },
  ],
  pagination: {
    total_count: 1,
  },
};

beforeEach(() => {
  fetchMock.resetMocks();
});

describe('GIF Explorer integration', () => {
  it('searches and displays gifs', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

    render(<HomePage />);

    await userEvent.type(
      screen.getByPlaceholderText('Search for GIFs...'),
      'cat{enter}'
    );

    expect(await screen.findByAltText('Cat GIF')).toBeInTheDocument();
  });

  it('shows empty state when no gifs found', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({ data: [], pagination: { total_count: 0 } })
    );

    render(<HomePage />);

    await userEvent.type(
      screen.getByPlaceholderText('Search for GIFs...'),
      'asdfghjkl{enter}'
    );

    expect(
      await screen.findByText(/No GIFs found/i)
    ).toBeInTheDocument();
  });
});
