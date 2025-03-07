import Image from 'next/image'
import Link from 'next/link'
import { FaLeaf, FaHeart, FaUsers, FaGlobe } from 'react-icons/fa'

const AboutPage = () => {
  return (
    <div className="py-12">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Rustic Retreats</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connecting people with authentic farmhouse experiences since 2010
          </p>
        </div>
        
        {/* Our Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Rustic Retreats was born from a passion for the countryside and a desire to share the authentic rural experience with others. Founded in 2010 by Jane and Michael Thompson, our journey began with a single renovated farmhouse in the Yorkshire Dales.
            </p>
            <p className="text-gray-700 mb-4">
              Having grown up in rural communities, the Thompsons recognized the unique charm and tranquility that farmhouse living offers—a stark contrast to the fast-paced urban lifestyle. They envisioned creating a platform where people could disconnect from the digital world and reconnect with nature, tradition, and simplicity.
            </p>
            <p className="text-gray-700">
              Today, Rustic Retreats has grown into a curated collection of over 100 farmhouses across the UK and Europe, each with its own unique character and story. We remain committed to our founding principles: authenticity, sustainability, and creating meaningful experiences.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1595252129837-2f7120e1d2fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Founders of Rustic Retreats"
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        {/* Our Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary-100 p-4 rounded-full inline-block mb-4">
                <FaLeaf className="text-primary-600 text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to eco-friendly practices and supporting properties that minimize their environmental impact.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary-100 p-4 rounded-full inline-block mb-4">
                <FaHeart className="text-primary-600 text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Authenticity</h3>
              <p className="text-gray-600">
                We showcase genuine rural experiences that preserve and celebrate local traditions and heritage.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary-100 p-4 rounded-full inline-block mb-4">
                <FaUsers className="text-primary-600 text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-gray-600">
                We support local communities by promoting rural tourism and creating economic opportunities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary-100 p-4 rounded-full inline-block mb-4">
                <FaGlobe className="text-primary-600 text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Accessibility</h3>
              <p className="text-gray-600">
                We believe everyone should have the opportunity to experience the beauty of rural living.
              </p>
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                  alt="Michael Thompson - Co-Founder & CEO"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Michael Thompson</h3>
                <p className="text-gray-600 mb-4">Co-Founder & CEO</p>
                <p className="text-gray-700">
                  With a background in sustainable architecture, Michael oversees our property selection and ensures each farmhouse meets our quality standards.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
                  alt="Jane Thompson - Co-Founder & Creative Director"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Jane Thompson</h3>
                <p className="text-gray-600 mb-4">Co-Founder & Creative Director</p>
                <p className="text-gray-700">
                  Jane's passion for interior design and rural aesthetics helps shape the unique character of each property in our collection.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                  alt="David Wilson - Head of Customer Experience"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">David Wilson</h3>
                <p className="text-gray-600 mb-4">Head of Customer Experience</p>
                <p className="text-gray-700">
                  David ensures that every guest has a memorable stay, from the booking process to personalized recommendations for local experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">What People Say About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-700 italic mb-6">
                "Rustic Retreats has transformed how we vacation. Their farmhouses offer an authentic experience that hotels simply can't match. We've booked with them three times now, and each stay has been exceptional."
              </p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                    alt="Sarah Johnson"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-gray-600 text-sm">London, UK</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-700 italic mb-6">
                "As property owners, partnering with Rustic Retreats has been a wonderful experience. They truly understand the value of our farmhouse and have connected us with guests who appreciate its history and character."
              </p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Robert & Emma Davis"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Robert & Emma Davis</h4>
                  <p className="text-gray-600 text-sm">Property Owners, Cotswolds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-primary-600 text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Rural Adventure</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Experience the charm and tranquility of countryside living with our handpicked farmhouse collection.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/farmhouses" className="btn bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-3">
              Browse Farmhouses
            </Link>
            <Link href="/contact" className="btn border-2 border-white text-white hover:bg-primary-700 text-lg px-8 py-3">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage 