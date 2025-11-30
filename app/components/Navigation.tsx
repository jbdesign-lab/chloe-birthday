'use client'

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-4 left-4 right-4 z-50 md:left-8 md:right-8">
      <div className="bg-white/80 backdrop-blur-lg lg:rounded-full px-6 py-3 shadow-lg border border-white/30">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="festive-text text-xl font-bold text-red-600 hover:text-red-700 transition-colors"
          >
            🎄 Chloe's Birthday 🎂
          </Link>
          
          <div className="hidden md:flex items-center gap-4 text-sm">
            <Link 
              href="/gifts" 
              className="text-gray-600 hover:text-red-600 transition-colors font-medium"
            >
              🎁 Gifts
            </Link>
            <Link 
              href="/schedule" 
              className="text-gray-600 hover:text-red-600 transition-colors font-medium"
            >
              📅 Schedule
            </Link>
            <Link 
              href="/winter-wonderland" 
              className="text-gray-600 hover:text-red-600 transition-colors font-medium"
            >
              ❄️ Activities
            </Link>
          </div>

          <div className="md:hidden">
            <button 
              className="text-gray-600 hover:text-red-600 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
        
        {/* Mobile dropdown menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/gifts" 
                className="text-gray-600 hover:text-red-600 transition-colors font-medium text-center py-2"
                onClick={() => setIsOpen(false)}
              >
                🎁 Gifts
              </Link>
              <Link 
                href="/schedule" 
                className="text-gray-600 hover:text-red-600 transition-colors font-medium text-center py-2"
                onClick={() => setIsOpen(false)}
              >
                📅 Schedule
              </Link>
              <Link 
                href="/winter-wonderland" 
                className="text-gray-600 hover:text-red-600 transition-colors font-medium text-center py-2"
                onClick={() => setIsOpen(false)}
              >
                ❄️ Activities
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}