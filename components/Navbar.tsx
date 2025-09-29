import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image' // Agrega esta línea al inicio


export default function Navbar() {
  const router = useRouter()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'Studio' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray/30"
    >
      <div className="container-custom py-0">
        <div className="flex justify-between items-center">
          
          <Link href="/" className="flex items-center">
            <Image
              src="/El texto del párrafo-Photoroom.png"
              alt="ArchLine Logo"
              width={100}
              height={100}
              className="mr-3"
            />
            <span className="font-display text-3xl font-bold text-primary tracking-tight">
              ArchLine
            </span>
          </Link>
          
            <div className="hidden md:flex space-x-12">
    {navItems.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        className={`text-sm font-medium transition-all duration-300 hover:text-accent focus-visible tracking-wide ${
          router.pathname === item.href ? 'text-accent' : 'text-primary'
        }`}
      >
        {item.label}
      </Link>
    ))}
  </div>
          
          <div className="md:hidden">
            <button
              className="p-2 text-primary hover:text-accent focus-visible transition-colors"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}