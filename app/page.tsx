'use client';

import { useState } from 'react';
import SearchBar from '@/components/SearchBar';
import GifGrid from '@/components/GifGrid';
import GifModal from '@/components/GifModal';
import GifSkeleton from '@/components/GifSkeleton';
import EmptyState from '@/components/EmptyState';
import ErrorState from '@/components/ErrorState';
import { searchGifs } from '@/lib/giphy';
import { Gif } from '@/types/gif';

const LIMIT = 24;

export default function HomePage() {
  const [query, setQuery] = useState('');
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(false);

  const [isInitialLoading, setIsInitialLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const [error, setError] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedGif, setSelectedGif] = useState<Gif | null>(null);

  /** 🔍 Search triggered by Enter or Button */
  const handleSearch = async () => {
    if (!query.trim()) return;

    try {
      setIsInitialLoading(true);
      setError('');
      setHasSearched(true);

      const res = await searchGifs(query, LIMIT, 0);

      setGifs(res.data);
      setOffset(LIMIT);
      setHasMore(res.pagination.total_count > LIMIT);
    } catch {
      setError('Failed to load GIFs');
    } finally {
      setIsInitialLoading(false);
    }
  };

  /** ➕ Load more */
  const loadMoreGifs = async () => {
    try {
      setIsLoadingMore(true);

      const res = await searchGifs(query, LIMIT, offset);

      setGifs((prev) => [...prev, ...res.data]);
      setOffset((prev) => prev + LIMIT);
      setHasMore(res.pagination.total_count > offset + LIMIT);
    } catch {
      setError('Failed to load more GIFs');
    } finally {
      setIsLoadingMore(false);
    }
  };

  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">GIF Explorer</h1>

      <SearchBar
        value={query}
        onChange={setQuery}
        onSearch={handleSearch}
      />

      {error && <ErrorState message={error} />}

      {isInitialLoading && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <GifSkeleton key={i} />
          ))}
        </div>
      )}

      {!isInitialLoading && gifs.length > 0 && (
        <>
          <GifGrid gifs={gifs} onSelect={setSelectedGif} />

          {hasMore && (
            <div className="flex justify-center mt-6">
              <button
                onClick={loadMoreGifs}
                disabled={isLoadingMore}
                className="
                  px-6 py-2
                  bg-black text-white
                  rounded-lg text-sm
                  hover:bg-gray-800
                  disabled:opacity-50
                "
              >
                {isLoadingMore ? 'Loading...' : 'Load more'}
              </button>
            </div>
          )}
        </>
      )}

      {!isInitialLoading && hasSearched && gifs.length === 0 && (
        <EmptyState
          title="No GIFs found 😕"
          description="Try a different keyword."
        />
      )}

      {selectedGif && (
        <GifModal
          gif={selectedGif}
          onClose={() => setSelectedGif(null)}
        />
      )}
    </main>
  );
}
