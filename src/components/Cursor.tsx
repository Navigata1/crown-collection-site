'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Skip on touch devices or reduced motion
    if ('ontouchstart' in window) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!dot || !ring || !label) return;

    // Show custom cursor
    document.documentElement.style.cursor = 'none';
    dot.style.opacity = '1';
    ring.style.opacity = '1';

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.set(dot, { x: mouseX, y: mouseY });
    };

    const lerp = 0.12;
    const ticker = () => {
      ringX += (mouseX - ringX) * lerp;
      ringY += (mouseY - ringY) * lerp;
      gsap.set(ring, { x: ringX, y: ringY });
    };

    // Magnetic effect for data-magnetic elements
    const onMouseEnterMagnetic = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      gsap.to(ring, { scale: 1.8, duration: 0.3, ease: 'power2.out' });
      
      const handleMove = (ev: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (ev.clientX - cx) * 0.2;
        const dy = (ev.clientY - cy) * 0.2;
        gsap.to(el, { x: dx, y: dy, duration: 0.3, ease: 'power2.out' });
      };
      
      el.addEventListener('mousemove', handleMove as EventListener);
      el.dataset._magneticHandler = 'true';
      (el as any)._magneticMove = handleMove;
    };

    const onMouseLeaveMagnetic = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      gsap.to(ring, { scale: 1, duration: 0.3, ease: 'power2.out' });
      gsap.to(el, { x: 0, y: 0, duration: 0.3, ease: 'power2.out' });
      if ((el as any)._magneticMove) {
        el.removeEventListener('mousemove', (el as any)._magneticMove);
        delete (el as any)._magneticMove;
      }
    };

    // Hover labels for scent and product cards
    const onEnterViewCard = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      const text = el.dataset.cursorLabel || 'View';
      label.textContent = text;
      gsap.to(ring, { scale: 2.5, duration: 0.3, ease: 'power2.out' });
      gsap.to(label, { opacity: 1, duration: 0.2 });
    };

    const onLeaveViewCard = () => {
      gsap.to(ring, { scale: 1, duration: 0.3, ease: 'power2.out' });
      gsap.to(label, { opacity: 0, duration: 0.2 });
    };

    window.addEventListener('mousemove', onMouseMove);
    gsap.ticker.add(ticker);

    // Bind magnetic elements
    const magnetics = document.querySelectorAll('[data-magnetic]');
    magnetics.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterMagnetic);
      el.addEventListener('mouseleave', onMouseLeaveMagnetic);
    });

    // Bind cursor-label elements
    const cursorLabels = document.querySelectorAll('[data-cursor-label]');
    cursorLabels.forEach((el) => {
      el.addEventListener('mouseenter', onEnterViewCard);
      el.addEventListener('mouseleave', onLeaveViewCard);
    });

    // Hide cursor when leaving window
    const onMouseLeave = () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.2 });
    };
    const onMouseEnter = () => {
      gsap.to([dot, ring], { opacity: 1, duration: 0.2 });
    };
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      document.documentElement.style.cursor = '';
      window.removeEventListener('mousemove', onMouseMove);
      gsap.ticker.remove(ticker);
      magnetics.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterMagnetic);
        el.removeEventListener('mouseleave', onMouseLeaveMagnetic);
      });
      cursorLabels.forEach((el) => {
        el.removeEventListener('mouseenter', onEnterViewCard);
        el.removeEventListener('mouseleave', onLeaveViewCard);
      });
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          borderRadius: '50%',
          backgroundColor: '#CFA855',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: 0,
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference',
        }}
        aria-hidden="true"
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: '1px solid rgba(207, 168, 85, 0.5)',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: 0,
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        aria-hidden="true"
      >
        <span
          ref={labelRef}
          style={{
            fontFamily: 'var(--font-outfit), sans-serif',
            fontSize: 8,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#CFA855',
            opacity: 0,
            whiteSpace: 'nowrap',
          }}
        />
      </div>
    </>
  );
}
