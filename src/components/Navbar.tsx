import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Navbar() {
  return (
    <nav className="bg-white p-4 font-sans">
        <div className = "flex justify-center">
            <div className = "text-base flex space-x-12 font-medium text-gray-600">
                <Link href="/" className="border-b-2 border-transparent hover:text-black px-1 hover:border-gray-300 py-2 transition-colors">Home</Link>
                <Link href="/projects" className="border-b-2 border-transparent hover:text-black px-1 hover:border-gray-300 py-2 transition-colors">Projects</Link>
                <Link href="/contact" className="border-b-2 border-transparent hover:text-black px-1 hover:border-gray-300 py-2 transition-colors">Contact</Link>
            </div>
        </div>

        <div className = "right-4 top-4 absolute flex space-x-4">
            <Link href="https://github.com/Peterw135" className="text-gray-400 hover:text-black transition-colors">
                <FaGithub size={30}/>
            </Link>
            <Link href="https://linkedin.com/in/your-profile" className="text-gray-400 hover:text-black transition-colors">
                <FaLinkedin size={30}/>
            </Link>
        </div>
    </nav>
  )
} 