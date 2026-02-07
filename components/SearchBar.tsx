'use client';

interface Props {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
}

export default function SearchBar({ value, onChange, onSearch }: Props) {
  return (
    <div className="flex gap-2 mb-6">
      <input
        className="
          flex-1 px-4 py-3
          border border-gray-300 rounded-lg
          text-sm
          focus:outline-none focus:ring-2 focus:ring-black/20
          placeholder:text-gray-400
        "
        placeholder="Search for GIFs..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onSearch();
          }
        }}
      />

      <button
        onClick={onSearch}
        className="
          px-5 py-3
          bg-black text-white
          rounded-lg text-sm
          hover:bg-gray-800
          transition
        "
      >
        Search
      </button>
    </div>
  );
}
