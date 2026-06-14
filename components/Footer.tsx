import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <a href="https://wa.me/918983222505" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
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
                <a href="https://maps.app.goo.gl/uSJE2GX6zojaRwkU7" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">Aarohi farm house, Plot 27/B, Shenve Road, off Dolkhamb, Sector 2, Ranvihir, Tal- Shahapur, Dist- Thane, Maharashtra 421601</a>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-primary-400 mr-3" />
                <a href="tel:+918983222505" className="text-gray-400 hover:text-white">+91 89832 22505 (Sanjay Jadhav)</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-primary-400 mr-3" />
                <a href="mailto:info@aarohifarm.com" className="text-gray-400 hover:text-white">info@aarohifarm.com</a>
              </li>
            </ul>
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