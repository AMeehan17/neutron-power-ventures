'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg hover:bg-white/5 transition-colors"
        aria-label="Toggle menu"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-neutral-black/95 backdrop-blur-lg z-50 transform transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          
          <nav className="flex-1 flex flex-col items-center justify-center space-y-8">
            <Link
              href="#mission"
              onClick={() => setIsOpen(false)}
              className="text-2xl font-medium hover:text-neutral-green transition-colors transform hover:scale-105"
            >
              Mission
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-2xl font-medium hover:text-neutral-green transition-colors transform hover:scale-105"
            >
              Contact
            </Link>
            <Link
              href="https://calendly.com/andrewmeehan17"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="bg-neutral-green text-neutral-black px-6 py-3 rounded-full hover:bg-neutral-green/90 transition-all transform hover:scale-105 font-medium text-lg relative overflow-hidden group"
            >
              <span className="relative z-10">Schedule Meeting</span>
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-green to-neutral-violet opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
} 