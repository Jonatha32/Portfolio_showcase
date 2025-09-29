import { motion } from 'framer-motion'
import { useState } from 'react'
import SiteMeta from '@/components/SiteMeta'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you soon.')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
      <SiteMeta 
        title="Contact - ArchLine Studio"
        description="Ready to transform your vision into reality? Let's create something extraordinary together."
      />
      
      <div className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="font-display text-6xl md:text-8xl font-bold text-primary mb-8 tracking-tight">
              Let's Create Together
            </h1>
            <div className="w-32 h-1 bg-accent mx-auto mb-12" />
            <p className="text-2xl md:text-3xl text-neutral-600 max-w-4xl mx-auto leading-relaxed font-light mb-8">
              Every extraordinary space begins with a conversation. 
              <span className="text-accent font-medium">Your vision, our expertise.</span>
            </p>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto leading-relaxed">
              Ready to transform your dreams into architectural reality? 
              We're here to listen, inspire, and create something truly exceptional.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-display text-3xl font-bold text-primary mb-10 tracking-tight">
                Connect With Us
              </h2>
              
              <div className="space-y-10">
                <div>
                  <h3 className="font-display font-bold mb-3 text-lg">Studio</h3>
                  <p className="text-neutral-700 text-lg leading-relaxed">
                    Passeig de Gràcia 123<br />
                    Barcelona, Spain 08008
                  </p>
                </div>
                
                <div>
                  <h3 className="font-display font-bold mb-3 text-lg">Contact</h3>
                  <p className="text-neutral-700 text-lg leading-relaxed">
                    +34 93 456 7890<br />
                    hello@archline.studio
                  </p>
                </div>
                
                <div>
                  <h3 className="font-display font-bold mb-3 text-lg">Studio Hours</h3>
                  <p className="text-neutral-700 text-lg leading-relaxed">
                    Monday - Friday: 9:00 - 19:00<br />
                    Saturday: By appointment
                  </p>
                </div>

                <div>
                  <h3 className="font-display font-bold mb-4 text-lg">Follow Our Journey</h3>
                  <div className="flex space-x-6">
                    <a href="#" className="text-neutral-700 hover:text-accent transition-colors font-medium">
                      Instagram
                    </a>
                    <a href="#" className="text-neutral-700 hover:text-accent transition-colors font-medium">
                      LinkedIn
                    </a>
                    <a href="#" className="text-neutral-700 hover:text-accent transition-colors font-medium">
                      Behance
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 focus:border-accent focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-neutral-300 focus:border-accent focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </>
  )
}