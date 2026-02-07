import { render, screen } from '@testing-library/react';
import GifCard from '../GifCard';

const gif = {
  id: '1',
  title: 'Test GIF',
  images: {
    fixed_width_still: {
      url: 'test.jpg',
    },
  },
};

describe('GifCard', () => {
  it('renders gif preview image', () => {
    render(<GifCard gif={gif as any} onClick={() => {}} />);

    const img = screen.getByAltText('Test GIF');
    expect(img).toBeInTheDocument();
  });
});
