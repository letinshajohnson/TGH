'use client';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <input
      className="
        w-full mb-6 px-4 py-3
        border border-gray-300 rounded-lg
        text-sm
        focus:outline-none focus:ring-2 focus:ring-black/20
        placeholder:text-gray-400
        transition
      "
      placeholder="Search for GIFs..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
