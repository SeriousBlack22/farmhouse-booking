import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Aarohi Farm</h3>
            <p className="text-gray-400 mb-4">
              Experience the perfect countryside getaway in our beautiful 2 BHK farmhouse surrounded by nature, with swimming pool and various indoor & outdoor activities.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaFacebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaInstagram size={20} />
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-white">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/amenities" className="text-gray-400 hover:text-white">
                  Amenities
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-400 hover:text-white">
                  Book Now
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-primary-400 mt-1 mr-3" />
                <span className="text-gray-400">123 Nature Valley, Countryside Area, Near City, State - 123456</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-primary-400 mr-3" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-white">+91 98765 43210</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-primary-400 mr-3" />
                <a href="mailto:info@aarohifarm.com" className="text-gray-400 hover:text-white">info@aarohifarm.com</a>
              </li>
            </ul>
          </div>

          {/* Booking Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Booking Information</h3>
            <div className="space-y-3 text-gray-400">
              <p><span className="font-bold">Check-in:</span> 12:00 PM</p>
              <p><span className="font-bold">Check-out:</span> 11:00 AM</p>
              <p><span className="font-bold">With Food:</span> ₹2,000 per person</p>
              <p><span className="font-bold">Without Food:</span> ₹1,500 per person</p>
              <Link href="/booking" className="btn btn-primary mt-2 inline-block">
                Book Now
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Aarohi Farm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 