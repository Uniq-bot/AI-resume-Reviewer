import { Facebook, Linkedin, Twitter } from 'lucide-react';
import logo from '../assets/logo.png'
export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left Section - Logo and Links */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img src={logo} />
            </div>

            {/* Product Column */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Product</h3>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Affiliate
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Resources</h3>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Company
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Career
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Legal</h3>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section - Tagline and Social */}
          <div className="flex flex-col items-start md:items-end gap-6">
            <p className="text-slate-300 max-w-xs text-right">
              Making every customer feel valued—no matter the size of your audience.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-slate-200 transition-colors"
              >
                <Facebook className="w-5 h-5" fill="currentColor" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-slate-200 transition-colors"
              >
                <Linkedin className="w-5 h-5" fill="currentColor" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-slate-200 transition-colors"
              >
                <Twitter className="w-5 h-5" fill="currentColor" />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-slate-400 text-sm">© 2025 Resume Builder</p>
          </div>
        </div>
      </div>
    </footer>
  );
}