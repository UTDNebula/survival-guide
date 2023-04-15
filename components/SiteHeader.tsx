import logo from '../public/Images/guide_logo.svg';
import Link from 'next/link';

export default function SiteHeader() {
  return (
    <nav className="md:h-[56px] p-0 justify-between bg-white shadow-[0_0px_4px_4px_rgba(0,0,0,0.25)] sticky top-0">
      <div className="h-full md:flex md:justify-between md:items-center max-w-7xl mx-auto">
        <Link href="/">
          <img className="h-[56px] md:max-h-full pl-4 pt-2" src={logo.src} alt="Nebula logo" />
        </Link>
        <div className="p-3 md:flex md:justify-between md:space-x-4">
          <Link
            href="/#featured"
            className="block text-center p-2 w-full md:w-auto rounded-full text-white font-bold bg-[#4659A7] hover:bg-[#3D4E94]"
          >
            Articles
          </Link>
          <Link
            href="/glossary"
            className="block text-center p-2 w-full md:w-auto rounded-full text-white font-bold bg-[#4659A7] hover:bg-[#3D4E94]"
          >
            Glossary
          </Link>
        </div>
      </div>
    </nav>
  );
}
