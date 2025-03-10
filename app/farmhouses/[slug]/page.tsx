'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { FaBed, FaBath, FaUsers, FaWifi, FaSwimmingPool, FaFireAlt, FaDog, FaMapMarkerAlt, FaStar } from 'react-icons/fa'
import { addDays, format, differenceInDays } from 'date-fns'

// Mock data for farmhouses (same as in the listing page)
const farmhouses = [
  {
    id: 1,
    name: 'Aarohi Farm',
    location: 'Lonavala, Maharashtra',
    description: 'A beautiful 2 BHK farmhouse with a swimming pool, perfect for a weekend getaway. This charming property offers stunning views of the surrounding hills and valleys, making it an ideal retreat for nature lovers and those seeking tranquility.',
    price: 150,
    bedrooms: 2,
    bathrooms: 2,
    guests: 6,
    amenities: ['wifi', 'pool', 'fireplace', 'pet-friendly'],
    image: '/images/farmhouse/1.jpg',
    images: [
      '/images/farmhouse/1.jpg',
      '/images/farmhouse/2.jpg',
      '/images/farmhouse/3.jpg',
      '/images/farmhouse/4.jpg',
      '/images/farmhouse/5.jpg',
      '/images/farmhouse/6.jpg'
    ],
    features: [
      'Swimming pool with deck',
      'Fully equipped modern kitchen',
      'Two spacious bedrooms',
      'Two modern bathrooms',
      'Living room with mountain views',
      'Outdoor dining area',
      'Garden with seating',
      'Parking space'
    ],
    reviews: [
      {
        id: 1,
        name: 'Sarah Johnson',
        date: '2023-10-15',
        rating: 5,
        comment: 'Absolutely stunning property! The views are breathtaking and the amenities are top-notch. We loved our weekend stay here.'
      },
      {
        id: 2,
        name: 'Michael Thompson',
        date: '2023-09-22',
        rating: 4,
        comment: 'Great location and beautiful property. The pool was perfect for the kids. Would definitely recommend!'
      }
    ],
    slug: 'aarohi-farm'
  },
  {
    id: 2,
    name: 'Orchard Cottage',
    location: 'Cotswolds, UK',
    description: 'Nestled among fruit trees, perfect for a family getaway. This charming cottage is surrounded by apple, pear, and cherry trees, offering a true countryside experience. The property has been lovingly restored to maintain its rustic charm while providing all modern comforts.',
    price: 180,
    bedrooms: 4,
    bathrooms: 2,
    guests: 8,
    amenities: ['wifi', 'pool', 'fireplace'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    ],
    features: [
      'Outdoor swimming pool (seasonal)',
      'Large kitchen with dining area',
      'Four comfortable bedrooms',
      'Two modern bathrooms',
      'Living room with fireplace',
      'Orchard with seasonal fruit picking',
      'Patio with outdoor dining',
      'Close to hiking trails'
    ],
    reviews: [
      {
        id: 1,
        name: 'Michael Thompson',
        date: '2023-10-05',
        rating: 5,
        comment: 'The kids loved picking fresh apples from the orchard. It was the perfect blend of rustic charm and modern comfort. We\'ll definitely be back!'
      },
      {
        id: 2,
        name: 'Jennifer Adams',
        date: '2023-09-12',
        rating: 4,
        comment: 'Beautiful cottage with great amenities. The pool was a hit with the whole family. Highly recommend for a summer stay.'
      }
    ],
    slug: 'orchard-cottage'
  },
  {
    id: 3,
    name: 'Lakeside Farm',
    location: 'Lake District, UK',
    description: 'A serene farmhouse with private access to a pristine lake. This spacious property offers stunning views of the lake and surrounding mountains. Perfect for nature lovers and those seeking tranquility, while still being close to local attractions.',
    price: 220,
    bedrooms: 5,
    bathrooms: 3,
    guests: 10,
    amenities: ['wifi', 'pool', 'fireplace', 'pet-friendly'],
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80'
    ],
    features: [
      'Private lake access with dock',
      'Outdoor pool with lake view',
      'Five spacious bedrooms',
      'Three modern bathrooms',
      'Large kitchen and dining area',
      'Game room with pool table',
      'Outdoor fire pit',
      'Pet-friendly with fenced yard'
    ],
    reviews: [
      {
        id: 1,
        name: 'Emily Rodriguez',
        date: '2023-10-20',
        rating: 5,
        comment: 'The lakeside location was breathtaking. We spent our evenings by the fire pit watching the sunset over the water. A truly unforgettable experience.'
      },
      {
        id: 2,
        name: 'Robert Johnson',
        date: '2023-09-15',
        rating: 5,
        comment: 'Perfect for our large family gathering. The house is spacious and well-equipped, and the lake access was amazing for swimming and fishing.'
      },
      {
        id: 3,
        name: 'Lisa Chen',
        date: '2023-08-28',
        rating: 4,
        comment: 'Beautiful property with stunning views. Our dog loved the yard and we enjoyed the private lake access. Would definitely recommend!'
      }
    ],
    slug: 'lakeside-farm'
  }
]

