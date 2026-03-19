import React, { useRef, useState, useEffect } from 'react';
import { sendForm } from '@emailjs/browser';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const botFieldRef = useRef<HTMLInputElement>(null);

  const [formState, setFormState] = useState<FormState>('idle');

  // Anti-spam
  const [formLoadedAt, setFormLoadedAt] = useState<number>(Date.now());
  const [honeypotName, setHoneypotName] = useState<string>('website');
  const [lastSubmitTime, setLastSubmitTime] = useState<number>(0);

  useEffect(() => {
    setFormLoadedAt(Date.now());
    const randomName = `field_${Math.random().toString(36).substring(2, 10)}`;
    setHoneypotName(randomName);
  }, []);

  // ENV (Vite)
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const now = Date.now();

    // Honeypot
    if (botFieldRef.current?.value) {
      setFormState('success');
      return;
    }

    // Speed check
    if (now - formLoadedAt < 1500) {
      setFormState('error');
      return;
    }

    // Rate limit
    if (now - lastSubmitTime < 10000) {
      setFormState('error');
      return;
    }

    setLastSubmitTime(now);
    setFormState('loading');

    try {
      await sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );
      setFormState('success');
      formRef.current.reset();
    } catch {
      setFormState('error');
    }
  };

  return (
    <section
      id="contact"
      className="grid grid-cols-12 min-h-[50vh] grid-border-b"
      aria-labelledby="contact-heading"
    >
      <div className="col-span-12 md:col-span-6 p-8 md:p-16 md:grid-border-r flex flex-col justify-between">
        <div>
          <h2
            id="contact-heading"
            className="text-5xl md:text-7xl font-semibold tracking-tighter mb-6 text-neutral-900 dark:text-neutral-100"
          >
            Contact Me
          </h2>
          <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 font-medium max-w-sm">
            Feel free to reach out for opportunities, collaborations, or questions. Let&apos;s
            build something exceptional.
          </p>
        </div>

        <div className="mt-16 space-y-4">
          {/* email button intentionally unchanged */}
        </div>
      </div>

      <div className="col-span-12 md:col-span-6 p-8 md:p-16 flex items-center">
        {formState === 'success' ? (
          <div className="w-full max-w-md flex flex-col gap-4">
            <iconify-icon icon="solar:check-circle-linear" className="text-5xl text-neutral-900 dark:text-neutral-100" aria-hidden="true"></iconify-icon>
            <h3 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">Message sent!</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
              Thanks for reaching out. I'll get back to you as soon as possible.
            </p>
            <button
              onClick={() => setFormState('idle')}
              className="text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 rounded-sm"
            >
              Send another message →
            </button>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="w-full max-w-md space-y-10 relative" aria-label="Contact Form">
            
            {/* Honeypot (invisible, no layout impact) */}
            <div
              className="absolute left-[-9999px] top-[-9999px] opacity-0"
              aria-hidden="true"
            >
              <label htmlFor={honeypotName}>Leave this field blank</label>
              <input
                ref={botFieldRef}
                type="text"
                id={honeypotName}
                name={honeypotName}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                placeholder=" "
                className="w-full bg-transparent border-b border-neutral-300 dark:border-neutral-800 py-3 text-sm text-neutral-900 dark:text-neutral-200 focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-300 transition-colors peer"
                required
                autoComplete="name"
                disabled={formState === 'loading'}
              />
              <label
                htmlFor="name"
                className="absolute left-0 top-3 text-sm font-medium tracking-tight text-neutral-500 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-neutral-900 dark:peer-focus:text-neutral-400 peer-valid:-top-4 peer-valid:text-xs peer-valid:text-neutral-900 dark:peer-valid:text-neutral-400 cursor-text"
              >
                Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                placeholder=" "
                className="w-full bg-transparent border-b border-neutral-300 dark:border-neutral-800 py-3 text-sm text-neutral-900 dark:text-neutral-200 focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-300 transition-colors peer"
                required
                autoComplete="email"
                disabled={formState === 'loading'}
              />
              <label
                htmlFor="email"
                className="absolute left-0 top-3 text-sm font-medium tracking-tight text-neutral-500 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-neutral-900 dark:peer-focus:text-neutral-400 peer-valid:-top-4 peer-valid:text-xs peer-valid:text-neutral-900 dark:peer-valid:text-neutral-400 cursor-text"
              >
                Email Address
              </label>
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder=" "
                className="w-full bg-transparent border-b border-neutral-300 dark:border-neutral-800 py-3 text-sm text-neutral-900 dark:text-neutral-200 focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-300 transition-colors peer resize-none"
                required
                disabled={formState === 'loading'}
              />
              <label
                htmlFor="message"
                className="absolute left-0 top-3 text-sm font-medium tracking-tight text-neutral-500 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-neutral-900 dark:peer-focus:text-neutral-400 peer-valid:-top-4 peer-valid:text-xs peer-valid:text-neutral-900 dark:peer-valid:text-neutral-400 cursor-text"
              >
                Message
              </label>
            </div>

            {formState === 'error' && (
              <p className="text-sm font-medium text-red-500" role="alert">
                Something went wrong. Please try again or email me directly.
              </p>
            )}

            <button
              type="submit"
              disabled={formState === 'loading'}
              className="w-full py-4 bg-neutral-900 text-neutral-50 dark:bg-neutral-100 dark:text-neutral-950 text-sm font-semibold tracking-tight rounded-sm hover:bg-neutral-800 dark:hover:bg-neutral-300 transition-colors flex justify-center items-center gap-2 mt-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-950 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formState === 'loading' ? 'Sending...' : 'Send Message'}
              {formState !== 'loading' && (
                <iconify-icon icon="solar:plain-linear" aria-hidden="true"></iconify-icon>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};