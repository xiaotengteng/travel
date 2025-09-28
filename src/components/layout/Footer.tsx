import Link from "next/link";
import { Phone, Mail, MapPin, Car, Compass, Users, Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-full">
                <span className="text-white font-bold">BTS</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Baba Travel Solution</h3>
                <p className="text-sm text-green-400">Your Trusted Travel Partner</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional tourism, car rental, and tour guide services with a commitment to reliability, safety, and local expertise.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <Compass className="h-4 w-4 text-green-400" />
                <span>Tourism Planning</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <Car className="h-4 w-4 text-green-400" />
                <span>Car Rental Services</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <Users className="h-4 w-4 text-green-400" />
                <span>Professional Tour Guides</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-green-400 mt-1" />
                <span className="text-gray-300">6371286189</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-green-400 mt-1" />
                <span className="text-gray-300">madhusudan3620@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-green-400 mt-1" />
                <span className="text-gray-300">
                  NEAR CHAITANYA MATHA, NH-16, BARUNEI CHHAK, KHORDHA
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 mb-6">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>

            {/* Social Media Links */}
            <div>
              <h5 className="text-md font-semibold mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                <a
                  href="https://facebook.com/babatravelsolution"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors duration-300"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-4 w-4 text-white" />
                </a>
                <a
                  href="https://instagram.com/babatravelsolution"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-600 hover:bg-pink-700 p-2 rounded-full transition-colors duration-300"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-4 w-4 text-white" />
                </a>
                <a
                  href="https://twitter.com/babatravelsol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sky-500 hover:bg-sky-600 p-2 rounded-full transition-colors duration-300"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter className="h-4 w-4 text-white" />
                </a>
                <a
                  href="https://youtube.com/@babatravelsolution"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 p-2 rounded-full transition-colors duration-300"
                  aria-label="Subscribe to our YouTube channel"
                >
                  <Youtube className="h-4 w-4 text-white" />
                </a>
                <a
                  href="https://linkedin.com/company/babatravelsolution"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-700 hover:bg-blue-800 p-2 rounded-full transition-colors duration-300"
                  aria-label="Connect with us on LinkedIn"
                >
                  <Linkedin className="h-4 w-4 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-blue-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2025 Baba Travel Solution. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/refund" className="text-gray-300 hover:text-white transition-colors">
                Refund Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
