import Link from 'next/link';

export default function SiteHeader() {
  return (
    <header className="p-4 bg-primary sticky top-0 shadow-md">
      <div className="text-headline5 font-bold text-white">
        <Link href="/" className="font-display">
          UTD Survival Guide
        </Link>
      </div>
    </header>
  );
}
