import Image from 'next/image'
import Link from 'next/link'
import { 
  FaSwimmingPool, 
  FaUtensils, 
  FaGamepad, 
  FaFire, 
  FaWifi, 
  FaParking, 
  FaTv, 
  FaSnowflake, 
  FaShower, 
  FaBed, 
  FaChair, 
  FaLeaf 
} from 'react-icons/fa'

const amenities = [
  {
    id: 'accommodation',
    title: 'Accommodation',
    description: 'Our 2 BHK farmhouse offers comfortable and spacious accommodation for up to 8 guests.',
    items: [
      { icon: <FaBed />, name: '2 Bedrooms with comfortable beds' },
      { icon: <FaShower />, name: 'Clean and modern bathrooms' },
      { icon: <FaChair />, name: 'Spacious living room with comfortable seating' },
      { icon: <FaSnowflake />, name: 'Air conditioning in all rooms' },
      { icon: <FaTv />, name: 'TV with satellite channels' },
      { icon: <FaWifi />, name: 'Free high-speed WiFi' }
    ],
    image: '/images/farmhouse/3.jpg'
  },
  {
    id: 'recreation',
    title: 'Recreation',
    description: 'Enjoy a variety of recreational activities during your stay at Aarohi Farm.',
    items: [
      { icon: <FaSwimmingPool />, name: 'Private swimming pool' },
      { icon: <FaGamepad />, name: 'Indoor games (Carrom, Chess, Cards)' },
      { icon: <FaGamepad />, name: 'Outdoor games (Badminton, Cricket)' },
      { icon: <FaFire />, name: 'Bonfire arrangement on request' },
      { icon: <FaLeaf />, name: 'Garden area for relaxation' },
      { icon: <FaLeaf />, name: 'Nature walks in the surrounding area' }
    ],
    image: '/images/farmhouse/4.jpg'
  },
  {
    id: 'dining',
    title: 'Dining',
    description: 'Choose between our food package or self-catering options for your meals.',
    items: [
      { icon: <FaUtensils />, name: 'Option with food (₹2,600 per person)' },
      { icon: <FaUtensils />, name: 'Option without food (₹1,600 per person)' },
      { icon: <FaUtensils />, name: 'Fully equipped kitchen for self-catering' },
      { icon: <FaUtensils />, name: 'Dining area with table and chairs' },
      { icon: <FaUtensils />, name: 'Outdoor dining option available' },
      { icon: <FaUtensils />, name: 'Special meal requests can be accommodated' }
    ],
    image: '/images/farmhouse/8.jpg'
  },
  {
    id: 'other',
    title: 'Other Amenities',
    description: 'Additional amenities to make your stay comfortable and convenient.',
    items: [
      { icon: <FaParking />, name: 'Free parking on premises' },
      { icon: <FaWifi />, name: 'High-speed internet throughout the property' },
      { icon: <FaLeaf />, name: 'Beautiful natural surroundings' },
      { icon: <FaLeaf />, name: 'Peaceful and quiet environment' },
      { icon: <FaUtensils />, name: 'Barbecue facilities available' },
      { icon: <FaSnowflake />, name: 'Power backup' }
    ],
    image: '/images/farmhouse/1.jpg'
  }
]

const AmenitiesPage = () => {
  return (
    <div className="py-12">
      <div className="container-custom">
        <h1 className="text-4xl font-bold mb-2 text-center">Amenities at Aarohi Farm</h1>
        <p className="text-xl text-gray-600 mb-12 text-center">Everything you need for a comfortable and enjoyable stay</p>
        
        {/* Quick Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {amenities.map(section => (
            <a 
              key={section.id}
              href={`#${section.id}`}
              className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full hover:bg-primary-100 transition-colors"
            >
              {section.title}
            </a>
          ))}
        </div>
        
        {/* Amenities Sections */}
        <div className="space-y-20">
          {amenities.map((section, index) => (
            <section 
              key={section.id} 
              id={section.id}
              className={`scroll-mt-24 ${index % 2 === 0 ? '' : 'bg-gray-50 py-12 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 rounded-xl'}`}
            >
              <div className={`grid grid-cols-1 ${index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2 lg:flex-row-reverse'} gap-12 items-center`}>
                <div className={index % 2 === 0 ? 'order-2 lg:order-1' : 'order-2'}>
                  <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
                  <p className="text-gray-600 mb-8">{section.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {section.items.map((item, i) => (
                      <div key={i} className="flex items-start">
                        <div className="bg-primary-100 p-2 rounded-full mr-3 text-primary-600 mt-1">
                          {item.icon}
                        </div>
                        <span className="text-gray-700">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className={index % 2 === 0 ? 'order-1 lg:order-2' : 'order-1'}>
                  <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-20 bg-primary-900 text-white p-12 rounded-3xl text-center shadow-xl">
          <h2 className="text-4xl font-bold mb-4 font-serif">Ready to Experience Aarohi Farm?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto font-light text-primary-100">
            Explore our full gallery to see more of these luxurious amenities in detail, or contact us directly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/gallery" className="bg-accent-500 hover:bg-accent-600 text-white font-bold uppercase tracking-widest text-sm px-10 py-5 rounded-full transition-colors">
              View Full Gallery
            </Link>
            <Link href="/contact" className="bg-transparent border border-white hover:bg-white/10 text-white font-bold uppercase tracking-widest text-sm px-10 py-5 rounded-full transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AmenitiesPage 