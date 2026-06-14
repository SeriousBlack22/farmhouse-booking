'use client'

import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser, FaPaperPlane } from 'react-icons/fa'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <div className="py-12">
      <div className="container-custom">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md h-full">
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our farmhouses or need assistance with your booking? 
                Our team is here to help you find the perfect countryside retreat.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-gray-600">info@aarohifarm.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <FaPhone className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="text-gray-600"><a href="tel:+918983222505" className="hover:text-primary-600 transition-colors">+91 89832 22505 (Sanjay Jadhav)</a></p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">Address</h3>
                    <p className="text-gray-600">
                      <a href="https://maps.app.goo.gl/uSJE2GX6zojaRwkU7" target="_blank" rel="noreferrer" className="hover:text-primary-600 transition-colors">
                        Aarohi farm house, Plot 27/B<br />
                        Shenve Road, off Dolkhamb, Sector 2<br />
                        Ranvihir, Tal- Shahapur, Dist- Thane<br />
                        Maharashtra 421601
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-bold mb-4">Office Hours</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-md">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="bg-primary-100 p-4 rounded-full inline-block mb-4">
                    <FaPaperPlane className="text-primary-600 text-3xl" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
                  <p className="text-gray-600 mb-6">
                    Thank you for contacting us. We'll get back to you as soon as possible.
                  </p>
                  <button 
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({
                        name: '',
                        email: '',
                        subject: '',
                        message: ''
                      })
                    }}
                    className="btn btn-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaUser className="text-gray-400" />
                        </div>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          className="input pl-10"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaEnvelope className="text-gray-400" />
                        </div>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="input pl-10"
                          placeholder="you@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="input"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="booking">Booking Inquiry</option>
                        <option value="property">Property Information</option>
                        <option value="cancellation">Cancellation</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="input"
                        placeholder="How can we help you?"
                        required
                      ></textarea>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        id="privacy"
                        type="checkbox"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        required
                      />
                      <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                        I agree to the privacy policy and consent to being contacted regarding my inquiry.
                      </label>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        className="btn btn-primary w-full flex justify-center items-center"
                        disabled={loading}
                      >
                        {loading ? 'Sending...' : 'Send Message'}
                        {!loading && <FaPaperPlane className="ml-2" />}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
        
        {/* Map */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Find Us</h2>
          <div className="h-[400px] rounded-lg overflow-hidden relative shadow-lg">
            <iframe 
              src="https://maps.google.com/maps?q=Aarohi+farm+house,+Ranvihir,+Maharashtra+421601&t=&z=13&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage 