'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaSearch, FaBed, FaBath, FaUsers, FaWifi, FaSwimmingPool, FaFireAlt, FaDog } from 'react-icons/fa'

// Mock data for farmhouses
const farmhouses = [
  {
    id: 1,
    name: 'Meadow View Farmhouse',
    location: 'Yorkshire Dales, UK',
    description: 'A charming retreat with panoramic views of rolling meadows.',
    price: 150,
    bedrooms: 3,
    bathrooms: 2,
    guests: 6,
    amenities: ['wifi', 'fireplace', 'pet-friendly'],
    image: 'https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    slug: 'meadow-view'
  },
  {
    id: 2,
    name: 'Orchard Cottage',
    location: 'Cotswolds, UK',
    description: 'Nestled among fruit trees, perfect for a family getaway.',
    price: 180,
    bedrooms: 4,
    bathrooms: 2,
    guests: 8,
    amenities: ['wifi', 'pool', 'fireplace'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    slug: 'orchard-cottage'
  },
  {
    id: 3,
    name: 'Lakeside Farm',
    location: 'Lake District, UK',
    description: 'A serene farmhouse with private access to a pristine lake.',
    price: 220,
    bedrooms: 5,
    bathrooms: 3,
    guests: 10,
    amenities: ['wifi', 'pool', 'fireplace', 'pet-friendly'],
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    slug: 'lakeside-farm'
  },
  {
    id: 4,
    name: 'Hillside Haven',
    location: 'Scottish Highlands, UK',
    description: 'Perched on a hillside with stunning views of the mountains.',
    price: 190,
    bedrooms: 3,
    bathrooms: 2,
    guests: 6,
    amenities: ['wifi', 'fireplace'],
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80',
    slug: 'hillside-haven'
  },
  {
    id: 5,
    name: 'Vineyard Villa',
    location: 'Tuscany, Italy',
    description: 'A luxurious farmhouse surrounded by vineyards and olive groves.',
    price: 250,
    bedrooms: 4,
    bathrooms: 3,
    guests: 8,
    amenities: ['wifi', 'pool', 'fireplace'],
    image: 'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    slug: 'vineyard-villa'
  },
  {
    id: 6,
    name: 'Lavender Fields Cottage',
    location: 'Provence, France',
    description: 'A picturesque cottage surrounded by fragrant lavender fields.',
    price: 210,
    bedrooms: 2,
    bathrooms: 1,
    guests: 4,
    amenities: ['wifi', 'pet-friendly'],
    image: 'https://images.unsplash.com/photo-1595877244574-e90ce41ce089?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    slug: 'lavender-fields'
  }
]

const FarmhousesPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    guests: '',
    amenities: [] as string[]
  })

  // Filter farmhouses based on search and filters
  const filteredFarmhouses = farmhouses.filter(farmhouse => {
    // Search term filter
    const matchesSearch = 
      farmhouse.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      farmhouse.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      farmhouse.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    // Price filter
    const matchesMinPrice = filters.minPrice === '' || farmhouse.price >= parseInt(filters.minPrice)
    const matchesMaxPrice = filters.maxPrice === '' || farmhouse.price <= parseInt(filters.maxPrice)
    
    // Bedrooms filter
    const matchesBedrooms = filters.bedrooms === '' || farmhouse.bedrooms >= parseInt(filters.bedrooms)
    
    // Guests filter
    const matchesGuests = filters.guests === '' || farmhouse.guests >= parseInt(filters.guests)
    
    // Amenities filter
    const matchesAmenities = 
      filters.amenities.length === 0 || 
      filters.amenities.every(amenity => farmhouse.amenities.includes(amenity))
    
    return matchesSearch && matchesMinPrice && matchesMaxPrice && matchesBedrooms && matchesGuests && matchesAmenities
  })

  // Toggle amenity filter
  const toggleAmenity = (amenity: string) => {
    setFilters(prev => {
      const amenities = prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
      
      return { ...prev, amenities }
    })
  }

  // Reset all filters
  const resetFilters = () => {
    setSearchTerm('')
    setFilters({
      minPrice: '',
      maxPrice: '',
      bedrooms: '',
      guests: '',
      amenities: []
    })
  }

  // Render amenity icon
  const renderAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case 'wifi':
        return <FaWifi className="text-primary-600" />
      case 'pool':
        return <FaSwimmingPool className="text-primary-600" />
      case 'fireplace':
        return <FaFireAlt className="text-primary-600" />
      case 'pet-friendly':
        return <FaDog className="text-primary-600" />
      default:
        return null
    }
  }

  return (
    <div className="py-12">
      <div className="container-custom">
        <h1 className="text-4xl font-bold mb-8">Find Your Perfect Farmhouse</h1>
        
        {/* Search and Filter Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search Input */}
            <div className="flex-grow">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by name, location, or description..."
                  className="input pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            
            {/* Reset Button */}
            <button
              onClick={resetFilters}
              className="btn btn-outline"
            >
              Reset Filters
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price Range (per night)</label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  className="input"
                  value={filters.minPrice}
                  onChange={(e) => setFilters(prev => ({ ...prev, minPrice: e.target.value }))}
                />
                <span>-</span>
                <input
                  type="number"
                  placeholder="Max"
                  className="input"
                  value={filters.maxPrice}
                  onChange={(e) => setFilters(prev => ({ ...prev, maxPrice: e.target.value }))}
                />
              </div>
            </div>
            
            {/* Bedrooms */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Min. Bedrooms</label>
              <select
                className="input"
                value={filters.bedrooms}
                onChange={(e) => setFilters(prev => ({ ...prev, bedrooms: e.target.value }))}
              >
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
              </select>
            </div>
            
            {/* Guests */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Min. Guests</label>
              <select
                className="input"
                value={filters.guests}
                onChange={(e) => setFilters(prev => ({ ...prev, guests: e.target.value }))}
              >
                <option value="">Any</option>
                <option value="2">2+</option>
                <option value="4">4+</option>
                <option value="6">6+</option>
                <option value="8">8+</option>
                <option value="10">10+</option>
              </select>
            </div>
            
            {/* Amenities */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Amenities</label>
              <div className="flex flex-wrap gap-2">
                <button
                  className={`px-3 py-1 rounded-full text-sm flex items-center gap-1 ${
                    filters.amenities.includes('wifi') 
                      ? 'bg-primary-100 text-primary-700 border border-primary-300' 
                      : 'bg-gray-100 text-gray-700 border border-gray-300'
                  }`}
                  onClick={() => toggleAmenity('wifi')}
                >
                  <FaWifi /> WiFi
                </button>
                <button
                  className={`px-3 py-1 rounded-full text-sm flex items-center gap-1 ${
                    filters.amenities.includes('pool') 
                      ? 'bg-primary-100 text-primary-700 border border-primary-300' 
                      : 'bg-gray-100 text-gray-700 border border-gray-300'
                  }`}
                  onClick={() => toggleAmenity('pool')}
                >
                  <FaSwimmingPool /> Pool
                </button>
                <button
                  className={`px-3 py-1 rounded-full text-sm flex items-center gap-1 ${
                    filters.amenities.includes('fireplace') 
                      ? 'bg-primary-100 text-primary-700 border border-primary-300' 
                      : 'bg-gray-100 text-gray-700 border border-gray-300'
                  }`}
                  onClick={() => toggleAmenity('fireplace')}
                >
                  <FaFireAlt /> Fireplace
                </button>
                <button
                  className={`px-3 py-1 rounded-full text-sm flex items-center gap-1 ${
                    filters.amenities.includes('pet-friendly') 
                      ? 'bg-primary-100 text-primary-700 border border-primary-300' 
                      : 'bg-gray-100 text-gray-700 border border-gray-300'
                  }`}
                  onClick={() => toggleAmenity('pet-friendly')}
                >
                  <FaDog /> Pet Friendly
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Results Count */}
        <p className="text-gray-600 mb-6">
          {filteredFarmhouses.length} {filteredFarmhouses.length === 1 ? 'farmhouse' : 'farmhouses'} found
        </p>
        
        {/* Farmhouses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFarmhouses.map(farmhouse => (
            <div key={farmhouse.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src={farmhouse.image}
                  alt={farmhouse.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-bold">{farmhouse.name}</h2>
                  <span className="text-primary-600 font-bold">${farmhouse.price}/night</span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{farmhouse.location}</p>
                <p className="text-gray-700 mb-4">{farmhouse.description}</p>
                
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-4 text-gray-600">
                    <div className="flex items-center">
                      <FaBed className="mr-1" />
                      <span>{farmhouse.bedrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <FaBath className="mr-1" />
                      <span>{farmhouse.bathrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <FaUsers className="mr-1" />
                      <span>{farmhouse.guests}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    {farmhouse.amenities.map(amenity => (
                      <div key={amenity} className="tooltip" data-tip={amenity}>
                        {renderAmenityIcon(amenity)}
                      </div>
                    ))}
                  </div>
                  <Link href={`/farmhouses/${farmhouse.slug}`} className="btn btn-primary">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* No Results */}
        {filteredFarmhouses.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-bold mb-2">No farmhouses found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your filters or search term</p>
            <button onClick={resetFilters} className="btn btn-primary">
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default FarmhousesPage 