import { Gif } from '@/types/gif';

interface Props {
  gif: Gif;
  onClose: () => void;
}

export default function GifModal({ gif, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-4 max-w-xl w-full shadow-lg">
        <div className="flex justify-between items-center mb-3">
          <p className="text-sm font-medium truncate">
            {gif.title || 'GIF Preview'}
          </p>
          <button
            onClick={onClose}
            className="text-sm text-gray-500 hover:text-black transition"
          >
            ✕
          </button>
        </div>

        <img
          src={gif.images.original.url}
          alt={gif.title}
          className="w-full rounded-lg"
        />
      </div>
    </div>
  );
}
