interface ImageProps {
  src: string
  alt: string
  caption?: string
}

export default function Image({ src, alt, caption }: ImageProps) {
  return (
    <figure className="my-8">
      <img 
        src={src} 
        alt={alt}
        className="rounded-lg shadow-lg w-full"
        loading="lazy"
      />
      {caption && (
        <figcaption className="text-center text-sm text-gray-600 mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
