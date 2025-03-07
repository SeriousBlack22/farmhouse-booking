'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { FaCalendarAlt, FaUsers, FaUtensils, FaCheck, FaTimes } from 'react-icons/fa'
import { addDays, format, differenceInDays } from 'date-fns'

const BookingPage = () => {
  const router = useRouter()
  
  // State for booking form
  const [startDate, setStartDate] = useState<Date | null>(new Date())
  const [endDate, setEndDate] = useState<Date | null>(addDays(new Date(), 2))
  const [guests, setGuests] = useState(2)
  const [includeFood, setIncludeFood] = useState(true)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [specialRequests, setSpecialRequests] = useState('')
  const [bookingSuccess, setBookingSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  
  // Calculate total price
  const calculateTotalPrice = () => {
    if (!startDate || !endDate) return 0
    const days = differenceInDays(endDate, startDate)
    const pricePerPerson = includeFood ? 2000 : 1500
    return days * pricePerPerson * guests
  }
  
  // Handle booking submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setBookingSuccess(true)
    setLoading(false)
    
    // Scroll to top to show success message
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="py-12">
      <div className="container-custom">
        <h1 className="text-4xl font-bold mb-2 text-center">Book Your Stay at Aarohi Farm</h1>
        <p className="text-xl text-gray-600 mb-12 text-center">Experience the perfect countryside getaway in our beautiful 2 BHK farmhouse</p>
        
        {bookingSuccess ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCheck className="text-green-600 text-2xl" />
            </div>
            <h2 className="text-2xl font-bold text-green-800 mb-4">Booking Successful!</h2>
            <p className="text-gray-700 mb-6">
              Thank you for booking your stay at Aarohi Farm. We've sent a confirmation email to {email} with all the details.
              Our team will contact you shortly at {phone} to confirm your reservation.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div>
                  <p className="text-gray-500 text-sm">Check-in Date</p>
                  <p className="font-medium">{startDate ? format(startDate, 'MMMM d, yyyy') : ''}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Check-out Date</p>
                  <p className="font-medium">{endDate ? format(endDate, 'MMMM d, yyyy') : ''}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Number of Guests</p>
                  <p className="font-medium">{guests}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Package</p>
                  <p className="font-medium">{includeFood ? 'With Food (₹2,000/person)' : 'Without Food (₹1,500/person)'}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-gray-500 text-sm">Total Amount</p>
                  <p className="text-xl font-bold text-primary-600">₹{calculateTotalPrice().toLocaleString()}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="btn btn-primary">
                Return to Home
              </Link>
              <button 
                onClick={() => setBookingSuccess(false)} 
                className="btn btn-outline"
              >
                Make Another Booking
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Booking Details</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Dates and Guests */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Check-in Date</label>
                      <div className="relative">
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          selectsStart
                          startDate={startDate}
                          endDate={endDate}
                          minDate={new Date()}
                          className="input w-full pl-10"
                        />
                        <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Check-out Date</label>
                      <div className="relative">
                        <DatePicker
                          selected={endDate}
                          onChange={(date) => setEndDate(date)}
                          selectsEnd
                          startDate={startDate}
                          endDate={endDate}
                          minDate={startDate ? addDays(startDate, 1) : new Date()}
                          className="input w-full pl-10"
                        />
                        <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Number of Guests</label>
                      <div className="relative">
                        <select
                          value={guests}
                          onChange={(e) => setGuests(parseInt(e.target.value))}
                          className="input w-full pl-10"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                            <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                          ))}
                        </select>
                        <FaUsers className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Food Package</label>
                      <div className="flex gap-4 mt-2">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            checked={includeFood}
                            onChange={() => setIncludeFood(true)}
                            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                          />
                          <span className="ml-2 text-gray-700">With Food (₹2,000/person)</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            checked={!includeFood}
                            onChange={() => setIncludeFood(false)}
                            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                          />
                          <span className="ml-2 text-gray-700">Without Food (₹1,500/person)</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-xl font-bold mb-4">Personal Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="input"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="input"
                          placeholder="you@example.com"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="input"
                          placeholder="+91 98765 43210"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="special-requests" className="block text-sm font-medium text-gray-700 mb-1">
                      Special Requests (Optional)
                    </label>
                    <textarea
                      id="special-requests"
                      rows={4}
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      className="input"
                      placeholder="Any special requests or requirements for your stay..."
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="terms"
                      type="checkbox"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      required
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                      I agree to the{' '}
                      <Link href="/terms" className="text-primary-600 hover:text-primary-500">
                        Terms and Conditions
                      </Link>
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn btn-primary w-full py-3 text-lg"
                    disabled={loading}
                  >
                    {loading ? 'Processing...' : 'Confirm Booking'}
                  </button>
                </form>
              </div>
            </div>
            
            {/* Booking Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
                <h2 className="text-2xl font-bold mb-6">Booking Summary</h2>
                
                <div className="mb-6">
                  <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                      alt="Aarohi Farm"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg">Aarohi Farm</h3>
                  <p className="text-gray-600">2 BHK Farmhouse with Swimming Pool</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Check-in</span>
                    <span className="font-medium">{startDate ? format(startDate, 'MMM d, yyyy') : ''}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Check-out</span>
                    <span className="font-medium">{endDate ? format(endDate, 'MMM d, yyyy') : ''}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Guests</span>
                    <span className="font-medium">{guests}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Package</span>
                    <span className="font-medium">{includeFood ? 'With Food' : 'Without Food'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rate</span>
                    <span className="font-medium">₹{includeFood ? '2,000' : '1,500'}/person/night</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">
                      ₹{includeFood ? '2,000' : '1,500'} x {guests} {guests === 1 ? 'person' : 'people'} x {startDate && endDate ? differenceInDays(endDate, startDate) : 0} nights
                    </span>
                    <span className="font-medium">₹{calculateTotalPrice().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Cleaning fee</span>
                    <span className="font-medium">₹500</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Service fee</span>
                    <span className="font-medium">₹300</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200">
                    <span>Total</span>
                    <span>₹{(calculateTotalPrice() + 500 + 300).toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Amenities Included</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <FaCheck className="text-green-500 mr-2" />
                      <span>Swimming Pool Access</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-green-500 mr-2" />
                      <span>Indoor & Outdoor Games</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-green-500 mr-2" />
                      <span>Bonfire (on request)</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-green-500 mr-2" />
                      <span>Parking</span>
                    </li>
                    <li className="flex items-center">
                      {includeFood ? (
                        <>
                          <FaCheck className="text-green-500 mr-2" />
                          <span>All Meals Included</span>
                        </>
                      ) : (
                        <>
                          <FaTimes className="text-red-500 mr-2" />
                          <span className="text-gray-500">Meals Not Included</span>
                        </>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default BookingPage 