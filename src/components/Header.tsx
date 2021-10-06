import React from 'react';
import { Link } from 'gatsby';

/**
 * Component properties for a Header.
 */
export interface HeaderProps {
  siteTitle: string;
}

/**
 * The global site header.
 */
export default function Header({ siteTitle = 'UTD Survival Guide' }: HeaderProps) {
  // TODO: Make header sticky and float above home page.
  return (
    <header className="p-4 bg-primary sticky top-0 shadow-md">
      <div className="text-headline5 font-bold text-white">
        <Link to="/">{siteTitle}</Link>
      </div>
    </header>
  );
}
