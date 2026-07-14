import { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Photo } from '../lib/images';

type LightboxProps = {
  images: Photo[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const isOpen = index !== null;

  const next = useCallback(() => {
    if (index === null) return;
    onNavigate((index + 1) % images.length);
  }, [index, images.length, onNavigate]);

  const prev = useCallback(() => {
    if (index === null) return;
    onNavigate((index - 1 + images.length) % images.length);
  }, [index, images.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, next, prev]);

  if (!isOpen || index === null) return null;
  const photo = images[index];

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/85 lightbox-overlay flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Visionneuse de photos"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white/80 hover:text-white bg-white/10 rounded-full transition-colors"
        aria-label="Fermer"
      >
        <X size={24} />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); prev(); }}
        className="absolute left-4 md:left-8 w-12 h-12 flex items-center justify-center text-white/80 hover:text-white bg-white/10 rounded-full transition-colors"
        aria-label="Photo précédente"
      >
        <ChevronLeft size={28} />
      </button>

      <figure className="max-w-5xl max-h-[85vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
        <img
          src={photo.src}
          alt={photo.alt}
          className="max-w-full max-h-[78vh] object-contain rounded-lg shadow-2xl"
        />
        <figcaption className="mt-4 text-center text-sm text-white/70 max-w-2xl">
          {photo.alt}
        </figcaption>
      </figure>

      <button
        onClick={(e) => { e.stopPropagation(); next(); }}
        className="absolute right-4 md:right-8 w-12 h-12 flex items-center justify-center text-white/80 hover:text-white bg-white/10 rounded-full transition-colors"
        aria-label="Photo suivante"
      >
        <ChevronRight size={28} />
      </button>

      <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/50">
        {index + 1} / {images.length}
      </span>
    </div>
  );
}
