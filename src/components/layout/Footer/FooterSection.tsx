import React from 'react';

interface FooterSectionProps {
  title: string;
  links: Array<{
    text: string;
    href: string;
  }>;
}

export function FooterSection({ title, links }: FooterSectionProps) {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="hover:text-red-500">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}