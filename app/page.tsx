import Link from 'next/link';
import ContactForm from './components/ContactForm';
import GoogleAnalytics from './components/GoogleAnalytics';
import MobileMenu from './components/MobileMenu';

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-black text-white">
      <GoogleAnalytics />
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-neutral-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold">
              <span className="text-neutral-violet">Neutron</span>{' '}
              <span className="text-neutral-green">Power</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#mission" className="hover:text-neutral-green transition-colors">
                Mission
              </Link>
              <Link href="#contact" className="hover:text-neutral-green transition-colors">
                Contact
              </Link>
              <Link
                href="https://calendly.com/andrewmeehan17"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-green text-neutral-black px-4 py-2 rounded-full hover:bg-neutral-green/90 transition-colors font-medium"
              >
                Schedule Meeting
              </Link>
            </div>
            <MobileMenu />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-black via-neutral-violet/10 to-neutral-green/5 z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(138,43,226,0.1)_0%,transparent_70%)] z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(57,255,20,0.05)_0%,transparent_70%)] z-0" />
        <div className="container mx-auto px-4 z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-4 bg-neutral-violet/20 blur-3xl rounded-full animate-pulse" />
              <h1 className="relative text-6xl md:text-8xl font-bold mb-8 leading-tight">
                <span className="text-neutral-violet animate-fade-in">Neutron</span>{' '}
                <span className="text-neutral-green animate-fade-in animation-delay-200">Power</span>{' '}
                <span className="text-white animate-fade-in animation-delay-400">Ventures</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-white/90 leading-relaxed animate-fade-in animation-delay-600">
              Powering the future through strategic investments in nuclear technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-800">
              <Link
                href="#contact"
                className="group bg-neutral-violet hover:bg-neutral-violet/90 text-white px-8 py-4 rounded-full transition-all transform hover:scale-105 font-medium text-lg relative overflow-hidden"
              >
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-violet to-neutral-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link
                href="https://calendly.com/andrewmeehan17"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-neutral-green hover:bg-neutral-green/90 text-neutral-black px-8 py-4 rounded-full transition-all transform hover:scale-105 font-medium text-lg relative overflow-hidden"
              >
                <span className="relative z-10">Schedule a Meeting</span>
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-green to-neutral-violet opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white/50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </header>

      {/* About Section */}
      <section id="mission" className="py-24 bg-neutral-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(57,255,20,0.05)_0%,transparent_70%)] z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-center text-white/90 leading-relaxed">
            At Neutron Power Ventures, we&apos;re committed to accelerating the development of nuclear technology 
            that will power our future. We invest in innovative companies that are pushing the boundaries 
            of what&apos;s possible in nuclear energy, from advanced reactors to fusion technology.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-neutral-violet/5 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(138,43,226,0.05)_0%,transparent_70%)] z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="max-w-xl mx-auto bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-neutral-black border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <p>
                  <a href="mailto:andrewmeehan17@gmail.com" className="hover:text-neutral-green transition-colors flex items-center justify-center md:justify-start gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    andrewmeehan17@gmail.com
                  </a>
                </p>
                <p>
                  <a href="tel:+12055686657" className="hover:text-neutral-green transition-colors flex items-center justify-center md:justify-start gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +1 (205) 568-6657
                  </a>
                </p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
              <div className="space-y-4">
                <p>
                  <Link href="#mission" className="hover:text-neutral-green transition-colors flex items-center justify-center md:justify-end gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Mission
                  </Link>
                </p>
                <p>
                  <Link href="#contact" className="hover:text-neutral-green transition-colors flex items-center justify-center md:justify-end gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact Us
                  </Link>
                </p>
                <p>
                  <Link href="https://calendly.com/andrewmeehan17" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-green transition-colors flex items-center justify-center md:justify-end gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Schedule a Meeting
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/60">
            <p>© {new Date().getFullYear()} Neutron Power Ventures. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
