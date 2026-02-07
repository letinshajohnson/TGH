export interface Gif {
  id: string;
  title: string;
  images: {
    fixed_width: { url: string };
    fixed_width_still: { url: string };
    original: { url: string };
  };
}
