import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="p-6 mt-8 bg-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-6">
        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook className="h-5 w-5 text-gray-600 hover:text-blue-600 transition-colors" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter className="h-5 w-5 text-gray-600 hover:text-blue-500 transition-colors" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram className="h-5 w-5 text-gray-600 hover:text-pink-500 transition-colors" />
          </a>
        </div>

        <div className="text-sm text-gray-600">
          <p className="flex items-center justify-center md:justify-start gap-2">
            <Mail className="h-4 w-4" /> contact@jobboard.com
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <Phone className="h-4 w-4" /> +91 99999 22222
          </p>
        </div>

    
      </div>
    </footer>
  );
}
