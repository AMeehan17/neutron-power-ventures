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
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-neutral-green"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-neutral-green"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-neutral-green"
        ></textarea>
      </div>
      {message && (
        <div className={`p-4 rounded-lg ${
          status === 'success' ? 'bg-neutral-green/20 text-neutral-green' :
          status === 'error' ? 'bg-red-500/20 text-red-500' :
          'bg-neutral-violet/20 text-neutral-violet'
        }`}>
          {message}
        </div>
      )}
      <button
        type="submit"
        disabled={status === 'loading'}
        className={`w-full bg-neutral-green text-neutral-black font-semibold py-3 rounded-lg transition-colors ${
          status === 'loading' ? 'opacity-50 cursor-not-allowed' : 'hover:bg-neutral-green/90'
        }`}
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
} 