'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { FaSwimmingPool, FaUtensils, FaGamepad, FaFire, FaStar, FaWhatsapp } from 'react-icons/fa'

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-cream selection:bg-primary-900 selection:text-cream">
      
      {/* Premium Hero Section */}
      <section ref={containerRef} className="relative h-[100vh] flex flex-col justify-center items-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <Image
            src="/images/farmhouse/1.jpg"
            alt="Aarohi Farm - Beautiful Farmhouse"
            fill
            className="object-cover object-center brightness-[0.65] scale-105"
            priority
            quality={100}
          />
          {/* Subtle noise overlay for texture */}
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80"></div>
        </motion.div>
        
        <motion.div 
          className="container-custom relative z-10 text-center text-white mt-12"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 hover:bg-white/20 transition-colors cursor-pointer">
            <FaStar className="text-accent-400" />
            <span className="text-sm font-medium tracking-widest uppercase">4.9 Superhost · 200+ Reviews</span>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="overflow-hidden mb-6">
            <h1 className="text-7xl md:text-[10rem] font-bold drop-shadow-2xl text-white tracking-tighter leading-none font-serif">
              Aarohi<br className="md:hidden"/> Farm
            </h1>
          </motion.div>
          
          <motion.p variants={fadeInUp} className="text-xl md:text-3xl font-light mb-12 drop-shadow-md max-w-3xl mx-auto text-gray-200 font-serif italic">
            Your private countryside sanctuary. Experience luxury wrapped in nature.
          </motion.p>
          
          <motion.div variants={fadeInUp}>
            <Link href="#gallery" className="bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest transition-colors inline-block mt-4">
              Explore the Estate
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Bento Box Gallery Section */}
      <section id="gallery" className="py-32 bg-cream">
        <div className="container-custom">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-bold text-primary-950 mb-6 leading-tight tracking-tighter">A Glimpse of<br/><span className="text-accent-500 italic font-serif">Paradise</span></h2>
              <p className="text-gray-600 text-xl font-light">Explore our carefully curated spaces designed for perfect harmony with the surrounding landscape.</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Link href="/gallery" className="inline-flex items-center gap-2 text-primary-800 font-bold text-sm uppercase tracking-widest hover:text-accent-500 transition-colors group">
                View full gallery 
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-12 gap-4 h-[800px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Large Feature Image */}
            <motion.div variants={fadeInUp} className="md:col-span-8 md:row-span-2 relative group rounded-[2rem] overflow-hidden cursor-pointer">
              <Image src="/images/farmhouse/21.jpg" alt="Exterior" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <p className="text-sm font-bold tracking-widest uppercase mb-2">The Estate</p>
                <p className="text-2xl font-serif">Breathtaking Architecture</p>
              </div>
            </motion.div>
            
            {/* Top Right */}
            <motion.div variants={fadeInUp} className="md:col-span-4 relative group rounded-[2rem] overflow-hidden cursor-pointer">
              <Image src="/images/farmhouse/4.jpg" alt="Pool" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500"></div>
            </motion.div>
            
            {/* Bottom Right Split */}
            <motion.div variants={fadeInUp} className="md:col-span-2 relative group rounded-[2rem] overflow-hidden cursor-pointer">
              <Image src="/images/farmhouse/3.jpg" alt="Bedroom" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </motion.div>
            
            <motion.div variants={fadeInUp} className="md:col-span-2 relative group rounded-[2rem] overflow-hidden cursor-pointer">
              <Image src="/images/farmhouse/19.jpg" alt="Night View" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <Link href="/gallery" className="absolute inset-0 bg-primary-900/80 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">
                <span className="text-sm font-bold uppercase tracking-widest">See More</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Editorial Amenities Section */}
      <section className="py-32 bg-primary-950 text-cream selection:bg-accent-500 selection:text-white">
        <div className="container-custom">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-start gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="md:w-1/3 sticky top-32">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-cream tracking-tighter">Unmatched<br/><span className="text-accent-500 italic font-serif">Amenities</span></h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
                Everything you need for a luxurious, worry-free stay wrapped in nature. We've thought of every detail so you don't have to.
              </p>
              <Link href="/amenities" className="inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-white group">
                <span className="w-12 h-px bg-accent-500 group-hover:w-20 transition-all duration-300"></span>
                Discover More
              </Link>
            </motion.div>
            
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {[
                { image: "/images/farmhouse/4.jpg", icon: FaSwimmingPool, title: "Private Pool", desc: "Crystal clear waters exclusively for your group, heated for year-round enjoyment." },
                { image: "/images/farmhouse/8.jpg", icon: FaUtensils, title: "Farm to Table", desc: "Gourmet meals prepared by our in-house chef using ingredients grown on the estate." },
                { image: "/images/farmhouse/14.jpg", icon: FaGamepad, title: "Entertainment", desc: "A curated selection of indoor & outdoor games, plus a private screening room." },
                { image: "/images/farmhouse/19.jpg", icon: FaFire, title: "Evening Bonfire", desc: "Cozy up under the starlit countryside sky with complimentary marshmallows and hot cocoa." }
              ].map((feature, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="group cursor-pointer">
                  <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-8">
                    <Image src={feature.image} alt={feature.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full border border-white/50 bg-black/30 backdrop-blur-md flex items-center justify-center">
                      <feature.icon className="text-xl text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight">{feature.title}</h3>
                  <p className="text-gray-400 font-light leading-relaxed group-hover:text-gray-300 transition-colors">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-accent-500 text-primary-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-accent-600 to-accent-400"></div>
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter">Discover the beauty.</h2>
            <p className="text-xl md:text-2xl mb-12 text-primary-900/80 max-w-2xl mx-auto font-light">
              Immerse yourself in our full portfolio or reach out to us with any inquiries.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/gallery" className="bg-primary-950 text-white hover:bg-primary-900 px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest transition-colors w-full sm:w-auto">
                View Full Gallery
              </Link>
              <span className="font-serif italic text-lg">or</span>
              <a href="https://wa.me/918983222505" target="_blank" rel="noreferrer" className="bg-transparent border border-primary-950 hover:bg-primary-950/5 text-primary-950 px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-3 w-full sm:w-auto">
                <FaWhatsapp className="text-xl" /> Chat with Sanjay
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}