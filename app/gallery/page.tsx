'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FaTimes } from 'react-icons/fa'

// Gallery images
const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    alt: 'Aarohi Farm - Exterior View',
    category: 'exterior'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Aarohi Farm - Living Room',
    category: 'interior'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Aarohi Farm - Bedroom',
    category: 'interior'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    alt: 'Aarohi Farm - Swimming Pool',
    category: 'amenities'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Aarohi Farm - Surroundings',
    category: 'surroundings'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Aarohi Farm - Dining Area',
    category: 'interior'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1595877244574-e90ce41ce089?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Aarohi Farm - Garden',
    category: 'surroundings'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Aarohi Farm - Front View',
    category: 'exterior'
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Aarohi Farm - Kitchen',
    category: 'interior'
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Aarohi Farm - Bathroom',
    category: 'interior'
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Aarohi Farm - Bonfire Area',
    category: 'amenities'
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1595252129837-2f7120e1d2fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Aarohi Farm - Outdoor Seating',
    category: 'amenities'
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