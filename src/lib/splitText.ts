/**
 * Lightweight text splitter utility — replaces GSAP Club's SplitText.
 * Wraps each character or word in a span for animation.
 */

export function splitByChars(element: HTMLElement): HTMLSpanElement[] {
  const text = element.textContent || '';
  element.textContent = '';
  element.setAttribute('aria-label', text);

  const spans: HTMLSpanElement[] = [];
  for (const char of text) {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.display = 'inline-block';
    span.setAttribute('aria-hidden', 'true');
    if (char === ' ') span.style.width = '0.3em';
    element.appendChild(span);
    spans.push(span);
  }
  return spans;
}

export function splitByWords(element: HTMLElement): HTMLSpanElement[] {
  const text = element.textContent || '';
  element.textContent = '';
  element.setAttribute('aria-label', text);

  const words = text.split(/(\s+)/);
  const spans: HTMLSpanElement[] = [];
  for (const word of words) {
    if (/^\s+$/.test(word)) {
      element.appendChild(document.createTextNode(word));
      continue;
    }
    const span = document.createElement('span');
    span.textContent = word;
    span.style.display = 'inline-block';
    span.setAttribute('aria-hidden', 'true');
    element.appendChild(span);
    spans.push(span);
  }
  return spans;
}

/**
 * Revert a split element back to its original text.
 */
export function revertSplit(element: HTMLElement): void {
  const label = element.getAttribute('aria-label');
  if (label) {
    element.textContent = label;
    element.removeAttribute('aria-label');
  }
}
