import Link from 'next/link';
import ContactForm from './components/ContactForm';
import GoogleAnalytics from './components/GoogleAnalytics';

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-black text-white">
      <GoogleAnalytics />
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-black to-neutral-violet/20 z-0" />
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-neutral-violet">Neutron</span>{' '}
            <span className="text-neutral-green">Power</span>{' '}
            <span className="text-white">Ventures</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Powering the future through strategic investments in nuclear technology
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="#contact"
              className="bg-neutral-violet hover:bg-neutral-violet/90 text-white px-8 py-3 rounded-full transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="https://calendly.com/andrewmeehan17"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-green hover:bg-neutral-green/90 text-neutral-black px-8 py-3 rounded-full transition-colors font-semibold"
            >
              Schedule a Meeting
            </Link>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 bg-neutral-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-center">
            At Neutron Power Ventures, we&apos;re committed to accelerating the development of nuclear technology 
            that will power our future. We invest in innovative companies that are pushing the boundaries 
            of what&apos;s possible in nuclear energy, from advanced reactors to fusion technology.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-neutral-violet/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Get in Touch</h2>
          <div className="max-w-xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-neutral-black border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <div className="space-y-2">
                <p>
                  <a href="mailto:andrewmeehan17@gmail.com" className="hover:text-neutral-green transition-colors">
                    andrewmeehan17@gmail.com
                  </a>
                </p>
                <p>
                  <a href="tel:+12055686657" className="hover:text-neutral-green transition-colors">
                    +1 (205) 568-6657
                  </a>
                </p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <p>
                  <Link href="#contact" className="hover:text-neutral-green transition-colors">
                    Contact Us
                  </Link>
                </p>
                <p>
                  <Link href="https://calendly.com/andrewmeehan17" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-green transition-colors">
                    Schedule a Meeting
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm">
            <p>© {new Date().getFullYear()} Neutron Power Ventures. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
