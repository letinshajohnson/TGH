import { Gif } from '@/types/gif';
import GifCard from './GifCard';

interface Props {
  gifs: Gif[];
  onSelect: (gif: Gif) => void;
}

export default function GifGrid({ gifs, onSelect }: Props) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
      {gifs.map((gif) => (
        <GifCard
          key={gif.id}
          gif={gif}
          onClick={() => onSelect(gif)}
        />
      ))}
    </div>
  );
}
