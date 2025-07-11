'use client';
import { useState } from 'react';

export default function ContactSection() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setSent(false);
    await new Promise((res) => setTimeout(res, 2000));
    setSending(false);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="contact py-20 bg-secondary/80" id="contact">
      <div className="container max-w-4xl mx-auto">
        <h2 className="section-title text-3xl font-bold mb-8 text-center">Contact Me</h2>
        <div className="contact-container flex flex-col md:flex-row gap-8">
          <div className="contact-info flex-1 flex flex-col gap-6">
            <div className="contact-card bg-card-bg rounded-lg p-6 flex items-center gap-4">
              <div className="contact-icon text-2xl text-primary"><i className="fas fa-envelope" /></div>
              <div className="contact-details">
                <h3 className="font-bold">Email</h3>
                <p>mohamedasif7799@gmail.com</p>
              </div>
            </div>
            <div className="contact-card bg-card-bg rounded-lg p-6 flex items-center gap-4">
              <div className="contact-icon text-2xl text-primary"><i className="fas fa-phone" /></div>
              <div className="contact-details">
                <h3 className="font-bold">Phone</h3>
                <p>+91 9344058212</p>
              </div>
            </div>
          </div>
          <div className="contact-form flex-1">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-4">
                <input type="text" id="name" required className="w-full p-3 rounded bg-gray-800 text-white" />
                <label htmlFor="name" className="block mt-2 text-gray-400">Your Name</label>
              </div>
              <div className="form-group mb-4">
                <input type="email" id="email" required className="w-full p-3 rounded bg-gray-800 text-white" />
                <label htmlFor="email" className="block mt-2 text-gray-400">Your Email</label>
              </div>
              <div className="form-group mb-4">
                <textarea id="message" required className="w-full p-3 rounded bg-gray-800 text-white" />
                <label htmlFor="message" className="block mt-2 text-gray-400">Your Message</label>
              </div>
              <button type="submit" className="submit-btn bg-primary text-bg px-6 py-3 rounded font-bold flex items-center gap-2" disabled={sending}>
                <i className="fas fa-paper-plane" />
                {sending ? 'Sending...' : sent ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
        <div className="social-links flex gap-6 justify-center mt-8">
          <a href="https://github.com/MohamedAsif07" target="_blank" className="social-btn flex items-center gap-2 text-xl text-primary hover:underline">
            <i className="fab fa-github" /> <span className="tooltip">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/mohamed-asif-8a0a81294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="social-btn flex items-center gap-2 text-xl text-primary hover:underline">
            <i className="fab fa-linkedin" /> <span className="tooltip">LinkedIn</span>
          </a>
          <a href="https://www.instagram.com/mr_mohamed_asif?igsh=MTJwcTVoajB5OHkyZQ==" target="_blank" className="social-btn flex items-center gap-2 text-xl text-primary hover:underline">
            <i className="fab fa-instagram" /> <span className="tooltip">Instagram</span>
          </a>
          <a href="https://www.facebook.com/share/1E3EAonjG4/" target="_blank" className="social-btn flex items-center gap-2 text-xl text-primary hover:underline">
            <i className="fab fa-facebook" /> <span className="tooltip">Facebook</span>
          </a>
        </div>
      </div>
    </section>
  );
} 