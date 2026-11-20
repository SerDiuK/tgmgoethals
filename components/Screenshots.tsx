"use client";

import Image from "next/image";
import { useCallback, type MouseEvent } from "react";

export function Screenshots({
  images,
  className = "",
}: {
  images: { src: string; alt: string }[];
  className?: string;
}) {
  const enlarge = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.closest("li")?.querySelector("dialog")?.showModal();
  }, []);

  return (
    <ul className={`grid grid-cols-3 gap-3 ${className}`}>
      {images.map((image) => (
        <li key={image.src}>
          <button
            type="button"
            onClick={enlarge}
            aria-haspopup="dialog"
            className="relative block aspect-8/5 w-full cursor-zoom-in bg-neutral transition-opacity hover:opacity-85"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 217px"
              className="object-cover"
            />
          </button>
          <dialog
            className="modal bg-neutral/90 not-open:hidden"
            aria-label={image.alt}
          >
            <form method="dialog" className="size-full p-4 sm:p-10">
              <button
                type="submit"
                aria-label="Close"
                className="relative size-full cursor-zoom-out"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </button>
            </form>
          </dialog>
        </li>
      ))}
    </ul>
  );
}
