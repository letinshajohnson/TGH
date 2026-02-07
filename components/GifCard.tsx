import { Gif } from '@/types/gif';

interface Props {
  gif: Gif;
  onClick: () => void;
}

export default function GifCard({ gif, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="
        cursor-pointer
        rounded-lg overflow-hidden
        bg-white
        shadow-sm
        hover:shadow-md
        transition-shadow
      "
    >
      <div className="aspect-square bg-gray-100">
        <img
          src={gif.images.fixed_width_still.url}
          alt={gif.title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
