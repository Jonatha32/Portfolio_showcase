import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-white section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16"
        >
          <div>
            <h3 className="font-display text-3xl font-bold mb-6 tracking-tight">ArchLine</h3>
            <p className="text-lg mb-4 font-medium tracking-wide">Designing spaces, shaping lives</p>
            <p className="text-neutral-300 leading-relaxed">
              We believe architecture has the power to transform not just spaces, 
              but the lives of those who inhabit them. Every line we draw, 
              every space we create, is a step toward a more beautiful world.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-bold mb-6 text-lg tracking-wide">Navigation</h4>
            <div className="space-y-3">
              <Link href="/" className="block text-neutral-300 hover:text-accent transition-colors duration-300 font-medium">
                Home
              </Link>
              <Link href="/projects" className="block text-neutral-300 hover:text-accent transition-colors duration-300 font-medium">
                Projects
              </Link>
              <Link href="/about" className="block text-neutral-300 hover:text-accent transition-colors duration-300 font-medium">
                Studio
              </Link>
              <Link href="/contact" className="block text-neutral-300 hover:text-accent transition-colors duration-300 font-medium">
                Contact
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-bold mb-6 text-lg tracking-wide">Connect</h4>
            <div className="space-y-3">
              <a href="#" className="block text-neutral-300 hover:text-accent transition-colors duration-300 font-medium">
                Instagram
              </a>
              <a href="#" className="block text-neutral-300 hover:text-accent transition-colors duration-300 font-medium">
                LinkedIn
              </a>
              <a href="#" className="block text-neutral-300 hover:text-accent transition-colors duration-300 font-medium">
                Behance
              </a>
            </div>
            <div className="mt-8">
              <p className="text-neutral-400 text-sm mb-2">Studio</p>
              <p className="text-neutral-300">Barcelona, Spain</p>
              <p className="text-neutral-300">hello@archline.studio</p>
            </div>
          </div>
        </motion.div>
        
        <div className="border-t border-neutral-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">&copy; 2024 ArchLine Studio. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-neutral-400 hover:text-accent transition-colors text-sm">Privacy</a>
            <a href="#" className="text-neutral-400 hover:text-accent transition-colors text-sm">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}