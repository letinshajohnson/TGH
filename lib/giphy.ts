const API_KEY = process.env.NEXT_PUBLIC_GIPHY_API_KEY!;
const BASE_URL = 'https://api.giphy.com/v1/gifs/search';

export async function searchGifs(
  query: string,
  limit = 24,
  offset = 0
) {
  const res = await fetch(
    `${BASE_URL}?api_key=${API_KEY}&q=${query}&limit=${limit}&offset=${offset}`
  );

  if (!res.ok) throw new Error('Failed to fetch GIFs');

  return res.json();
}
