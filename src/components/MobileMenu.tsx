import { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';

const NAV_LINKS = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang Kami', href: '/tentang-kami' },
  { label: 'Layanan', href: '/layanan' },
  { label: 'Keanggotaan', href: '/keanggotaan' },
  { label: 'Berita', href: '/berita' },
  { label: 'Kontak', href: '/kontak' },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const openMenu = useCallback(() => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
    // Return focus to hamburger after closing
    setTimeout(() => hamburgerRef.current?.focus(), 50);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) closeMenu();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeMenu]);

  // Move focus into menu when it opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Focus trap
  const handleTabKey = useCallback((e: React.KeyboardEvent) => {
    if (!overlayRef.current) return;
    const focusable = overlayRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
  }, []);

  return (
    <>
      {/* Hamburger button — visible only on mobile (hidden at lg via CSS) */}
      <button
        ref={hamburgerRef}
        onClick={openMenu}
        aria-label="Buka menu navigasi"
        aria-expanded={isOpen}
        aria-controls="mobile-menu-overlay"
        className="mobile-menu-trigger flex flex-col justify-center items-center w-10 h-10 gap-1.25 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <span className="block w-5 h-px bg-neutral-800 transition-all duration-200" />
        <span className="block w-5 h-px bg-neutral-800 transition-all duration-200" />
        <span className="block w-5 h-px bg-neutral-800 transition-all duration-200" />
      </button>

      {/* Full-screen overlay — portalled to body to escape header stacking context */}
      {isOpen &&
        createPortal(
          <div
            id="mobile-menu-overlay"
            ref={overlayRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu navigasi"
            onKeyDown={handleTabKey}
            className="mobile-overlay fixed inset-0 z-50 flex flex-col"
            style={{
              animation: 'menuFadeIn 200ms ease-out forwards',
              backgroundColor: '#f9fafb',
            }}
          >
            {/* Top bar: close button left, logo right */}
            <div
              className="flex items-center justify-between px-5 py-4 border-b border-neutral-100"
              style={{ borderColor: '#e5e7eb' }}
            >
              <a
                href="/"
                onClick={closeMenu}
                className="text-lg font-semibold tracking-tight text-neutral-900 leading-none"
                aria-label="KSP CU Sinar Sejahtera — Beranda"
              >
                CU Sinar
                <br />
                <span
                  style={{ color: 'var(--color-primary, #1e5c6b)' }}
                  className="font-bold"
                >
                  Sejahtera
                </span>
              </a>

              <button
                ref={closeButtonRef}
                onClick={closeMenu}
                aria-label="Tutup menu navigasi"
                className="flex items-center justify-center w-10 h-10 rounded-md text-neutral-700 hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 4L16 16M16 4L4 16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation links — centered */}
            <nav
              className="flex-1 flex flex-col items-center justify-center gap-1"
              aria-label="Navigasi utama (mobile)"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-2xl font-medium text-neutral-800 hover:text-primary py-3 px-6 w-full text-center transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>,
          document.body,
        )}
    </>
  );
}
