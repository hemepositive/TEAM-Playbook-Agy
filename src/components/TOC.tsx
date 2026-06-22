import React, { useEffect, useState } from 'react';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export const TOC: React.FC = () => {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll('article h2, article h3'));
    const items: TOCItem[] = headingElements.map((el) => {
      const id = el.id || el.textContent?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || '';
      el.id = id; // Ensure ID exists for anchor link
      return {
        id,
        text: el.textContent || '',
        level: parseInt(el.tagName.substring(1))
      };
    });
    setHeadings(items);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setActiveId(visibleEntry.target.id);
        }
      },
      { rootMargin: '0px 0px -60% 0px', threshold: 0.1 }
    );

    headingElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <div className="space-y-4">
      <h4 className="text-sm font-semibold tracking-wider uppercase text-slate-400 font-display">On this page</h4>
      <nav className="space-y-2">
        {headings.map((h) => (
          <a
            key={h.id}
            href={`#${h.id}`}
            className={`block text-sm transition-colors duration-200 ${
              h.level === 3 ? 'pl-4' : ''
            } ${
              activeId === h.id
                ? 'text-emerald-500 font-medium light:text-emerald-600'
                : 'text-slate-500 hover:text-slate-300 light:text-slate-500 light:hover:text-slate-800'
            }`}
          >
            {h.text}
          </a>
        ))}
      </nav>
    </div>
  );
};
