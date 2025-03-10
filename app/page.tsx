import Image from 'next/image'
import Link from 'next/link'
import { FaSwimmingPool, FaUtensils, FaGamepad, FaFire, FaLeaf } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/farmhouse/1.jpg"
            alt="Aarohi Farm - Beautiful Farmhouse"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="container-custom relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Aarohi Farm
            </h1>
            <p className="text-xl mb-8">
              Experience the charm and tranquility of rural living in our beautiful 2 BHK farmhouse surrounded by nature
            </p>
            <Link href="/booking" className="btn btn-primary text-lg px-8 py-3">
              Book Your Stay Now
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Experience Aarohi Farm</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary-100 p-4 rounded-full mb-4">
                <FaSwimmingPool className="text-primary-600 text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Swimming Pool</h3>
              <p className="text-gray-600">Enjoy our refreshing swimming pool during your stay.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary-100 p-4 rounded-full mb-4">
                <FaUtensils className="text-primary-600 text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Food Options</h3>
              <p className="text-gray-600">Choose between with food (₹2000/person) or without food (₹1500/person) packages.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary-100 p-4 rounded-full mb-4">
                <FaGamepad className="text-primary-600 text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Indoor & Outdoor Games</h3>
              <p className="text-gray-600">Variety of games available for entertainment and fun.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary-100 p-4 rounded-full mb-4">
                <FaFire className="text-primary-600 text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Bonfire</h3>
              <p className="text-gray-600">Enjoy cozy evenings with a bonfire under the stars.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary-100 p-4 rounded-full mb-4">
                <FaLeaf className="text-primary-600 text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Natural Surroundings</h3>
              <p className="text-gray-600">Immerse yourself in the beautiful natural environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Farmhouse Details */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Aarohi Farm Details</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-96">
                <Image
                  src="/images/farmhouse/3.jpg"
                  alt="Aarohi Farm"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">2 BHK Farmhouse</h3>
              <p className="text-gray-700 mb-6">
                Aarohi Farm is a beautiful 2 BHK farmhouse nestled in the countryside, offering a perfect escape from the hustle and bustle of city life. Surrounded by lush greenery and natural beauty, it provides a serene environment for relaxation and rejuvenation.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                    <FaSwimmingPool className="text-primary-600" />
                  </div>
                  <span className="text-gray-700">Private swimming pool for guests</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                    <FaUtensils className="text-primary-600" />
                  </div>
                  <span className="text-gray-700">Optional food service available</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                    <FaGamepad className="text-primary-600" />
                  </div>
                  <span className="text-gray-700">Indoor and outdoor games for entertainment</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                    <FaFire className="text-primary-600" />
                  </div>
                  <span className="text-gray-700">Bonfire arrangement on request</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="bg-primary-50 p-4 rounded-lg border border-primary-100 flex-1">
                  <h4 className="font-bold text-primary-700 mb-1">With Food Package</h4>
                  <p className="text-3xl font-bold text-primary-600 mb-1">₹2,000</p>
                  <p className="text-gray-600">per person</p>
                </div>
                
                <div className="bg-primary-50 p-4 rounded-lg border border-primary-100 flex-1">
                  <h4 className="font-bold text-primary-700 mb-1">Without Food Package</h4>
                  <p className="text-3xl font-bold text-primary-600 mb-1">₹1,500</p>
                  <p className="text-gray-600">per person</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Gallery</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/farmhouse/4.jpg"
                alt="Aarohi Farm Living Room"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/farmhouse/5.jpg"
                alt="Aarohi Farm Bedroom"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/farmhouse/6.jpg"
                alt="Aarohi Farm Swimming Pool"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/farmhouse/7.jpg"
                alt="Aarohi Farm Surroundings"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/farmhouse/8.jpg"
                alt="Aarohi Farm Dining Area"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/farmhouse/9.jpg"
                alt="Aarohi Farm Garden"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What Our Guests Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/images/farmhouse/21.jpg"
                    alt="Sarah Johnson"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-gray-600 text-sm">Visited in June 2023</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"Our stay at Aarohi Farm was absolutely magical. The farmhouse was beautifully maintained, and the swimming pool was a hit with the kids. The food was delicious and the bonfire evening was unforgettable."</p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/images/farmhouse/22.jpg"
                    alt="Michael Thompson"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Michael Thompson</h4>
                  <p className="text-gray-600 text-sm">Visited in August 2023</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"Perfect weekend getaway! The 2 BHK farmhouse was spacious and comfortable. We enjoyed the indoor and outdoor games, and the natural surroundings were breathtaking. Will definitely come back!"</p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/images/farmhouse/23.jpg"
                    alt="Emily Rodriguez"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Emily Rodriguez</h4>
                  <p className="text-gray-600 text-sm">Visited in September 2023</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"We opted for the package with food and it was worth every penny! The meals were delicious and the staff was very attentive. The farmhouse is surrounded by beautiful nature, perfect for relaxation."</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Countryside Escape?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book your stay at Aarohi Farm today and create memories that will last a lifetime.
          </p>
          <Link href="/booking" className="btn bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-3">
            Book Now
          </Link>
        </div>
      </section>
    </div>
  )
} 