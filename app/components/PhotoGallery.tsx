'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';

const photos = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  src: `/images/farmhouse/${i + 1}.jpg`,
  alt: `Aarohi Farm View ${i + 1}`
}));

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  return (
    <div className="py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="relative aspect-square cursor-pointer overflow-hidden rounded-lg hover:opacity-90 transition-opacity"
            onClick={() => setSelectedPhoto(photo.id)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>

      <Dialog
        open={selectedPhoto !== null}
        onClose={() => setSelectedPhoto(null)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
        
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              Close
            </button>
            
            {selectedPhoto && (
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={`/images/farmhouse/${selectedPhoto}.jpg`}
                  alt={`Aarohi Farm View ${selectedPhoto}`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
            )}
            
            <div className="absolute bottom-0 left-0 right-0 flex justify-between p-4">
              <button
                onClick={() => setSelectedPhoto(prev => prev && prev > 1 ? prev - 1 : 25)}
                className="text-white hover:text-gray-300"
              >
                Previous
              </button>
              <button
                onClick={() => setSelectedPhoto(prev => prev && prev < 25 ? prev + 1 : 1)}
                className="text-white hover:text-gray-300"
              >
                Next
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
} 