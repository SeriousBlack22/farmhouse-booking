'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FaTimes } from 'react-icons/fa'

// Gallery images
const galleryImages = [
  {
    id: 1,
    src: '/images/farmhouse/1.jpg',
    alt: 'Aarohi Farm - Exterior View',
    category: 'exterior'
  },
  {
    id: 2,
    src: '/images/farmhouse/2.jpg',
    alt: 'Aarohi Farm - Living Room',
    category: 'interior'
  },
  {
    id: 3,
    src: '/images/farmhouse/3.jpg',
    alt: 'Aarohi Farm - Bedroom',
    category: 'interior'
  },
  {
    id: 4,
    src: '/images/farmhouse/4.jpg',
    alt: 'Aarohi Farm - Swimming Pool',
    category: 'amenities'
  },
  {
    id: 5,
    src: '/images/farmhouse/5.jpg',
    alt: 'Aarohi Farm - Garden View',
    category: 'surroundings'
  },
  {
    id: 6,
    src: '/images/farmhouse/6.jpg',
    alt: 'Aarohi Farm - Dining Area',
    category: 'interior'
  },
  {
    id: 7,
    src: '/images/farmhouse/7.jpg',
    alt: 'Aarohi Farm - Kitchen',
    category: 'interior'
  },
  {
    id: 8,
    src: '/images/farmhouse/8.jpg',
    alt: 'Aarohi Farm - Bathroom',
    category: 'interior'
  },
  {
    id: 9,
    src: '/images/farmhouse/9.jpg',
    alt: 'Aarohi Farm - Outdoor Seating',
    category: 'amenities'
  },
  {
    id: 10,
    src: '/images/farmhouse/10.jpg',
    alt: 'Aarohi Farm - Front View',
    category: 'exterior'
  },
  {
    id: 11,
    src: '/images/farmhouse/11.jpg',
    alt: 'Aarohi Farm - Master Bedroom',
    category: 'interior'
  },
  {
    id: 12,
    src: '/images/farmhouse/12.jpg',
    alt: 'Aarohi Farm - Second Bedroom',
    category: 'interior'
  },
  {
    id: 13,
    src: '/images/farmhouse/13.jpg',
    alt: 'Aarohi Farm - Garden Area',
    category: 'surroundings'
  },
  {
    id: 14,
    src: '/images/farmhouse/14.jpg',
    alt: 'Aarohi Farm - Poolside',
    category: 'amenities'
  },
  {
    id: 15,
    src: '/images/farmhouse/15.jpg',
    alt: 'Aarohi Farm - Evening View',
    category: 'exterior'
  },
  {
    id: 16,
    src: '/images/farmhouse/16.jpg',
    alt: 'Aarohi Farm - Lounge Area',
    category: 'interior'
  },
  {
    id: 17,
    src: '/images/farmhouse/17.jpg',
    alt: 'Aarohi Farm - Terrace',
    category: 'amenities'
  },
  {
    id: 18,
    src: '/images/farmhouse/18.jpg',
    alt: 'Aarohi Farm - Garden Path',
    category: 'surroundings'
  },
  {
    id: 19,
    src: '/images/farmhouse/19.jpg',
    alt: 'Aarohi Farm - Night View',
    category: 'exterior'
  },
  {
    id: 21,
    src: '/images/farmhouse/21.jpg',
    alt: 'Aarohi Farm - Panoramic View',
    category: 'surroundings'
  },
  {
    id: 22,
    src: '/images/farmhouse/22.jpg',
    alt: 'Aarohi Farm - Entrance',
    category: 'exterior'
  },
  {
    id: 23,
    src: '/images/farmhouse/23.jpg',
    alt: 'Aarohi Farm - Living Space',
    category: 'interior'
  },
  {
    id: 24,
    src: '/images/farmhouse/24.jpg',
    alt: 'Aarohi Farm - Outdoor View',
    category: 'surroundings'
  },
  {
    id: 25,
    src: '/images/farmhouse/25.jpg',
    alt: 'Aarohi Farm - Relaxation Area',
    category: 'amenities'
  },
  {
    id: 26,
    src: '/images/farmhouse/26.jpg',
    alt: 'Aarohi Farm - Garden View',
    category: 'surroundings'
  }
]

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [filter, setFilter] = useState<string>('all')
  
  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === filter)
  
  const openLightbox = (id: number) => {
    setSelectedImage(id)
    // Prevent scrolling when lightbox is open
    document.body.style.overflow = 'hidden'
  }
  
  const closeLightbox = () => {
    setSelectedImage(null)
    // Re-enable scrolling
    document.body.style.overflow = 'auto'
  }
  
  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!selectedImage) return
    
    if (e.key === 'Escape') {
      closeLightbox()
    } else if (e.key === 'ArrowRight') {
      const currentIndex = galleryImages.findIndex(img => img.id === selectedImage)
      const nextIndex = (currentIndex + 1) % galleryImages.length
      setSelectedImage(galleryImages[nextIndex].id)
    } else if (e.key === 'ArrowLeft') {
      const currentIndex = galleryImages.findIndex(img => img.id === selectedImage)
      const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length
      setSelectedImage(galleryImages[prevIndex].id)
    }
  }

  return (
    <div className="py-12" onKeyDown={handleKeyDown} tabIndex={0}>
      <div className="container-custom">
        <h1 className="text-4xl font-bold mb-2 text-center">Aarohi Farm Gallery</h1>
        <p className="text-xl text-gray-600 mb-12 text-center">Explore our beautiful 2 BHK farmhouse and its surroundings</p>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button 
            className={`px-4 py-2 rounded-full ${filter === 'all' ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`px-4 py-2 rounded-full ${filter === 'exterior' ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            onClick={() => setFilter('exterior')}
          >
            Exterior
          </button>
          <button 
            className={`px-4 py-2 rounded-full ${filter === 'interior' ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            onClick={() => setFilter('interior')}
          >
            Interior
          </button>
          <button 
            className={`px-4 py-2 rounded-full ${filter === 'amenities' ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            onClick={() => setFilter('amenities')}
          >
            Amenities
          </button>
          <button 
            className={`px-4 py-2 rounded-full ${filter === 'surroundings' ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            onClick={() => setFilter('surroundings')}
          >
            Surroundings
          </button>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => openLightbox(image.id)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
        
        {/* Video Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Take a Virtual Tour</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <video 
                controls 
                className="w-full"
                poster="/images/farmhouse/1.jpg"
              >
                <source src="/images/farmhouse/20.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
        
        {/* No Results */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No images found for this category.</p>
          </div>
        )}
        
        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              onClick={closeLightbox}
            >
              <FaTimes size={24} />
            </button>
            
            <div className="relative w-full max-w-5xl max-h-[80vh] aspect-video">
              {galleryImages.find(img => img.id === selectedImage) && (
                <>
                  <Image
                    src={galleryImages.find(img => img.id === selectedImage)!.src}
                    alt={galleryImages.find(img => img.id === selectedImage)!.alt}
                    fill
                    className="object-contain"
                  />
                  <p className="absolute bottom-0 left-0 right-0 text-center text-white bg-black bg-opacity-50 py-2">
                    {galleryImages.find(img => img.id === selectedImage)!.alt}
                  </p>
                </>
              )}
            </div>
            
            {/* Navigation Arrows */}
            <button 
              className="absolute left-4 text-white hover:text-gray-300 z-10"
              onClick={() => {
                const currentIndex = galleryImages.findIndex(img => img.id === selectedImage)
                const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length
                setSelectedImage(galleryImages[prevIndex].id)
              }}
            >
              &#10094;
            </button>
            <button 
              className="absolute right-4 text-white hover:text-gray-300 z-10"
              onClick={() => {
                const currentIndex = galleryImages.findIndex(img => img.id === selectedImage)
                const nextIndex = (currentIndex + 1) % galleryImages.length
                setSelectedImage(galleryImages[nextIndex].id)
              }}
            >
              &#10095;
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default GalleryPage 