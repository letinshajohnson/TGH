import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from '../SearchBar';

describe('SearchBar', () => {
  it('triggers search on button click', async () => {
    const onSearch = jest.fn();

    render(
      <SearchBar
        value="cats"
        onChange={() => {}}
        onSearch={onSearch}
      />
    );

    await userEvent.click(screen.getByText('Search'));
    expect(onSearch).toHaveBeenCalledTimes(1);
  });

  it('triggers search on Enter key', async () => {
    const onSearch = jest.fn();

    render(
      <SearchBar
        value="dogs"
        onChange={() => {}}
        onSearch={onSearch}
      />
    );

    await userEvent.type(
      screen.getByPlaceholderText('Search for GIFs...'),
      '{enter}'
    );

    expect(onSearch).toHaveBeenCalled();
  });
});