const FarmhouseDetailPage = () => {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string
  
  // Find the farmhouse by slug
  const farmhouse = farmhouses.find(f => f.slug === slug)
  
  // State for booking
  const [startDate, setStartDate] = useState<Date | null>(new Date())
  const [endDate, setEndDate] = useState<Date | null>(addDays(new Date(), 7))
  const [guests, setGuests] = useState(1)
  const [bookingSuccess, setBookingSuccess] = useState(false)
  
  // State for image gallery
  const [activeImage, setActiveImage] = useState(0)
  
  // If farmhouse not found
  if (!farmhouse) {
    return (
      <div className="container-custom py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Farmhouse Not Found</h1>
        <p className="mb-8">The farmhouse you're looking for doesn't exist or has been removed.</p>
        <Link href="/farmhouses" className="btn btn-primary">
          Browse All Farmhouses
        </Link>
      </div>
    )
  }
  
  // Calculate total price
  const calculateTotalPrice = () => {
    if (!startDate || !endDate) return 0
    const days = differenceInDays(endDate, startDate)
    return days * farmhouse.price
  }
  
  // Handle booking
  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send data to the server
    // For now, just show success message
    setBookingSuccess(true)
    
    // Reset after 5 seconds
    setTimeout(() => {
      setBookingSuccess(false)
    }, 5000)
  }
  
  // Render amenity icon
  const renderAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case 'wifi':
        return <FaWifi className="text-primary-600 text-xl" />
      case 'pool':
        return <FaSwimmingPool className="text-primary-600 text-xl" />
      case 'fireplace':
        return <FaFireAlt className="text-primary-600 text-xl" />
      case 'pet-friendly':
        return <FaDog className="text-primary-600 text-xl" />
      default:
        return null
    }
  }
  
  // Render amenity label
  const getAmenityLabel = (amenity: string) => {
    switch (amenity) {
      case 'wifi':
        return 'WiFi'
      case 'pool':
        return 'Swimming Pool'
      case 'fireplace':
        return 'Fireplace'
      case 'pet-friendly':
        return 'Pet Friendly'
      default:
        return amenity
    }
  }
  
  // Render star rating
  const renderStarRating = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <FaStar 
        key={i} 
        className={i < rating ? "text-yellow-400" : "text-gray-300"} 
      />
    ))
  }

  return (
    <div className="py-12">
      <div className="container-custom">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/farmhouses" className="hover:text-primary-600">Farmhouses</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{farmhouse.name}</span>
        </div>
        
        {/* Farmhouse Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{farmhouse.name}</h1>
          <div className="flex items-center text-gray-600">
            <FaMapMarkerAlt className="mr-1" />
            <span>{farmhouse.location}</span>
          </div>
        </div>
        
        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="md:col-span-2">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src={farmhouse.images[activeImage]}
                alt={`${farmhouse.name} - Image ${activeImage + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            {farmhouse.images.slice(0, 4).map((image, index) => (
              <div 
                key={index}
                className={`relative h-[120px] rounded-lg overflow-hidden cursor-pointer ${
                  activeImage === index ? 'ring-2 ring-primary-500' : ''
                }`}
                onClick={() => setActiveImage(index)}
              >
                <Image
                  src={image}
                  alt={`${farmhouse.name} - Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Details */}
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold mb-4">About This Farmhouse</h2>
              <p className="text-gray-700 mb-6">{farmhouse.description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                  <FaBed className="text-primary-600 text-2xl mb-2" />
                  <span className="text-gray-700 font-medium">{farmhouse.bedrooms} Bedrooms</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                  <FaBath className="text-primary-600 text-2xl mb-2" />
                  <span className="text-gray-700 font-medium">{farmhouse.bathrooms} Bathrooms</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                  <FaUsers className="text-primary-600 text-2xl mb-2" />
                  <span className="text-gray-700 font-medium">Up to {farmhouse.guests} Guests</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-primary-600 text-2xl font-bold mb-2">${farmhouse.price}</span>
                  <span className="text-gray-700 font-medium">per night</span>
                </div>
              </div>
              
              {/* Amenities */}
              <h3 className="text-xl font-bold mb-4">Amenities</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {farmhouse.amenities.map(amenity => (
                  <div key={amenity} className="flex items-center">
                    <div className="mr-2">
                      {renderAmenityIcon(amenity)}
                    </div>
                    <span className="text-gray-700">{getAmenityLabel(amenity)}</span>
                  </div>
                ))}
              </div>
              
              {/* Features */}
              <h3 className="text-xl font-bold mb-4">Features</h3>
              <ul className="list-disc pl-5 mb-6 grid grid-cols-1 md:grid-cols-2 gap-2">
                {farmhouse.features.map((feature, index) => (
                  <li key={index} className="text-gray-700">{feature}</li>
                ))}
              </ul>
            </div>
            
            {/* Reviews */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Guest Reviews</h2>
              
              {farmhouse.reviews.map(review => (
                <div key={review.id} className="border-b border-gray-200 pb-6 mb-6 last:border-0 last:mb-0 last:pb-0">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold">{review.name}</h3>
                    <span className="text-gray-500 text-sm">{review.date}</span>
                  </div>
                  <div className="flex mb-3">
                    {renderStarRating(review.rating)}
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Booking */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
              <h2 className="text-2xl font-bold mb-4">Book Your Stay</h2>
              
              {bookingSuccess ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  <p className="font-bold">Booking Successful!</p>
                  <p>Your stay at {farmhouse.name} has been booked. Check your email for confirmation details.</p>
                </div>
              ) : (
                <form onSubmit={handleBooking}>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Check-in Date</label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      selectsStart
                      startDate={startDate}
                      endDate={endDate}
                      minDate={new Date()}
                      className="input w-full"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Check-out Date</label>
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      selectsEnd
                      startDate={startDate}
                      endDate={endDate}
                      minDate={startDate ? addDays(startDate, 1) : new Date()}
                      className="input w-full"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Number of Guests</label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(parseInt(e.target.value))}
                      className="input w-full"
                    >
                      {Array.from({ length: farmhouse.guests }, (_, i) => i + 1).map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">${farmhouse.price} x {startDate && endDate ? differenceInDays(endDate, startDate) : 0} nights</span>
                      <span className="font-medium">${calculateTotalPrice()}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Cleaning fee</span>
                      <span className="font-medium">$50</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Service fee</span>
                      <span className="font-medium">$30</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200">
                      <span>Total</span>
                      <span>${calculateTotalPrice() + 50 + 30}</span>
                    </div>
                  </div>
                  
                  <button type="submit" className="btn btn-primary w-full">
                    Book Now
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        
        {/* Similar Farmhouses */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Similar Farmhouses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {farmhouses
              .filter(f => f.slug !== slug)
              .slice(0, 3)
              .map(f => (
                <div key={f.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={f.image}
                      alt={f.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-1">{f.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{f.location}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-primary-600 font-bold">${f.price}/night</span>
                      <Link href={`/farmhouses/${f.slug}`} className="btn btn-outline btn-sm">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FarmhouseDetailPage 