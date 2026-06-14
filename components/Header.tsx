'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-10 h-10 mr-2 transform group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/logo.svg"
                alt="Aarohi Farm Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="text-xl font-serif font-bold text-primary-900 group-hover:text-primary-700 transition-colors">Aarohi Farm</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link href="/" className="text-sm font-bold uppercase tracking-widest text-gray-700 hover:text-accent-500 transition-colors">
              Home
            </Link>
            <Link href="/gallery" className="text-sm font-bold uppercase tracking-widest text-gray-700 hover:text-accent-500 transition-colors">
              Gallery
            </Link>
            <Link href="/amenities" className="text-sm font-bold uppercase tracking-widest text-gray-700 hover:text-accent-500 transition-colors">
              Amenities
            </Link>
            <Link href="/contact" className="text-sm font-bold uppercase tracking-widest text-gray-700 hover:text-accent-500 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-900 focus:outline-none hover:text-accent-500 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-gray-100 pt-6">
            <nav className="flex flex-col space-y-6 text-center">
              <Link
                href="/"
                className="text-lg font-bold uppercase tracking-widest text-gray-700 hover:text-accent-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/gallery"
                className="text-lg font-bold uppercase tracking-widest text-gray-700 hover:text-accent-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/amenities"
                className="text-lg font-bold uppercase tracking-widest text-gray-700 hover:text-accent-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Amenities
              </Link>
              <Link
                href="/contact"
                className="text-lg font-bold uppercase tracking-widest text-gray-700 hover:text-accent-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header