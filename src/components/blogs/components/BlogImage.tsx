import './Blog.css';

interface BlogImageProps {
  src: string;
  alt: string;
  width?: string;
}

export const BlogImage = ({ src, alt, width = '100%' }: BlogImageProps) => (
  <figure className="blog-figure">
    <img className="blog-image" src={src} alt={alt} style={{ width }} loading="lazy" />
  </figure>
);

interface BlogImagesProps {
  images: { src: string; alt: string }[];
}

export const BlogImages = ({ images }: BlogImagesProps) => (
  <div className="blog-images">
    {images.map((image) => (
      <img className="blog-image" key={image.src} src={image.src} alt={image.alt} loading="lazy" />
    ))}
  </div>
);

interface BlogEmojiProps {
  src: string;
  alt: string;
  size?: 'small' | 'medium' | 'large';
}

export const BlogEmoji = ({ src, alt, size = 'medium' }: BlogEmojiProps) => (
  <img className={`blog-emoji ${size}`} src={src} alt={alt} loading="lazy" />
);
