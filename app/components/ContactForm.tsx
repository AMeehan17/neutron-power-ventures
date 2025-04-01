'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Thank you for your message! We will get back to you soon.');
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch {
      setStatus('error');
      setMessage('Sorry, there was an error sending your message. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit} action="https://formspree.io/f/xpzvjvjv" method="POST" className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-white/90">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-neutral-green focus:ring-2 focus:ring-neutral-green/20 transition-all"
          placeholder="Your name"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-white/90">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-neutral-green focus:ring-2 focus:ring-neutral-green/20 transition-all"
          placeholder="your@email.com"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-white/90">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-neutral-green focus:ring-2 focus:ring-neutral-green/20 transition-all resize-none"
          placeholder="Your message..."
        ></textarea>
      </div>
      {message && (
        <div className={`p-4 rounded-lg transform transition-all duration-300 ${
          status === 'success' ? 'bg-neutral-green/10 text-neutral-green border border-neutral-green/20' :
          status === 'error' ? 'bg-red-500/10 text-red-500 border border-red-500/20' :
          'bg-neutral-violet/10 text-neutral-violet border border-neutral-violet/20'
        }`}>
          {message}
        </div>
      )}
      <button
        type="submit"
        disabled={status === 'loading'}
        className={`w-full bg-neutral-green text-neutral-black font-medium py-3 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] ${
          status === 'loading' ? 'opacity-50 cursor-not-allowed' : 'hover:bg-neutral-green/90'
        }`}
      >
        {status === 'loading' ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Sending...
          </span>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
} 